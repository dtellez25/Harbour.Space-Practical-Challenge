import React from "react";

export const CommitmentOverview = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        {/* LEFT SIDE - Scholarship Value */}
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between h-[560px]">
          <div>
            <p className="text-[#6C5CE7] font-medium text-sm mb-3">
              Scholarship value
            </p>
            <h2 className="text-5xl font-light text-gray-800 mb-6">
              €31,300
            </h2>
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-[#6C5CE7] font-medium">
              <p>Tuition covered</p>
              <p>Remaining</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>€20,900</p>
              <p>€2,000</p>
            </div>

            <div className="mt-3">
              <p className="text-[#6C5CE7] font-medium">Living stipend</p>
              <p className="text-gray-700">€8,400 (€700/month)</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between h-[560px]">
          {/* Top - Two Commitment Boxes */}
          <div className="grid md:grid-cols-2 gap-8 flex-1">
            {/* Study Commitment */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <p className="text-[#6C5CE7] font-medium text-sm mb-2">
                  Study commitment
                </p>
                <h3 className="text-xl text-gray-800 font-light mb-2">
                  3 hours / day
                </h3>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                You will complete 15 modules to graduate. Daily classes are 3
                hours, plus coursework to complete in your own time.
              </p>
            </div>

            {/* Work Commitment */}
            <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <p className="text-[#6C5CE7] font-medium text-sm mb-2">
                  Work commitment
                </p>
                <h3 className="text-xl text-gray-800 font-light mb-2">
                  4 hours / day
                </h3>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Immerse yourself in the professional world during your
                apprenticeship. You’ll learn from the best and apply your
                knowledge in real projects from day one.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center text-gray-700 font-medium text-sm my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="mx-4">GRADUATION</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Bottom - Full Time Contract */}
          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-[#6C5CE7] font-medium text-sm mb-2">
              A full-time contract
            </p>
            <h3 className="text-xl text-gray-800 font-light mb-2">
              1 Year / Full-Time
            </h3>
            <div className="border-t border-gray-200 my-4"></div>
            <p className="text-gray-600 text-sm leading-relaxed">
              You’ll be guaranteed a 1-year contract with SCG upon graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
