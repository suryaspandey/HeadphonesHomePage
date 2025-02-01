import React from "react";
import { FAQData } from "./constants";

const FAQs = () => {
  return (
    <>
      <section>
        <div className="container bg-white">Frequently Asked Questions</div>
        {FAQData.map((faq) => {
          return <></>;
        })}
      </section>
    </>
  );
};

export default FAQs;
