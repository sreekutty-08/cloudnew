import React from 'react';
import {
  PhoneCall,
  Mic,
  UserPlus,
  MessageCircle,
  Settings,
  Wifi,
  Headphones,
  Users,
} from 'lucide-react';

const Daileranimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-6 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Advanced Auto & Predictive Dialer Solutions
          </h1>
          <p className="text-gray-300 text-lg">
            Automate your outbound campaigns with intelligent dialers that improve agent productivity and customer engagement.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Predictive & Power Dialing Modes</li>
            <li>Live Call Monitoring & Analytics</li>
            <li>CRM Integration & Auto Logging</li>
            <li>Voice Broadcasting Options</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 bg-white text-black rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-bold text-[#0a2463] mb-6">Request a Demo</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-2 px-3 border border-gray-300 rounded-md bg-[#f9f9f9] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 px-3 border border-gray-300 rounded-md bg-[#f9f9f9] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-2 px-3 border border-gray-300 rounded-md bg-[#f9f9f9] focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#0a2463] text-white py-2 rounded-md hover:bg-blue-900 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Feature Tabs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <PhoneCall size={26} />,
            title: 'Auto Dialer',
            desc: 'Automate call flows with maximum efficiency.',
          },
          {
            icon: <Mic size={26} />,
            title: 'Voice Broadcast',
            desc: 'Deliver pre-recorded messages at scale.',
          },
          {
            icon: <UserPlus size={26} />,
            title: 'Lead Upload',
            desc: 'Bulk upload leads into campaigns.',
          },
          {
            icon: <MessageCircle size={26} />,
            title: 'SMS Followups',
            desc: 'Send SMS after missed calls.',
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

      {/* Second Row of Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Settings size={26} />,
            title: 'Custom Call Routing',
            desc: 'Send calls to specific teams or departments.',
          },
          {
            icon: <Headphones size={26} />,
            title: 'Agent Panel',
            desc: 'Monitor & guide agents in real time.',
          },
          {
            icon: <Users size={26} />,
            title: 'Team Management',
            desc: 'Add, edit, and manage users easily.',
          },
          {
            icon: <Wifi size={26} />,
            title: 'Browser-Based',
            desc: 'No downloads – access from any device.',
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

export default Daileranimation;
