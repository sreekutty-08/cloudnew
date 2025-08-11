import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import logo from '../assets/logo1-removebg-preview.png'; // adjust path to your logo

const Footer = () => {
  return (
    <footer className="bg-[#0a2463] text-gray-300 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        
        {/* Logo + About */}
        <div className="md:col-span-2 space-y-4">
          <img src={logo} alt="Cloudqlobe Logo" className="w-32 mb-2" />
          <p className="text-sm leading-relaxed">
            Delivering cutting-edge telecom solutions with global reach and enterprise-grade performance.
          </p>
          <div className="flex gap-4 mt-4">
            {[Facebook, Twitter, Instagram, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:text-orange-400 transform hover:scale-110 transition duration-200">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Services', 'Rates', 'FAQ'].map((link, i) => (
              <li key={i}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-orange-400 hover:underline transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li><strong>Email:</strong> support@cloudqlobe.com</li>
            <li><strong>Phone:</strong> +1 (800) 123-4567</li>
            <li><strong>Location:</strong> Global Telecom Hub, NY</li>
          </ul>
        </div>

        {/* Register Advertisement Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Register Ad</h3>
          <p className="text-sm text-gray-400 mb-2">Get listed in our global telecom ad board. Register now!</p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Company Name"
              className="px-3 py-2 rounded bg-gray-800 text-sm placeholder-gray-400 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded bg-gray-800 text-sm placeholder-gray-400 text-white"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold">
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="font-medium text-white">Cloudqlobe</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
