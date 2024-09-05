import React, { useState } from 'react';

const FaqComponent = ({ faqs }) => {
  return (
    <div className="mx-auto my-8">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-pink-500 py-4">
      <button
        className="w-full text-left text-lg font-semibold text-slate-900 focus:outline-none"
        onClick={toggleFaq}
      >
        {question}
        <span className="float-right">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-slate-700 text-left">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

export default FaqComponent;
