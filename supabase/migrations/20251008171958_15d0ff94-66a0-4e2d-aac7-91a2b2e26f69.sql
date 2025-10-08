-- Fix the send_lead_to_make function with correct pg_net syntax
CREATE OR REPLACE FUNCTION public.send_lead_to_make()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Send POST request to Make Webhook using pg_net
  SELECT net.http_post(
    url := 'https://hook.eu2.make.com/mo8djyobdzvw5arq1mxrp2haho3e5wc2',
    body := jsonb_build_object(
      'id', NEW.id,
      'name', NEW.name,
      'contact', NEW.contact,
      'purpose', NEW.purpose,
      'preferred_contact_method', NEW.preferred_contact_method,
      'created_at', NEW.created_at
    )
  ) INTO request_id;

  RETURN NEW;
END;
$$;