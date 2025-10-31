import React from "react";

export const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto px-8 py-20 gap-16">
      {/* Left Section */}
      <div className="flex-[1.2] space-y-6">
        <h1 className="text-[42px] font-semibold text-[#6C5CE7] leading-tight">
          Interaction Design Apprenticeship
        </h1>

        <p className="font-semibold text-gray-800 text-[17px] leading-relaxed">
          A fully funded work–study program to launch your tech career
        </p>

        <p className="text-gray-600 leading-[1.9] text-[16px] w-[90%]">
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.
        </p>

        <p className="text-gray-800 text-[16px]">
          <span className="font-semibold">Position:</span> Marketing Performance
        </p>

        <button className="bg-[#6C5CE7] text-white font-medium px-8 py-3 rounded-full hover:bg-[#5942c3] transition-all text-[15px]">
          Apply Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-between w-[480px] h-[346px]">
        {/* Powered By */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/zeptolab-logo.png"
            alt="Zeptolab Logo"
            className="w-10 h-10"
          />
          <div className="text-left">
            <p className="text-gray-500 text-sm">Powered by:</p>
            <p className="font-medium text-gray-800">Zeptolab</p>
          </div>
        </div>

        {/* Countdown Box */}
        <div className="border border-gray-200 rounded-lg p-5 w-full h-[120px]">
          <p className="text-[#6C5CE7] text-sm font-medium mb-1">
            Application closes in
          </p>
          <p className="text-gray-800 text-lg mt-2">
            6 Day : 22 Hrs : 56 Min : 13 Sec
          </p>
        </div>

        {/* Info Box */}
        <div className="border border-gray-200 rounded-lg p-5 w-full h-[210px] grid grid-cols-2 gap-y-3 text-sm mt-3">
          <div>
            <p className="text-[#6C5CE7] font-medium">Location</p>
            <p className="text-gray-800">Bangkok</p>
          </div>
          <div>
            <p className="text-[#6C5CE7] font-medium">Duration</p>
            <p className="text-gray-800">1 Year Full-Time</p>
          </div>
          <div>
            <p className="text-[#6C5CE7] font-medium">Start date</p>
            <p className="text-gray-800">30 June 2020</p>
          </div>
          <div>
            <p className="text-[#6C5CE7] font-medium">End date</p>
            <p className="text-gray-800">3 Aug 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
};
