import React from 'react';
import {
  Server,
  Cloud,
  ShieldCheck,
  Cpu,
  Monitor,
  Wifi,
  Settings,
  Globe,
  Network,
  Database,
  Folder,
  Layers,
} from 'lucide-react';

const Serveranimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-6 py-16 space-y-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Scalable & Secure Server Hosting Solutions
          </h1>
          <p className="text-gray-300 text-lg">
            Experience high-performance, secure, and flexible server hosting built to support your business growth.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>99.99% Uptime with Global Data Centers</li>
            <li>Dedicated & Cloud Hosting Options</li>
            <li>Advanced DDoS Protection</li>
            <li>Root Access & Full Control</li>
          </ul>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 bg-white text-black rounded-2xl p-8 shadow-xl max-w-xl w-full">
          <h2 className="text-2xl font-bold text-[#0a2463] mb-6">Get a Hosting Plan</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
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
              Request Plan
            </button>
          </form>
        </div>
      </div>

      {/* Feature Tabs - Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Server size={28} />,
            title: 'Dedicated Hosting',
            desc: 'Full resources, no sharing.',
          },
          {
            icon: <Cloud size={28} />,
            title: 'Cloud Servers',
            desc: 'Scale anytime, anywhere.',
          },
          {
            icon: <ShieldCheck size={28} />,
            title: 'DDoS Protection',
            desc: 'Real-time traffic filtering.',
          },
          {
            icon: <Cpu size={28} />,
            title: 'High Performance',
            desc: 'Fast SSD + modern CPUs.',
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

      {/* Feature Tabs - Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Monitor size={28} />,
            title: '24/7 Monitoring',
            desc: 'Always up, always tracked.',
          },
          {
            icon: <Settings size={28} />,
            title: 'Root Access',
            desc: 'Advanced customization available.',
          },
          {
            icon: <Database size={28} />,
            title: 'Backup Storage',
            desc: 'Daily snapshots and restores.',
          },
          {
            icon: <Globe size={28} />,
            title: 'Global Coverage',
            desc: 'Choose from 30+ locations.',
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

export default Serveranimation;
