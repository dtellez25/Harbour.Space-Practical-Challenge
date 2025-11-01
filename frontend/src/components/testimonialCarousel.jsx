import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialPhoto from "../assets/images/professionalHeadshot.jpg";

const testimonials = [
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: testimonialPhoto,
  },
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: testimonialPhoto,
  },
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: testimonialPhoto,
  },
];

export const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -650, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 650, behavior: "smooth" });
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-8 py-20 overflow-hidden">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
      >
        <FaChevronLeft className="text-gray-500" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
      >
        <FaChevronRight className="text-gray-500" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth justify-start hide-scrollbar"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-[70%] md:w-[65%] h-[360px] bg-white border border-gray-200 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {/* Donut-style circular reveal */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-md">
                  {/* White donut ring that fades away */}
                  <motion.div
                    className="absolute inset-0 z-10 bg-white"
                    initial={{
                      WebkitMaskImage:
                        "radial-gradient(circle at center, transparent 35%, rgba(255,255,255,1) 36%)",
                      maskImage:
                        "radial-gradient(circle at center, transparent 35%, rgba(255,255,255,1) 36%)",
                      opacity: 1,
                    }}
                    whileInView={{
                      WebkitMaskImage:
                        "radial-gradient(circle at center, transparent 100%, rgba(255,255,255,0) 101%)",
                      maskImage:
                        "radial-gradient(circle at center, transparent 100%, rgba(255,255,255,0) 101%)",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  />

                  {/* Image zoom-out */}
                  <motion.img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.25 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                  />
                </div>

                {/* Name and title */}
                <div>
                  <p className="text-gray-800 font-medium text-[15px] leading-tight">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-[13px] leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>

              <FaLinkedinIn className="text-gray-400 text-xl" />
            </div>

            {/* Body */}
            <div className="px-16 flex-grow flex items-center justify-center">
              <p className="text-gray-700 text-[25px] leading-[2.1rem] font-light tracking-wide mx-8 my-6 text-justify">
                {item.text}
              </p>
            </div>

            {/* Footer */}
            <div className="px-8 pb-5 pt-3 border-t border-gray-100 text-sm text-gray-500 text-center">
              <span className="font-medium text-gray-700">Education</span> ·{" "}
              {item.education}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
