
import React from "react";
import { Card } from "@/components/ui/card";

const AppScreenshot = () => {
  return (
    <div className="relative"  data-aos="fade-left">
      {/* Phone frame */}
      <div className="w-[250px] h-[500px] bg-[#003049] rounded-[36px] p-3 shadow-xl relative">
        {/* Screen content */}
        <div className="w-full h-full bg-[#FDF0D5] rounded-[28px] overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="h-6 w-full bg-[#FDF0D5] flex justify-between items-center px-4 text-xs text-[#003049]">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full border border-[#003049]"></div>
              <div className="w-3 h-3 rounded-full border border-[#003049]"></div>
            </div>
          </div>

          {/* App content */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
            <div className="w-full h-40 bg-[#003049] rounded-lg flex items-center justify-center mb-8">
              <span className="text-white text-xl font-bold">PLAYING CARDS</span>
            </div>
            <div className="w-full flex justify-center mb-6">
              <button className="bg-[#054D72] text-white px-4 py-2 rounded-md w-32 text-sm">
                Jogar
              </button>
            </div>
            
            {/* Navigation tabs */}
            <div className="mt-auto w-full flex justify-around pt-4 border-t border-[#003049] border-opacity-20">
              <div className="w-6 h-6 rounded-full bg-[#003049] bg-opacity-10"></div>
              <div className="w-6 h-6 rounded-full bg-[#003049] bg-opacity-10"></div>
              <div className="w-6 h-6 rounded-full bg-[#003049] bg-opacity-10"></div>
              <div className="w-6 h-6 rounded-full bg-[#003049] bg-opacity-10"></div>
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#003049] rounded-b-2xl"></div>
      </div>
      
      {/* Shadow effect */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[200px] h-8 bg-black opacity-10 blur-md rounded-full"></div>
      
      {/* Second phone (slightly visible in background) */}
      <div className="absolute -right-10 top-10 w-[250px] h-[500px] bg-[#003049] rounded-[36px] p-3 -rotate-6 opacity-20 z-[-1]">
        <div className="w-full h-full bg-[#FDF0D5] rounded-[28px]"></div>
      </div>
    </div>
  );
};

export default AppScreenshot;
