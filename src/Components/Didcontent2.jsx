import React from 'react';
import Homeimage40 from '../assets/ChatGPT Image Aug 18, 2025, 01_48_59 PM.png'
import Homeimage41 from '../assets/ChatGPT Image Aug 18, 2025, 01_57_24 PM.png'
import Homeimage42 from '../assets/ChatGPT Image Aug 18, 2025, 02_07_59 PM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Transform Global Communication with <span className="text-blue-800">CloudQlobe DID Solutions</span>
      </h1>

      {/* Global DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage41}
            alt="Global DID Solutions"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Unmatched <span className="text-orange-500">Global DID Numbers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, empower businesses to establish a robust and credible local presence across the globe. Our Direct Inward Dialing (DID) numbers provide instant access to local, national, and toll-free numbers in over 100 countries. With crystal-clear voice quality, unmatched reliability, and cost-effective solutions, our DID numbers ensure your business communicates seamlessly while projecting professionalism and trust in every interaction.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Designed for call centers, remote teams, and international businesses, our DIDs support SIP trunking, number portability, advanced call forwarding, and real-time routing. With CloudQlobe, experience effortless scalability, 24/7 monitoring, high-security standards, and dedicated support—helping your brand deliver superior communication experiences to clients worldwide.
          </p>
        </div>
      </section>

      {/* Custom DID Integration Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-28 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Powerful <span className="text-orange-500">DID Integration & Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, provide fully customizable DID integration that connects seamlessly with your existing PBX, CRM, or VoIP platform. Effortlessly manage intelligent call routing, secure call handling, and detailed analytics that drive operational efficiency and enhance client satisfaction. Our platform ensures that businesses of all sizes can streamline communications while maintaining full control over their voice network.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            Our advanced solutions include real-time reporting, API integration, automated routing, and dynamic number management. CloudQlobe ensures that your operations scale effortlessly, reduce costs, and adapt to evolving business needs, all while delivering exceptional communication reliability and professional client experiences.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage40}
            alt="DID Integration"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* DID Billing & Call Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage42}
            alt="DID Billing & Management"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Streamlined <span className="text-orange-500">Billing & Call Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify mb-4">
            We, CloudQlobe, deliver automated billing and intelligent call management for all your DID numbers. Track call usage, generate invoices, and handle multi-currency transactions with complete transparency, accuracy, and ease. Our systems reduce operational complexity while giving you full control over your communications budget.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.18px] font-normal text-justify">
            With advanced dashboards, automated alerts, and in-depth analytics, CloudQlobe enables businesses to optimize call flows, improve customer engagement, and maximize operational efficiency. Our solutions are secure, scalable, cost-effective, and designed to support global growth—helping businesses deliver exceptional communication experiences while staying competitive in any market.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
