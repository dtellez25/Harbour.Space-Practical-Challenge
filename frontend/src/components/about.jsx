import React from "react";
import aboutPhoto from "../assets/images/Harbour.SpaceStudentPhoto.jpg";

export const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-8 py-24 gap-16">
      {/* Left Section - Image Placeholder */}
      <div className="flex justify-center items-center">
        {/* Placeholder circle, replace src later */}
        <div className="w-[360px] h-[360px] rounded-full bg-gray-100 border border-gray-200 flex items-center overflow-hidden">
          <img src={aboutPhoto} alt="Apprenticeship" className="w-full h-full object-cover rounded-full" />
          <p className="text-gray-400 text-sm">Image goes here</p>
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="flex flex-col justify-center w-[360px] space-y-4">
        <h2 className="text-3xl font-semibold text-[#6C5CE7]">
          About the apprenticeship
        </h2>

        <p className="text-gray-600 leading-relaxed text-[16px]">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience, and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>
      </div>
    </section>
  );
};
