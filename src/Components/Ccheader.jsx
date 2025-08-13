import React from 'react';
import { Globe, Phone, Zap, Shield, Users, Award } from 'lucide-react';

const CloudQlobeGlobal = () => {
  // Updated flag URLs for requested countries (latest flags)
  const topFlags = [
    { name: 'USA', flagUrl: 'https://flagcdn.com/w160/us.png', color: 'from-red-500 to-blue-600' },
    { name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w160/gb.png', color: 'from-red-600 to-blue-700' },
    { name: 'China', flagUrl: 'https://flagcdn.com/w160/cn.png', color: 'from-red-500 to-yellow-500' },
    { name: 'France', flagUrl: 'https://flagcdn.com/w160/fr.png', color: 'from-blue-600 to-red-500' },
    { name: 'Germany', flagUrl: 'https://flagcdn.com/w160/de.png', color: 'from-black to-red-500' },
  ];

  const bottomFlags = [
    { name: 'Australia', flagUrl: 'https://flagcdn.com/w160/au.png', color: 'from-blue-600 to-red-600' },
    { name: 'Spain', flagUrl: 'https://flagcdn.com/w160/es.png', color: 'from-red-600 to-yellow-500' },
    { name: 'Canada', flagUrl: 'https://flagcdn.com/w160/ca.png', color: 'from-red-500 to-white' },
    { name: 'Italy', flagUrl: 'https://flagcdn.com/w160/it.png', color: 'from-green-600 to-red-500' },
    { name: 'Japan', flagUrl: 'https://flagcdn.com/w160/jp.png', color: 'from-white to-red-500' },
  ];

  return (
    <div className="h-[680px] bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      {/* Additional subtle background icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Light colored background icons */}
        <Globe className="absolute top-10 right-16 text-blue-100 w-20 h-20 opacity-20" />
        <Phone className="absolute top-28 left-12 text-cyan-100 w-16 h-16 opacity-15" />
        <Zap className="absolute bottom-32 right-24 text-yellow-100 w-24 h-24 opacity-10" />
        <Shield className="absolute bottom-10 left-24 text-green-100 w-20 h-20 opacity-15" />
        <Users className="absolute top-48 right-40 text-purple-100 w-24 h-24 opacity-10" />
        <Award className="absolute bottom-40 left-40 text-orange-100 w-20 h-20 opacity-15" />
      </div>

      <div className="flex h-full relative z-10">
        {/* Left Side - Content */}
        <div className="lg:w-1/2 flex flex-col justify-center z-10 ml-[60px]">
          <h1 className="text-4xl lg:text-5xl font-Default text-gray-800 mb-6 leading-snug">
            The mastery of <span className="text-blue-500">Telecom</span>
          </h1>
          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-[520px]">
            Cloudqlobe enables businesses to connect worldwide using reliable VoIP
            platforms and secure SIP routing. With intelligent telecom solutions,
            we ensure consistent call quality, data efficiency, and scalable
            infrastructure across all regions.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:border-gray-400">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Global Map with Real Flags */}
        <div className="flex-1 relative flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-xl h-full flex flex-col items-center justify-center">

            {/* Top Row Flags (moved up a bit) with increased spacing */}
            <div className="flex space-x-12 z-10 mb-16 -mt-8 ml-[-100px]">
              {topFlags.map((country, index) => (
                <div key={`top-${index}`} className="relative group cursor-pointer">
                  <div className="w-20 h-20 overflow-hidden border-3 border-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25 bg-white">
                    {/* Square corners */}
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${country.color} flex items-center justify-center text-white font-bold text-sm">${country.name.slice(0, 3).toUpperCase()}</div>`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 border border-blue-400/40 rounded-lg animate-pulse opacity-60"></div>
                </div>
              ))}
            </div>

            {/* Bottom Row Flags with increased spacing */}
            <div className="flex space-x-12 z-10 ml-[-100px]">
              {bottomFlags.map((country, index) => (
                <div key={`bottom-${index}`} className="relative group cursor-pointer">
                  <div className="w-[80px] h-[80px] overflow-hidden border-3 border-white shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25 bg-white">
                    {/* Square corners */}
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${country.color} flex items-center justify-center text-white font-bold text-sm">${country.name.slice(0, 3).toUpperCase()}</div>`;
                      }}
                    />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    {country.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse shadow-lg">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 border border-blue-400/40 rounded-lg animate-pulse opacity-60"></div>
                </div>
              ))}
            </div>

            {/* Floating Data Points */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute bottom-20 left-10 w-2 h-2 bg-cyan-500 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-xl">
        <div className="flex items-center space-x-8 text-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">150+</div>
            <div className="text-xs text-gray-500">Countries</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-600">99.9%</div>
            <div className="text-xs text-gray-500">Uptime</div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-xs text-gray-500">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudQlobeGlobal;
