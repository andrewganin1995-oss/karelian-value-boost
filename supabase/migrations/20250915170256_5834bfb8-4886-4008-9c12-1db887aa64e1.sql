-- Add preferred_contact_method column to leads table
ALTER TABLE public.leads 
ADD COLUMN preferred_contact_method TEXT;