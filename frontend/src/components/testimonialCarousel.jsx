import React, { useRef } from "react";
import { FaLinkedinIn, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: "/irene.jpg",
  },
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: "/irene.jpg",
  },
  {
    name: "Irene Pereyra",
    title: "Interaction Design Fellow ’19",
    text: "This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experience offered through the program.",
    education: "B.A. Visual Design",
    img: "/irene.jpg",
  },
];

export const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-8 py-20 overflow-hidden">
      {/* Arrows */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
      >
        <FaChevronLeft className="text-gray-500" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
      >
        <FaChevronRight className="text-gray-500" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-6 scroll-smooth justify-center"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-0 w-[70%] md:w-[65%] h-[360px] bg-white border border-gray-200 rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
