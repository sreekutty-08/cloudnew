import React from 'react';
import Homeimage20 from '../assets/ChatGPT Image Aug 18, 2025, 08_28_02 AM.png'
import Homeimage21 from '../assets/ChatGPT Image Aug 18, 2025, 09_08_51 AM.png'
import Homeimage22 from '../assets/ChatGPT Image Aug 18, 2025, 09_06_14 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Maximize Call Efficiency with <span className="text-blue-800">CloudQlobe CC Voice Routes</span>
      </h1>

      {/* Section 1: High-Performance CC Routes */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage20}
            alt="High-Performance CC Routes"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            High-Performance <span className="text-orange-500">CC Voice Routes</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, provide premium CC Voice Routes engineered for maximum reliability and superior voice clarity. Designed for high-volume outbound campaigns, customer support centers, and enterprise communication, our routes minimize call drops, reduce Post Dial Delay (PDD), and maintain crystal-clear connections across global destinations. Flexible CLI and non-CLI options, multi-layer routing, and connectivity to top-tier carriers ensure exceptional call performance.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            With real-time monitoring, automated alerts, and proactive quality checks, CloudQlobe ensures every call is delivered reliably. Our CC Voice Routes empower businesses to maintain seamless global interactions, enhance customer engagement, and achieve measurable ROI while keeping operations secure, scalable, and cost-efficient.
          </p>
        </div>
      </section>

      {/* Section 2: Integration & Management */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">Integration & Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe CC Voice Routes integrate effortlessly with your existing dialers, CRMs, and VoIP platforms. Manage campaigns, intelligently route calls, and monitor agent performance with ease. Our solutions simplify complex workflows, improve operational efficiency, and ensure your team can handle high call volumes without interruptions.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Advanced analytics, API support, and automated scheduling allow businesses to scale seamlessly. CloudQlobe provides secure, reliable, and high-performance integration, ensuring every campaign runs smoothly while maximizing agent productivity and customer engagement.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage21}
            alt="Integration & Management"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Section 3: Billing & Monitoring */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage22}
            alt="Billing & Call Monitoring"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Streamlined <span className="text-orange-500">Billing & Call Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, offer automated billing and detailed call monitoring for all CC Voice Routes. Track call usage, generate invoices, and manage multi-currency transactions with full transparency and control. Reduce operational complexity while ensuring precise financial management for large-scale campaigns.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.9] tracking-[0.18px] font-normal text-justify">
            Real-time dashboards, automated alerts, and detailed analytics empower businesses to optimize call flows, maximize agent efficiency, and maintain high-quality customer interactions. CloudQlobe’s secure, scalable, and cost-effective solutions ensure global communication standards are met while your campaigns deliver maximum ROI.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
