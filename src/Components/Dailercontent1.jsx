import React from 'react';
import Homeimage32 from '../assets/ChatGPT Image Aug 18, 2025, 11_08_22 AM.png'
import Homeimage33 from '../assets/ChatGPT Image Aug 18, 2025, 11_38_47 AM.png'
import Homeimage34 from '../assets/ChatGPT Image Aug 18, 2025, 11_49_43 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Revolutionize Your Outreach with <span className="text-blue-800">CloudQlobe Dialer Solutions</span>
      </h1>

      {/* Global Dialer Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage32}
            alt="Global Dialer Solutions"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Powerful <span className="text-orange-500">Global Dialer Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, provide enterprise-grade dialer solutions that empower businesses to reach customers efficiently across the globe. Our dialers are designed for high-volume outbound campaigns, customer support operations, and lead management, ensuring maximum connectivity, call clarity, and campaign success. Experience automated dialing, intelligent call routing, and real-time monitoring—all while keeping costs low and operations seamless.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            CloudQlobe’s dialer solutions support predictive, progressive, and power dialing modes, giving you full flexibility to optimize campaigns based on real-time metrics. With 24/7 monitoring, global number support, and advanced reporting, your outreach is always efficient, reliable, and measurable.
          </p>
        </div>
      </section>

      {/* Dialer Integration & Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">Dialer Integration & Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, provide fully customizable dialer integration that connects effortlessly with your existing CRM, VoIP system, or business platform. Manage campaigns, route calls intelligently, and monitor agent performance with ease. Our solutions simplify complex workflows while maximizing efficiency, productivity, and customer engagement.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Advanced analytics, automated scheduling, and API support allow businesses to scale operations without manual effort. CloudQlobe ensures every dialer is secure, reliable, and designed for optimal performance, empowering your team to reach more leads, convert more opportunities, and achieve measurable results.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage33}
            alt="Dialer Integration"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Dialer Billing & Call Monitoring Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage34}
            alt="Dialer Billing & Monitoring"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Streamlined <span className="text-orange-500">Billing & Call Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, deliver automated billing and advanced call monitoring for all your dialer campaigns. Track usage, generate invoices, and manage multi-currency transactions with precision and transparency. Our systems reduce operational complexity while giving you full control over campaign costs and ROI.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            With real-time dashboards, automated alerts, and detailed analytics, CloudQlobe enables businesses to optimize call flows, maximize agent productivity, and improve customer engagement. Our secure, scalable, and cost-effective solutions empower businesses to grow globally while maintaining exceptional communication standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
