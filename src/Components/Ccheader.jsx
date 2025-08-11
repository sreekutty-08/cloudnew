import React from 'react';
import { Clock, Users, Lightbulb, DollarSign, Target, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4">
        
        {/* Left Side: Content */}
        <div className='mt-[-150px]'>
          <h1 className="text-4xl font-default text-black mb-6 ml-[-40px]">
            Explore with <span className='text-blue-500'>Cloud Qlobe</span>
          </h1>
          
          <p className="text-gray-700 text-[15px] leading-relaxed text-justify mb-8 ml-[-40px] max-w-[520px]">
            Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
            and secure SIP routing. With intelligent telecom solutions, we ensure consistent
            call quality, data efficiency, and scalable infrastructure across all regions.
          </p>
          
          <div className="flex space-x-4 ml-[-40px]">
            <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition">
              Get Started
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-2 hover:bg-orange-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Infographic Tree */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Tree Trunk */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg"></div>
          
          {/* Main Tree Structure */}
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {/* Tree branches */}
            <path d="M250 450 L200 350 L150 250" stroke="#8B4513" strokeWidth="6" fill="none" />
            <path d="M250 450 L300 350 L350 250" stroke="#8B4513" strokeWidth="6" fill="none" />
            <path d="M250 450 L220 320 L180 200" stroke="#8B4513" strokeWidth="4" fill="none" />
            <path d="M250 450 L280 320 L320 200" stroke="#8B4513" strokeWidth="4" fill="none" />
            <path d="M250 450 L250 300 L250 150" stroke="#8B4513" strokeWidth="8" fill="none" />
          </svg>

          {/* Orange Section - Analytics & Time */}
          <div className="absolute top-16 left-8">
            <div className="relative">
              {/* Large circle */}
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-300 rounded-full"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="absolute top-8 -left-8 w-4 h-4 bg-orange-200 rounded-full"></div>
              <div className="absolute -top-6 left-12 w-5 h-5 bg-orange-400 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -left-16 top-28 bg-white p-3 rounded-lg shadow-lg max-w-32">
              <h4 className="font-bold text-xs text-gray-800 mb-1">REAL-TIME</h4>
              <p className="text-xs text-gray-600">24/7 monitoring and instant call routing optimization</p>
            </div>
          </div>

          {/* Blue Section - Strategy & Chess */}
          <div className="absolute top-8 right-8">
            <div className="relative">
              {/* Large circle */}
              <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-300 rounded-full"></div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="absolute top-6 -right-10 w-5 h-5 bg-blue-200 rounded-full"></div>
              <div className="absolute -top-8 left-16 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-12 -right-6 w-3 h-3 bg-blue-300 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -right-20 top-32 bg-white p-3 rounded-lg shadow-lg max-w-36">
              <h4 className="font-bold text-xs text-gray-800 mb-1">STRATEGY</h4>
              <p className="text-xs text-gray-600">Intelligent routing strategies for optimal performance</p>
            </div>
          </div>

          {/* Teal Section - Innovation */}
          <div className="absolute top-32 left-2">
            <div className="relative">
              {/* Large circle */}
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-teal-300 rounded-full"></div>
              <div className="absolute -bottom-3 -left-2 w-7 h-7 bg-teal-500 rounded-full"></div>
              <div className="absolute top-4 -left-6 w-3 h-3 bg-teal-200 rounded-full"></div>
              <div className="absolute -top-4 left-8 w-4 h-4 bg-teal-400 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -left-20 top-24 bg-white p-3 rounded-lg shadow-lg max-w-32">
              <h4 className="font-bold text-xs text-gray-800 mb-1">INNOVATION</h4>
              <p className="text-xs text-gray-600">Cutting-edge VoIP technology and AI-driven solutions</p>
            </div>
          </div>

          {/* Red Section - Finance */}
          <div className="absolute bottom-24 left-12">
            <div className="relative">
              {/* Large circle */}
              <div className="w-22 h-22 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-2 -right-3 w-6 h-6 bg-red-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-3 w-8 h-8 bg-red-600 rounded-full"></div>
              <div className="absolute top-2 -left-8 w-4 h-4 bg-red-300 rounded-full"></div>
              <div className="absolute -top-6 left-10 w-5 h-5 bg-red-500 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -left-24 -top-4 bg-white p-3 rounded-lg shadow-lg max-w-36">
              <h4 className="font-bold text-xs text-gray-800 mb-1">COST-EFFECTIVE</h4>
              <p className="text-xs text-gray-600">Competitive rates with transparent pricing models</p>
            </div>
          </div>

          {/* Green Section - Teams */}
          <div className="absolute bottom-20 right-16">
            <div className="relative">
              {/* Large circle */}
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-3 -right-2 w-7 h-7 bg-green-300 rounded-full"></div>
              <div className="absolute -bottom-1 -left-4 w-5 h-5 bg-green-500 rounded-full"></div>
              <div className="absolute top-8 -right-8 w-4 h-4 bg-green-200 rounded-full"></div>
              <div className="absolute -top-6 left-12 w-6 h-6 bg-green-400 rounded-full"></div>
              <div className="absolute bottom-6 -right-6 w-3 h-3 bg-green-300 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -right-20 -top-8 bg-white p-3 rounded-lg shadow-lg max-w-36">
              <h4 className="font-bold text-xs text-gray-800 mb-1">COLLABORATION</h4>
              <p className="text-xs text-gray-600">Seamless team connectivity across global networks</p>
            </div>
          </div>

          {/* Purple Section - Target */}
          <div className="absolute bottom-8 right-4">
            <div className="relative">
              {/* Large circle */}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              {/* Small circles */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-400 rounded-full"></div>
              <div className="absolute -bottom-3 -left-2 w-6 h-6 bg-purple-600 rounded-full"></div>
              <div className="absolute top-4 -left-6 w-3 h-3 bg-purple-300 rounded-full"></div>
              <div className="absolute -top-4 left-8 w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
            {/* Info box */}
            <div className="absolute -right-24 -top-12 bg-white p-3 rounded-lg shadow-lg max-w-36">
              <h4 className="font-bold text-xs text-gray-800 mb-1">CONNECTIVITY</h4>
              <p className="text-xs text-gray-600">Reliable global VoIP infrastructure for seamless communication</p>
            </div>
          </div>

          {/* Decorative floating circles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-12 w-3 h-3 bg-blue-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-24 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 left-32 w-1 h-1 bg-teal-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-60 right-32 w-1 h-1 bg-red-300 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;