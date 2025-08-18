import React from 'react';
import Homeimage38 from '../assets/10221126.jpg'
import Homeimage36 from '../assets/ChatGPT Image Aug 18, 2025, 01_20_13 PM.png'
import Homeimage45 from '../assets/ChatGPT Image Aug 18, 2025, 02_47_06 PM.png'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Streamline Communication with <span className="text-blue-800">Advanced DID Number Solutions</span>
      </h1>

      {/* Global DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage36}
            alt="DID Global Solutions"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Global <span className="text-orange-500">DID Number Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            We provide businesses with international Direct Inward Dialing (DID) numbers that enable seamless communication worldwide. Our DID solutions are designed for telecom providers, enterprises, and resellers, offering affordable, reliable, and easily deployable numbers across multiple countries. With high-quality voice connectivity, low latency, and compact integration options, clients can expand their communication network without heavy infrastructure costs.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            Our global DID services are compatible with SIP, PBX, and VoIP platforms, ensuring businesses can route calls efficiently while maintaining crystal-clear voice quality. Each number can be quickly activated and managed through intuitive dashboards, allowing businesses to scale their communication operations effortlessly and cost-effectively.
          </p>
        </div>
      </section>

      {/* Custom DID Integration Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Tailored <span className="text-orange-500">DID Integration & Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            We offer fully customizable DID solutions that integrate seamlessly with your existing systems, whether it’s a CRM, cloud PBX, or VoIP platform. Businesses can easily configure call routing, forwarding, and analytics, enabling smarter communication management. Our services ensure secure, high-performance connectivity for both inbound and outbound calls, empowering teams to handle calls efficiently across multiple channels and devices.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            With advanced monitoring, reporting, and API integration capabilities, our DID solutions provide complete visibility into call flows, usage patterns, and costs. Businesses benefit from reduced operational complexity, increased scalability, and enhanced customer experience while maintaining a low total cost of ownership.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage38}
            alt="DID Integration"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Billing & Call Management Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage45}
            alt="DID Billing & Management"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Efficient <span className="text-orange-500">Billing & Call Management</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify mb-4">
            Our DID solutions come with integrated billing and call management systems that simplify tracking, reporting, and invoicing. Businesses can manage multiple numbers, monitor usage, and automate billing cycles with accuracy and transparency. Multi-currency support and secure payment gateways ensure smooth financial operations across global markets.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.18px] font-normal text-justify">
            With real-time call analytics, automated alerts, and detailed reporting, organizations can optimize communication costs, improve operational efficiency, and deliver superior service to clients. Our DID platforms are built for scalability, security, and reliability, providing a complete solution for businesses looking to expand their telecommunication capabilities worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
