import React from 'react';
import Homeimage29 from '../assets/ChatGPT Image Aug 18, 2025, 10_26_02 AM.png'
import Homeimage30 from '../assets/ChatGPT Image Aug 18, 2025, 10_37_51 AM.png'
import Homeimage31 from '../assets/ChatGPT Image Aug 18, 2025, 10_49_10 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Maximize Connectivity with <span className="text-blue-800">CloudQlobe CLI Voice Routes</span>
      </h1>

      {/* CLI Voice Routes Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage29}
            alt="CLI Voice Routes"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Reliable <span className="text-orange-500">CLI Voice Routes</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe provides top-tier CLI Voice Routes designed to maintain your brand’s credibility across global markets. By delivering verified and geographically relevant caller IDs, businesses experience higher answer rates, enhanced trust, and improved engagement. Our networks are built for clarity, low latency, and zero call drops, ensuring smooth communication for all campaigns.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            With robust infrastructure and continuous monitoring, CloudQlobe ensures each route performs optimally. Businesses can rely on high ACD (Average Call Duration) and ASR (Answer-Seizure Ratio) metrics, making campaigns more effective and measurable. Every CLI route is secure, compliant, and built to scale as your outreach grows.
          </p>
        </div>
      </section>

      {/* CLI Management & Optimization Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Efficient <span className="text-orange-500">CLI Management & Optimization</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s CLI management solutions allow businesses to seamlessly integrate routes with CRMs, VoIP platforms, and business systems. Monitor call quality, agent performance, and campaign efficiency in real-time. Our intelligent routing and predictive algorithms optimize call flows for maximum productivity and minimal downtime.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Advanced reporting and analytics provide actionable insights to fine-tune campaigns, improve engagement, and reduce operational costs. CloudQlobe ensures every CLI deployment is scalable, secure, and performance-driven, helping enterprises achieve higher ROI and streamlined communication.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage30}
            alt="CLI Management"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* CLI Analytics & Monitoring Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage31}
            alt="CLI Analytics & Monitoring"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Advanced <span className="text-orange-500">CLI Analytics & Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe delivers comprehensive analytics and monitoring for all CLI routes. Track call durations, performance metrics, and campaign effectiveness in real-time. Businesses gain actionable insights to optimize communication strategies, enhance agent efficiency, and improve customer satisfaction.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Our secure and scalable platforms ensure that every call is transparent, measurable, and cost-efficient. By combining predictive intelligence, automated alerts, and performance dashboards, CloudQlobe empowers enterprises to maintain high-quality outreach while achieving consistent growth and operational excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
