-- Enable pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Grant usage on net schema to authenticated and anon users
GRANT USAGE ON SCHEMA extensions TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA extensions TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA extensions TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA extensions TO postgres, anon, authenticated, service_role;

-- Update the function to use extensions.http_post instead of net.http_post
CREATE OR REPLACE FUNCTION public.send_lead_to_make()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  response json;
BEGIN
  -- Send POST request to Make Webhook with correct field names
  SELECT
    extensions.http_post(
      url := 'https://hook.eu2.make.com/mo8djyobdzvw5arq1mxrp2haho3e5wc2',
      body := json_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'contact', NEW.contact,
        'purpose', NEW.purpose,
        'preferred_contact_method', NEW.preferred_contact_method,
        'created_at', NEW.created_at
      )::text
    )
  INTO response;

  RETURN NEW;
END;
$$;