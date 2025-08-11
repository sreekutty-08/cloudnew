import React from 'react';
import { UserPlus, Globe, ShieldCheck, Zap, TrendingUp, Link2, Settings, MessageCircle } from 'lucide-react';

const Aboutanimation = () => {
  return (
    <div className="bg-[#0a2463] text-white font-sans">
      {/* Top Section */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content: About CloudQlobe */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-default leading-tight">
              Welcome to <span className="text-orange-400">CloudQlobe</span>
            </h1>
             <p className="text-white text-[20pxpx] leading-relaxed text-justify mb-8  max-w-[520px]">
  Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
  and secure SIP routing. With intelligent telecom solutions, we ensure consistent
  call quality, data efficiency, and scalable infrastructure across all regions.
   Cloudqlobe enables businesses to connect worldwide using reliable VoIP platforms
  and secure SIP routing. With intelligent telecom solutions, we ensure consistent
  call quality, data efficiency, and scalable infrastructure across all regions.
</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Register Form with Stylish Design */}
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 text-white">Partner Registration</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-white/80 text-black border px-4 py-3 rounded focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/80 text-black border px-4 py-3 rounded focus:outline-none" />
              <input type="text" placeholder="Company Name" className="w-full bg-white/80 text-black border px-4 py-3 rounded focus:outline-none" />
              <select className="w-full bg-white/80 text-gray-700 border px-4 py-3 rounded">
                <option>Select Partnership Type</option>
                <option>Wholesale</option>
                <option>Retail</option>
                <option>Enterprise</option>
              </select>
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Feature Grid */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: UserPlus, title: 'Easy Onboarding', desc: 'Fast & simple registration process.' },
            { icon: Globe, title: 'Global Reach', desc: 'Access clients across the globe.' },
            { icon: ShieldCheck, title: 'Secure Platform', desc: 'Advanced fraud protection & routing.' },
            { icon: Zap, title: 'High Performance', desc: 'Low-latency, HD call quality.' },
            { icon: TrendingUp, title: 'Profit Growth', desc: 'Competitive margins & rebates.' },
            { icon: Link2, title: 'Strong Connectivity', desc: 'Robust interconnect infrastructure.' },
            { icon: Settings, title: 'Flexible APIs', desc: 'Customize routes & integration.' },
            { icon: MessageCircle, title: '24/7 Support', desc: 'Get help when you need it most.' },
          ].map((item, index) => (
            <div
              key={index}
              className="border-2 border-yellow-400 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.1)] text-center group hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="h-8 w-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Aboutanimation;
