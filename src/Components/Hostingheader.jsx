import React from 'react';
import {
  Globe,
  Users,
  Zap,
  Shield,
  Phone,
  TrendingUp,
  Calendar,
  Briefcase,
} from 'lucide-react';

const TelecomHeroSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white to-gray-100 flex items-center min-h-screen mt-[-100px]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side Content */}
         <div className="mt-[10px] ml-[100px]">
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

          {/* Right Side Infographic */}
          <div className="lg:w-1/2 relative -ml-[-100px] mt-[-10px]">
            <div className="relative w-[460px] h-[460px] mx-auto">

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-4 z-10"
                  style={{
                    boxShadow:
                      'inset 0 3px 6px rgba(255,255,255,0.9), inset 0 -3px 6px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.1)',
                  }}>
                  <h3 className="text-gray-800 font-bold text-sm text-center mb-1">8 FACTORS</h3>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2">INFOGRAPHIC</h4>
                  <h4 className="text-gray-800 font-bold text-xs text-center">TEMPLATE</h4>
                </div>
              </div>

              {/* All 8 Icon Circles with bold yellow background */}

              {/* Top Left */}
              <div className="absolute top-12 left-4 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Phone className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Top Center */}
              <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Zap className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute top-12 right-4 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Shield className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Middle Left */}
              <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Users className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Middle Right */}
              <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <TrendingUp className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-12 left-4 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Globe className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Bottom Center */}
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Calendar className="w-7 h-7 text-gray-700" />
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-12 right-4 w-24 h-24">
                <div className="absolute inset-[-12px] bg-yellow-400 rounded-full z-0"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full border border-gray-200 flex items-center justify-center z-10"
                  style={{
                    boxShadow:
                      'inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                  <Briefcase className="w-7 h-7 text-gray-700" />
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
