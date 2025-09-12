import { useCallback } from "react";

export const useScrollToForm = () => {
  const scrollToForm = useCallback(() => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, []);

  return scrollToForm;
};