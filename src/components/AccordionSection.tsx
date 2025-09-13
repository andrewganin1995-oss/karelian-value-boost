import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ReactNode } from "react";

interface AccordionSectionProps {
  title: string;
  children: ReactNode;
  value: string;
}

const AccordionSection = ({ title, children, value }: AccordionSectionProps) => {
  return (
    <AccordionItem value={value} className="bg-card rounded-lg px-6 border-0 shadow-card mb-4">
      <AccordionTrigger className="text-left text-2xl md:text-3xl font-bold hover:text-primary transition-colors py-6">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pb-6">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionSection;