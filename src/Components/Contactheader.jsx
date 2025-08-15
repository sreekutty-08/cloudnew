import React from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  ThumbsUp,
  Cloud,
  Video,
  Touchpad,
  UserCheck,
  Upload,
  CreditCard,
} from 'lucide-react';
import { LuGlobeLock, LuLoaderPinwheel, LuLayers, LuMails, LuTarget, LuBoxes } from "react-icons/lu";

const Contactheader = () => {
  return (
    <section className="bg-white h-[764px] flex items-center px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full relative">

        {/* Left Content */}
        <div className="mt-[-60px] ml-[-4px]">
          <h1 className="text-4xl md:text-5xl font-default leading-snug text-gray-500 ml-[-40px] mb-6">
            The mastery of <span className="text-blue-500 font-default">Telecom</span>
          </h1>
        <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 ml-[-40px] max-w-[520px]">
  Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
  and secure SIP routing. With intelligent telecom solutions, we ensure consistent
  call quality, data efficiency, and scalable infrastructure across all regions.
</p>

          <div className="flex flex-wrap gap-4 ml-[-40px]">
            <button className="bg-blue-500 text-white px-6 py-3 squared-sm hover:bg-blue-600 transition font-medium shadow-md">
              Get Started
            </button>
            <button className="border border-gray-400 text-black px-6 py-3 rounded-sm hover:bg-gray-100 transition font-medium shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Icon Area */}
        <div className="relative  h-[600px] mt-[-50px] ml-[145px]">

          {/* 1 */}
          <div className="absolute top-[-35px] left-[-20px] bg-[#fbb315] w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg mt-[150px]">
            <div className="-rotate-45 text-white">
              <LuMails className='text-yellow-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 2 */}
          <div className="absolute top-[62px] left-[100px] bg-[#2c4495] w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg ml-[80px] mt-[50px]">
            <div className="-rotate-45 text-white">
              <LuTarget className='text-blue-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 3 */}
          <div className="absolute top-[55px] left-[80px] bg-[#293276] w-[100px] h-[100px]  flex items-center justify-center border rounded-lg rotate-45 shadow-lg mt-[150px]">
            <div className="-rotate-45 text-white">
              <LuLoaderPinwheel className='text-blue-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 4 */}
          <div className="absolute top-[190px] left-[280px] bg-[#b72026] w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg mt-[10px]">
            <div className="-rotate-45 text-white">
              <LuGlobeLock className='text-red-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 5 */}
          <div className="absolute top-[310px] left-[10px] bg-[#db9428] w-[100px] h-[100px]  flex items-center justify-center border rounded-lg rotate-45 shadow-lg ml-[-30px] mt-[-20px]">
            <div className="-rotate-45 text-white">
              <LuLayers className='text-yellow-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 6 */}
          <div className="absolute top-[290px] left-[-70px] bg-[#fbb315] w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg ml-[250px]">
            <div className="-rotate-45 text-white">
              <ThumbsUp className='text-yellow-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 7 */}
          <div className="absolute top-[110px] left-[230px] bg-yellow-600 w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg ml-[150px]">
            <div className="-rotate-45 text-white">
              <Phone className='text-yellow-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 8 */}
          <div className="absolute top-[-155px] left-[378px] bg-[#b72026] w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg mt-[450px]">
            <div className="-rotate-45 text-white">
              <Cloud className='text-red-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 9 */}
          <div className="absolute top-[-100px] left-[80px] bg-blue-800 w-[100px] h-[100px]  flex items-center border rounded-lg justify-center rotate-45 shadow-lg mt-[480px]">
            <div className="-rotate-45 text-white">
              <LuBoxes className='text-blue-100 w-[28px] h-[28px]' />
            </div>
          </div>

          {/* 10 */}
          <div className="absolute top-[430px] left-[-38px] bg-blue-900 w-[100px] h-[100px] flex items-center justify-center border rounded-lg rotate-45 shadow-lg mt-[-50px] ml-[320px]">
            <div className="-rotate-45 text-white">
              <CreditCard className='text-blue-100 w-[28px] h-[28px]' />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contactheader;
