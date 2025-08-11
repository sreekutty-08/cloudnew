import React from 'react';
import {
  Phone,
  Mail,
  User,
  Globe,
  Shield,
  Server,
  MessageCircle,
  Mic,
} from 'lucide-react';

const Didanimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white p-10 space-y-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-white">
            DID Solutions for Global Communication
          </h1>
          <p className="text-lg text-gray-300">
            Unlock local presence with Direct Inward Dialing numbers. Establish a strong international identity and route calls efficiently.
          </p>
          <ul className="list-disc pl-5 text-gray-200 space-y-1">
            <li>Local & Toll-Free Numbers</li>
            <li>Global Coverage</li>
            <li>Flexible Call Routing</li>
            <li>Real-Time Analytics</li>
          </ul>
        </div>

        {/* Right Side Register Form */}
        <div className="flex-1 bg-white text-black rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-bold text-[#0a2463] mb-6">Register for DID Access</h2>
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
              <Phone className="mx-3 text-gray-600" size={18} />
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
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Tabs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Globe size={28} />,
            title: 'Global Numbers',
            desc: 'Access numbers across 100+ countries.',
          },
          {
            icon: <Shield size={28} />,
            title: 'Secure Routing',
            desc: 'All calls encrypted with high-level security.',
          },
          {
            icon: <Server size={28} />,
            title: 'Cloud Integration',
            desc: 'Seamless API integration and call management.',
          },
          {
            icon: <Mic size={28} />,
            title: 'Voice Quality',
            desc: 'HD voice with low latency routing.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0a2463] border border-orange-400 rounded-xl p-6 text-center shadow-lg"
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

export default Didanimation;
