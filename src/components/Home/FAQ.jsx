import React from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Contact our support team to initiate a return.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and times vary depending on your location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website.",
  },
  {
    question: "Are the products authentic?",
    answer:
      "Absolutely! We source our products directly from manufacturers and authorized distributors to ensure 100% authenticity.",
  },
];

const FAQ = () => {
  return (
    <section className="container mx-auto mt-30 mb-20">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl my-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
          Got questions? We've got answers. Here are some of the most common
          inquiries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 xl:px-0">
        <div className="join join-vertical w-full gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus join-item border border-base-300 bg-base-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium text-gray-800 dark:text-white">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-600 dark:text-gray-300">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
