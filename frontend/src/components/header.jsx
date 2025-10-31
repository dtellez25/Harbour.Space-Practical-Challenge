import React from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="relative w-full flex flex-col">
      {/* Top violet section */}
      <div className="bg-[#6C5CE7] h-[60px] flex items-center justify-between px-6 relative">
        {/* Left text */}
        <div className="flex items-center gap-1">
          <h1 className="text-white text-sm font-semibold tracking-wide">
            HARBOUR.SPACE
          </h1>
          <span className="text-white text-xs font-light opacity-90">
            /INTERACTION DESIGN
          </span>
        </div>

        {/* Hamburger icon (top-right corner, fixed within header) */}
        <Menu className="text-white w-6 h-6 absolute top-3 right-6 cursor-pointer" />
      </div>

      {/* Bottom white section */}
      <div className="bg-white h-[50px]"></div>

      {/* Apply Now Circle */}
      <div className="absolute top-[35px] right-[10%] translate-y-[-25%]">
        <button className="bg-[#2ECC71] text-white font-bold rounded-full w-[80px] h-[80px] text-[11px] flex flex-col justify-center items-center">
          APPLY<br />NOW
        </button>
      </div>
    </header>
  );
};
