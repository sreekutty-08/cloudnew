import React from 'react';
import {
  Phone,
  Network,
  Settings,
  Globe,
  Wifi,
  User,
  Mail,
  Mic,
  PhoneCall,
  Server,
  Shield,
  MessageSquare,
  MonitorSmartphone,
} from 'lucide-react';

const Voipanimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-8 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-snug text-white">
            Modern VoIP Solutions for Seamless Communication
          </h1>
          <p className="text-lg text-gray-300">
            Our VoIP development services empower your business with high-quality, cost-effective voice communication over the internet.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Custom VoIP App Development</li>
            <li>PBX & SIP Integration</li>
            <li>CRM & ERP Connectivity</li>
            <li>Scalable Cloud-Based Infrastructure</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 bg-white text-black rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-bold text-[#0a2463] mb-6">Request a VoIP Demo</h2>
          <form className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#f9f9f9]">
              <User className="mx-3 text-gray-600" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2 px-2 bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#f9f9f9]">
              <Mail className="mx-3 text-gray-600" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full py-2 px-2 bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-[#f9f9f9]">
              <PhoneCall className="mx-3 text-gray-600" size={18} />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full py-2 px-2 bg-transparent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0a2463] text-white py-2 rounded-md hover:bg-blue-900 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* First Feature Tab Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Network size={28} />,
            title: 'SIP Trunking',
            desc: 'Robust VoIP trunking with seamless call routing.',
          },
          {
            icon: <Settings size={28} />,
            title: 'PBX Systems',
            desc: 'Cloud-based and on-premises PBX setups.',
          },
          {
            icon: <Globe size={28} />,
            title: 'Global Numbers',
            desc: 'Local & international VoIP number support.',
          },
          {
            icon: <Wifi size={28} />,
            title: 'HD Voice',
            desc: 'Low-latency, high-quality voice over IP.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0a2463] border border-orange-400 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex justify-center mb-3 text-orange-400">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Feature Tab Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Shield size={28} />,
            title: 'Encrypted Calls',
            desc: 'End-to-end security for your conversations.',
          },
          {
            icon: <MessageSquare size={28} />,
            title: 'Live Chat Integration',
            desc: 'Unify voice and chat into one platform.',
          },
          {
            icon: <Server size={28} />,
            title: 'Call Analytics',
            desc: 'Track performance and user behavior.',
          },
          {
            icon: <MonitorSmartphone size={28} />,
            title: 'Mobile Ready',
            desc: 'Cross-platform apps for iOS and Android.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0a2463] border border-orange-400 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="flex justify-center mb-3 text-orange-400">{item.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voipanimation;
