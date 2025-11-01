import React, { useState } from "react";
import { motion } from "framer-motion";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Program conditions",
      question: "What are my obligations?",
      answer: `The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor’s programme and at the end of the first academic year of their Master’s programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.

Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi–industry corporation with 140 years of history in Thailand. Together we ensure students get the best knowledge about the current job market opportunities.

We offer our students paid internship options during studies jointly with our industrial partners.

Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.`,
    },
    {
      category: "Program conditions",
      question: "Do I get a job placement upon graduation?",
      answer:
        "Yes, graduates receive guaranteed job placement opportunities through our industrial partners network.",
    },
    {
      category: "Program conditions",
      question: "What if I want to start my own company?",
      answer:
        "Students are encouraged to pursue entrepreneurship. We provide mentorship and access to resources that help them launch their own startups.",
    },
    {
      category: "Program conditions",
      question: "Do I need a visa?",
      answer:
        "Yes, you will need a student visa to study with us. Our admissions team will guide you through the visa application process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-[#6C5CE7] leading-tight">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        <div className="text-sm text-gray-500 mt-4 md:mt-0 md:text-right">
          Filter by:{" "}
          <select className="ml-2 border border-gray-300 rounded-md px-3 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#6C5CE7]">
            <option>Program conditions</option>
            <option>All</option>
            <option>Admissions</option>
            <option>Harbour.Space</option>
            <option>SCG</option>
            <option>Living in Bangkok</option>
          </select>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-8" />

      {/* FAQs */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer transition-all"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-[#6C5CE7] font-medium w-1/3">
                  {faq.category}
                </p>

                <p className="font-semibold text-gray-800 w-2/3">
                  {faq.question}
                </p>

                {/* Animated Circle Button */}
                <motion.div
                  className="relative flex items-center justify-center w-8 h-8"
                  initial={false}
                >
                  {/* Shadowed white circle base */}
                  <motion.div
                    className="absolute w-8 h-8 rounded-full bg-white shadow-[0_0_4px_rgba(0,0,0,0.15)] z-0"
                    animate={{
                      backgroundColor: isOpen ? "#6C5CE7" : "#ffffff",
                    }}
                    transition={{
                      delay: isOpen ? 0.7 : 0,
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Hoop (gray to violet clockwise) */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full z-10"
                    viewBox="0 0 40 40"
                    initial={false}
                  >
                    {/* Background gray ring */}
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="transparent"
                      stroke="#ccc"
                      strokeWidth="2"
                    />

                    {/* Animated violet stroke */}
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="transparent"
                      stroke="#6C5CE7"
                      strokeWidth="2"
                      strokeDasharray="113"
                      strokeDashoffset={isOpen ? 0 : 113}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      style={{ rotate: "-90deg", transformOrigin: "center" }}
                    />
                  </motion.svg>

                  {/* Plus/Minus Symbol */}
                  <motion.span
                    className="absolute text-lg font-bold z-20"
                    animate={{
                      color: isOpen ? "#FFFFFF" : "#6C5CE7",
                    }}
                    transition={{ delay: isOpen ? 0.7 : 0, duration: 0.3 }}
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </motion.div>
              </div>

              {/* Answer (appears after full animation) */}
              {isOpen && (
                <motion.p
                  className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line w-2/3 ml-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
