import React from "react";
import {
  Target,
  Brain,
  Users,
  Microscope,
  Rocket,
  ChessKnight,
  Trophy,
} from "lucide-react";
import { FaAmilia } from "react-icons/fa6";

const InfographicLayout = () => {
  return (
    <div className="min-h-[680px] bg-white flex items-center justify-center px-8">
      {/* Main Container */}
      <div className="max-w-8xl w-full grid grid-cols-2 gap-8">
        
        {/* Left Side Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="flex-1 mt-[-150px] relative z-10">
            <h1 className="text-4xl font-bold text-black mb-6 ml-[-40px]">
              Explore with{" "}
              <span className="text-blue-500">Cloud Qlobe</span>
            </h1>
            <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 ml-[-40px] max-w-[520px]">
              Cloudqlobe enables businesses to connect worldwide using reliable VoIP
              platforms and secure SIP routing. With intelligent telecom solutions,
              we ensure consistent call quality, data efficiency, and scalable
              infrastructure across all regions.
            </p>
            <div className="flex space-x-4 ml-[-40px]">
              <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Get Started
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-2 hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Infographic */}
        <div className="relative flex items-center justify-center">
          {/* Center Trophy */}
          <div className="relative flex items-center justify-center w-[250px] h-[250px] rounded-full border-[18px] border-gray-300 mt-[-150px] ml-[-100px]">
            <Trophy className="w-[100px] h-[100px] text-gray-700" />
          </div>

          {/* LEFT SIDE ICONS WITH TEXT ON LEFT */}
          {/* Using flex-col and absolute positioning closer to center */}
          <div className="absolute top-[-12rem] flex items-center space-x-6 right-[40.8rem]">
            
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-red-500 bg-white shadow-md">
              <Brain className="w-10 h-10 text-red-500" />
            </div>
          </div>

          <div className="absolute top-[-4rem] left-[-2rem] flex items-center space-x-6">
            
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-cyan-500 bg-white shadow-md">
              <Microscope className="w-10 h-10 text-cyan-500" />
            </div>
          </div>

          <div className="absolute top-[4rem] left-[-2rem] flex items-center space-x-6">
            
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-yellow-500 bg-white shadow-md">
              <Users className="w-10 h-10 text-yellow-500" />
            </div>
          </div>

          {/* RIGHT SIDE ICONS WITH TEXT ON RIGHT */}
          {/* Flex row with icon then text */}
          <div className="absolute top-[-12rem]  flex items-center space-x-6 ml-[450px]">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-blue-500 bg-white shadow-md">
              <Target className="w-10 h-10 text-blue-500" />
            </div>
            
          </div>

          <div className="absolute top-[-4rem]  flex items-center space-x-6 ml-[450px]">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-purple-500 bg-white shadow-md">
              <FaAmilia className="w-10 h-10 text-purple-500" />
            </div>
           
          </div>

          <div className="absolute top-[4rem]  flex items-center space-x-6 ml-[450px]">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border-[10px] border-pink-500 bg-white shadow-md">
              <Rocket className="w-10 h-10 text-pink-500" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicLayout;
