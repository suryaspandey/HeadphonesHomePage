import React from "react";
import { FAQData } from "./constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQs = () => {
  return (
    <>
      <section>
        <div className="container bg-white mb-4">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Frequently Asked Questions
          </h1>

          <Accordion type="single" collapsible className="space-y-4">
            {FAQData.map((faq) => (
              <AccordionItem
                key={faq.questionNo}
                value={`item-${faq.questionNo}`}
                className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white transition hover:shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold p-5 flex justify-between items-center text-left hover:bg-gray-100 transition">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed px-5 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQs;
