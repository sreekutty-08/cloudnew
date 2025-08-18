import React from 'react';
import Homeimage27 from '../assets/ChatGPT Image Aug 18, 2025, 09_55_31 AM.png'
import Homeimage28 from '../assets/ChatGPT Image Aug 18, 2025, 10_20_43 AM.png'
import Homeimage26 from '../assets/ChatGPT Image Aug 18, 2025, 10_06_37 AM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Elevate Your Communication with <span className="text-blue-800">CloudQlobe CLI Voice Routes</span>
      </h1>

      {/* CLI Voice Routes Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage26}
            alt="CLI Voice Routes"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Trusted <span className="text-orange-500">CLI Voice Routes</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe’s CLI Voice Routes are engineered to maintain your brand identity while delivering superior call quality worldwide. By displaying verified and geographically familiar caller IDs, your calls are instantly recognized and trusted, boosting answer rates, engagement, and customer satisfaction. Our infrastructure ensures low latency, minimal call drops, and seamless connectivity across all major global destinations.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Fully compliant with international telecommunication standards, CloudQlobe CLI routes provide robust performance, high reliability, and real-time monitoring. Businesses benefit from predictive routing, detailed analytics, and dedicated technical support, allowing campaigns to run efficiently while maximizing ROI, engagement, and operational transparency. With CloudQlobe, your outreach is always professional, secure, and scalable.
          </p>
        </div>
      </section>

      {/* CLI Integration & Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Seamless <span className="text-orange-500">CLI Integration & Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe provides fully customizable CLI integration that connects effortlessly with your CRM, VoIP systems, or business platform. Manage campaigns, track call performance, and optimize agent productivity with intuitive dashboards and real-time analytics. Our solutions simplify complex workflows while maintaining high call quality and operational efficiency.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            With predictive dialing, automated routing, and API support, businesses can scale operations efficiently without compromising performance. CloudQlobe ensures every CLI route is secure, reliable, and optimized, empowering your team to reach more customers, increase conversions, and achieve measurable results across all campaigns.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage27}
            alt="CLI Integration"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* CLI Billing & Monitoring Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage28}
            alt="CLI Billing & Monitoring"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Advanced <span className="text-orange-500">Billing & Call Monitoring</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            CloudQlobe delivers automated billing and advanced monitoring for all your CLI campaigns. Track usage, generate precise invoices, and manage multi-currency transactions with full transparency. Real-time dashboards and detailed reporting allow businesses to optimize call flows, maximize agent efficiency, and maintain complete control over operational costs.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            With secure, scalable, and reliable solutions, CloudQlobe enables businesses to enhance global communication standards, increase campaign efficiency, and ensure every customer interaction is professional and impactful. Grow your outreach confidently with CLI Voice Routes designed for performance, clarity, and success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
