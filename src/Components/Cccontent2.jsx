import React from 'react';

import Homeimage23 from '../assets/ChatGPT Image Aug 18, 2025, 09_25_16 AM.png'
import Homeimage24 from '../assets/aiease_1755489106184 (1).jpg'
import Homeimage25 from '../assets/ChatGPT Image Aug 18, 2025, 09_17_29 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Optimize Global Communication with <span className="text-blue-800">CloudQlobe CC Voice Routes</span>
      </h1>

      {/* Section 1: Premium CC Voice Routes */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage23}
            alt="Premium CC Routes"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Premium <span className="text-orange-500">CC Voice Routes</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe offers top-tier CC Voice Routes designed for enterprises and call centers that demand high-quality, uninterrupted communication. Our routes deliver exceptional voice clarity, ultra-low latency, and minimal call drops across global destinations. Flexible CLI and non-CLI options, along with redundancy measures, ensure your campaigns run flawlessly, even under high-volume conditions.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            With continuous monitoring, advanced routing algorithms, and partnerships with trusted carriers worldwide, CloudQlobe guarantees reliability, performance, and measurable results. Empower your business with routes that increase customer satisfaction, improve engagement, and drive superior ROI.
          </p>
        </div>
      </section>

      {/* Section 2: Intelligent Routing & Integration */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Intelligent <span className="text-orange-500">Routing & Integration</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe CC Voice Routes seamlessly integrate with your existing CRM, dialers, and VoIP infrastructure. Route calls dynamically, manage campaigns efficiently, and track agent performance in real-time. Our solutions simplify complex workflows, improve operational efficiency, and allow businesses to handle large call volumes effortlessly.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Featuring predictive, progressive, and power dialing modes, API support, and automated scheduling, CloudQlobe empowers your team to optimize campaigns based on live metrics. Experience secure, scalable, and high-performance integration that boosts productivity and maximizes customer engagement.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage24}
            alt="Intelligent Routing"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Section 3: Billing, Reporting & Monitoring */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage25}
            alt="Billing & Monitoring"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Comprehensive <span className="text-orange-500">Billing, Reporting & Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s CC Voice Routes come with advanced billing, reporting, and monitoring capabilities. Track usage, generate accurate invoices, and handle multi-currency transactions with ease. Real-time dashboards and analytics help businesses make data-driven decisions, optimize call flows, and ensure every campaign operates cost-effectively.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Automated alerts, quality metrics, and detailed performance reports allow managers to monitor agent efficiency and customer engagement effortlessly. CloudQlobe delivers secure, scalable, and reliable solutions that enable businesses to expand globally while maintaining impeccable communication standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
