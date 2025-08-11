import React from 'react';
import { Globe, Users, Zap, Shield, Phone, TrendingUp } from 'lucide-react';

const TelecomHeroSection = () => {
  const infographicItems = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Reach",
      description: "Connect worldwide with reliable VoIP platforms across all regions and markets",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      gearColor: "bg-green-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Focus", 
      description: "Dedicated support and personalized telecom solutions for every business need",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      gearColor: "bg-blue-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure SIP",
      description: "Enterprise-grade security with encrypted routing and protected data transmission",
      color: "bg-gradient-to-br from-purple-400 to-purple-600", 
      gearColor: "bg-purple-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "High Performance",
      description: "Lightning-fast call processing with optimized network infrastructure worldwide",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      gearColor: "bg-orange-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Quality",
      description: "Crystal clear voice transmission with advanced codec technology and routing",
      color: "bg-gradient-to-br from-red-400 to-red-600",
      gearColor: "bg-red-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalability",
      description: "Grow your business with flexible infrastructure that adapts to your needs",
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      gearColor: "bg-indigo-500"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side Content */}
          <div className="lg:w-1/2 flex flex-col justify-center z-10">
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
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

          {/* Right Side Circular Cards */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-8 max-w-[500px] mx-auto">
              
              {/* Top Left Card */}
              <div className="relative group">
                <div className="bg-white rounded-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="mb-4">
                      <Globe className="w-12 h-12 mx-auto text-red-500" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Global Reach</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Connect worldwide using reliable VoIP platforms and secure infrastructure across all regions
                    </p>
                  </div>
                </div>
                {/* Curved connector */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 8 8 Q 32 32 56 8"
                      stroke="#ef4444"
                      strokeWidth="6"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                  </svg>
                </div>
              </div>

              {/* Top Right Card */}
              <div className="relative group">
                <div className="bg-white rounded-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="mb-4">
                      <Zap className="w-12 h-12 mx-auto text-orange-500" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">High Performance</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Lightning-fast call processing with optimized network infrastructure and advanced routing
                    </p>
                  </div>
                </div>
                {/* Curved connector */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 56 8 Q 32 32 8 8"
                      stroke="#f97316"
                      strokeWidth="6"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Left Card */}
              <div className="relative group">
                <div className="bg-white rounded-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="mb-4">
                      <Shield className="w-12 h-12 mx-auto text-purple-500" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Secure SIP</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Enterprise-grade security with encrypted routing and protected data transmission protocols
                    </p>
                  </div>
                </div>
                {/* Curved connector */}
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 8 56 Q 32 32 56 56"
                      stroke="#8b5cf6"
                      strokeWidth="6"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="relative group">
                <div className="bg-white rounded-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="mb-4">
                      <TrendingUp className="w-12 h-12 mx-auto text-teal-500" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-3">Scalability</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Grow your business with flexible infrastructure that adapts to your expanding communication needs
                    </p>
                  </div>
                </div>
                {/* Curved connector */}
                <div className="absolute -top-4 -left-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M 56 56 Q 32 32 8 56"
                      stroke="#14b8a6"
                      strokeWidth="6"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomHeroSection;