-- Fix send_lead_to_make function to use correct column names
CREATE OR REPLACE FUNCTION public.send_lead_to_make()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  response json;
BEGIN
  -- Send POST request to Make Webhook with correct field names
  SELECT
    net.http_post(
      url := 'https://hook.eu2.make.com/mo8djyobdzvw5arq1mxrp2haho3e5wc2',
      body := json_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'contact', NEW.contact,
        'purpose', NEW.purpose,
        'preferred_contact_method', NEW.preferred_contact_method,
        'created_at', NEW.created_at
      )
    )
  INTO response;

  RETURN NEW;
END;
$$;