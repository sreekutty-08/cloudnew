import React from 'react';
import Homeimage6 from '../assets/5248953.jpg'
import Homeimage5 from '../assets/5252473.jpg'
import Homeimage4 from '../assets/easy-use-flat-illustration-receipt_9206-3064.jpg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-gray-600 mb-20 mt-8 leading-snug">
        Crafting Communication with  <span className="text-orange-600">Next-Gen VoIP Solutions</span>
      </h1>

      {/* CC Routes Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage5}
            alt="CC Routes"
            className="w-[580px] h-[550px] object-cover rounded-lg"
          />
        </div>
       <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
  <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
    Tailored Websites<span className="text-blue-500"> Built for VoIP Businesses </span>
  </h2>
  <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
    We CloudQlobe specializes in VOIP website development with cutting-edge solutions that combine scalability, speed, and security. Our websites are built with modern frameworks and cloud-powered infrastructures, ensuring seamless integration with VoIP platforms, CRMs, and billing systems. With responsive design and optimized performance, we make sure your clients can connect across devices without interruptions. Every website is carefully crafted to reflect your brand identity while providing intuitive navigation and engaging user experiences that enhance customer satisfaction and retention.
  </p>
  <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
    We leverage advanced technologies like real-time APIs, AI-driven call analytics, and automated workflows to deliver websites that go beyond just design — they become powerful communication hubs. With strong security layers, low-latency performance, and cost-effective deployment, We CloudQlobe ensures that businesses can scale their VoIP operations smoothly and provide clients with a reliable, future-ready digital experience. Additionally, our solutions include analytics dashboards, customizable call features, and multi-language support, empowering VoIP businesses to make data-driven decisions and expand globally with confidence.
  </p>
</div>

      </section>

      {/* CLI Voice Termination Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
            Hosting That Scales <span className="text-blue-500">with Your Business Needs </span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
           At We CloudQlobe, we deliver hosting solutions that are reliable, scalable, and designed to support businesses of all sizes. Our infrastructure is built with advanced technologies, ensuring high uptime, lightning-fast performance, and seamless integration with your applications. Whether you need shared hosting, VPS, or dedicated servers, we provide flexible options with built-in security and advanced monitoring systems.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
           We combine affordability with advanced hosting technologies such as cloud integration, SSD storage, and automated backups to provide a secure and efficient environment. Our 24/7 technical support ensures that businesses receive expert assistance whenever needed. By choosing We CloudQlobe, clients benefit from a hosting partner that makes their websites and applications highly available, compactable, and future-ready at a cost-effective price.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage4}
            alt="CLI Voice Terminations"
            className="w-[680px] h-[600px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage6}
            alt="DID Solutions"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-600 mb-4">
           Reliable Dialer Technology <span className="text-blue-500">for Seamless Calling</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
           At We CloudQlobe, we provide next-generation Dialer Solutions designed to empower businesses with seamless VoIP connectivity. Our dialers are built for scalability, performance, and flexibility, ensuring that call centers, enterprises, and service providers can manage high call volumes with ease. With intelligent routing, advanced reporting, and customizable features, our dialers enable businesses to increase productivity and reduce operational costs. we CloudQlobe delivers affordable and reliable solutions that adapt to every business need.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            We specializes in integrating advanced communication software with CRM platforms, ticketing systems, and business applications to create a unified ecosystem. Our integration services enhance workflow efficiency, streamline data sharing, and provide a centralized hub for customer interactions. Whether it’s connecting dialer solutions with existing tools or deploying new business software, we ensure compatibility, scalability, and affordability, helping businesses achieve a robust, future-ready infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
