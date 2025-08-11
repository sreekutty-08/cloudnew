import React from "react";
import { Lightbulb, Briefcase, Megaphone, Award } from "lucide-react";

const Loginpagemain = () => {
  return (
    <div className="flex flex-col h-[600px] bg-gray-100">
      {/* Main content */}
      <div className="flex flex-1">
        {/* Left Side - Stacked blocks */}
        <div className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-b from-blue-800 to-teal-800 p-8 gap-6">
          {[
            {
              color: "bg-orange-500",
              icon: <Lightbulb size={28} className="text-white" />,
              title: "Creative",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-purple-600",
              icon: <Briefcase size={28} className="text-white" />,
              title: "Planning",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-cyan-500",
              icon: <Megaphone size={28} className="text-white" />,
              title: "Marketing",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
            {
              color: "bg-green-500",
              icon: <Award size={28} className="text-white" />,
              title: "Success",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh sit amet.",
            },
          ].map((block, index) => (
            <div
              key={index}
              className="flex bg-white shadow-md rounded-md overflow-hidden"
            >
              {/* Icon box */}
              <div
                className={`${block.color} p-5 flex items-center justify-center`}
              >
                {block.icon}
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800">{block.title}</h3>
                <p className="text-gray-600 text-sm">{block.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 p-6">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Username / Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                />
              </div>
              <div className="text-right">
                <a href="#" className="text-sm text-yellow-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpagemain;
