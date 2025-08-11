import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PhoneCall,
  Headphones,
  Globe2,
  Globe,
  Server,
  Settings,
  Search,
} from "lucide-react";
import logo from "../assets/logo1-removebg-preview.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropdownItems = [
    { label: "CC Routes", icon: <PhoneCall size={16} />, path: "/cc-routes" },
    { label: "CLI Voice Terminations", icon: <Headphones size={16} />, path: "/cli-voice" },
    { label: "DID Solutions", icon: <Globe2 size={16} />, path: "/did-solutions" },
    { label: "VoIP Websites", icon: <Globe size={16} />, path: "/voip-websites" },
    { label: "Server Hosting", icon: <Server size={16} />, path: "/server-hosting" },
    { label: "Dialer Solutions", icon: <Settings size={16} />, path: "/dialer-solutions" },
  ];

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0 ml-[50px]">
          <img src={logo} alt="Cloudqlobe Logo" className="h-16 w-auto" />
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-10 text-gray-600 font-medium items-center ml-[80px]">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            ref={dropdownRef}
          >
            <button className="hover:text-orange-500 transition">Services</button>

            {showDropdown && (
              <div
                className="absolute top-8 left-0 mt-2 w-64 bg-white text-black rounded z-50 shadow border border-gray-200"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <ul className="py-2">
                  {dropdownItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-2 text-sm hover:text-orange-500 transition"
                        onClick={() => setShowDropdown(false)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link to="/rates" className="hover:text-orange-500 transition">Rates</Link>
          <Link to="/faq" className="hover:text-orange-500 transition">FAQ</Link>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative w-[250px] h-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full border border-gray-300 rounded pl-4 pr-10 text-sm text-gray-700 outline-none"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-end gap-3 ml-6">
          <Link
            to="/register"
            className="w-[120px] text-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="w-[120px] text-center px-4 py-2 bg-orange-600 text-white text-sm font-semibold hover:bg-gray-300 transition"
          >
            Login
          </Link>
        </div>

      </div>
    
  );
};

export default Navbar;
