-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role public.app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix the leads table RLS policy - drop the old one and create proper one
DROP POLICY IF EXISTS "Policy to implement Time To Live (TTL)" ON public.leads;

CREATE POLICY "Admins can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add database constraints for input validation on leads table
ALTER TABLE public.leads
ADD CONSTRAINT name_length_check CHECK (char_length(name) <= 100 AND char_length(name) > 0);

ALTER TABLE public.leads
ADD CONSTRAINT contact_length_check CHECK (char_length(contact) <= 255 AND char_length(contact) > 0);

ALTER TABLE public.leads
ADD CONSTRAINT purpose_length_check CHECK (char_length(purpose) <= 200);

-- Fix webhook functions - set search_path to public
CREATE OR REPLACE FUNCTION public.call_webhook()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  response json;
BEGIN
  SELECT content::json INTO response
  FROM http_get('https://realk.app.n8n.cloud/webhook-test/b6f13d44-e379-49dd-94fe-554530fc3013');
  RAISE NOTICE 'Response: %', response;
END;
$$;

CREATE OR REPLACE FUNCTION public.trigger_call_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow trigger execution for authenticated admin users
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RETURN NEW;
  END IF;
  
  PERFORM call_webhook();
  RETURN NEW;
END;
$$;