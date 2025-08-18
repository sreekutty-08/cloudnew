import React from 'react';
import Homeimage35 from '../assets/ChatGPT Image Aug 18, 2025, 12_32_42 PM.png'
import Homeimage36 from '../assets/ChatGPT Image Aug 18, 2025, 12_05_22 PM.png'
import Homeimage37 from '../assets/ChatGPT Image Aug 18, 2025, 12_49_48 PM.png'

const Homecontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Maximize Outreach & Efficiency with <span className="text-blue-800">CloudQlobe Dialer Solutions</span>
      </h1>

      {/* Intelligent Multi-Channel Dialers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage35}
            alt="Multi-Channel Dialers"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Intelligent <span className="text-orange-500">Multi-Channel Dialers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe delivers intelligent multi-channel dialer solutions that extend your communication capabilities far beyond traditional voice calls. Seamlessly connect with customers through calls, SMS, email, and automated notifications, all managed from a single, intuitive platform. This ensures your outreach campaigns are faster, smarter, and more effective, driving higher engagement rates, improved lead conversions, and enhanced customer satisfaction.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            Our advanced predictive, progressive, and power dialing modes are designed to maximize efficiency while reducing idle time for agents. With AI-powered call scheduling, dynamic routing, and real-time prioritization, CloudQlobe’s dialers allow your team to focus on meaningful conversations, improving both productivity and ROI. Businesses gain the ability to scale operations quickly, connect globally, and ensure every interaction is purposeful and measurable.
          </p>
          
        </div>
      </section>

      {/* Advanced Dialer Integration Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">Integration & Automation</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s dialer solutions integrate effortlessly with your CRM, VoIP system, and other business platforms, providing a centralized environment for campaign management. Automated lead distribution, intelligent call routing, and performance tracking reduce manual effort and ensure campaigns are executed with precision. This allows businesses to maintain operational excellence, optimize resource allocation, and consistently achieve measurable results.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            With full API support, secure cloud-hosted architecture, and real-time monitoring, CloudQlobe dialers scale effortlessly with growing operations. Businesses can deploy campaigns globally without worrying about technical limitations, while agents receive actionable insights, automated prompts, and performance analytics. This seamless integration empowers teams to focus on meaningful customer interactions and drive revenue growth.
          </p>
         
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage36}
            alt="Dialer Integration"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Analytics & Call Performance Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage37}
            alt="Dialer Analytics"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Data-Driven <span className="text-orange-500">Analytics & Call Performance</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe equips businesses with advanced reporting and analytics capabilities to track every call, agent performance, and campaign efficiency in real-time. Actionable insights allow managers to optimize call flows, enhance lead conversion, and make strategic decisions based on measurable data. Comprehensive dashboards provide a complete overview of agent activity, campaign progress, and ROI metrics.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            From detailed call logs to automated performance reports, CloudQlobe ensures that your dialer campaigns operate with precision, transparency, and maximum efficiency. Identify bottlenecks, monitor peak traffic, and adjust strategies instantly, helping businesses stay ahead in competitive markets and consistently deliver high-quality customer experiences.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default Homecontent2;
