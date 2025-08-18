import React from 'react';
import Homeimage7 from '../assets/DeWatermark.ai_1755397739921.jpeg' 
import Homeimage8 from '../assets/ChatGPT Image Aug 17, 2025, 08_47_42 AM.png' 
import Homeimage9 from '../assets/wmremove-transformed (4).jpeg' 


const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Power Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>
      </h1>

      {/* Cloud Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage8}
            alt="Cloud Hosting"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Reliable <span className="text-orange-500">Cloud Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify mb-4">
            Our cloud hosting platform is designed for businesses that demand agility, reliability, and performance at scale. From growing startups to enterprise-level corporations, our hosting infrastructure ensures uninterrupted access with intelligent resource allocation, zero downtime migrations, and multi-region deployment capabilities. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify">
            You benefit from automated scaling, advanced caching, and AI-driven monitoring that adapts instantly to traffic spikes, ensuring seamless user experiences. With built-in redundancy, encrypted backups, and 24/7 security layers, our cloud hosting eliminates single points of failure. Whether you’re hosting SaaS applications, e-commerce platforms, or mission-critical workloads, we provide a foundation that is secure, flexible, and future-ready.
          </p>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Secure <span className="text-orange-500">VPS Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify mb-4">
            Our Virtual Private Servers (VPS) provide the perfect balance of affordability and power, giving you dedicated resources without the cost of a physical server. Each VPS runs on enterprise-class hardware with SSD/NVMe storage, ensuring ultra-fast read/write speeds and high input/output performance for applications that demand efficiency. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify">
            Developers and businesses enjoy full root access, advanced control panels, and customizable server configurations to tailor their environments. Whether you are deploying web applications, managing databases, or hosting multiple websites, VPS hosting empowers you with DDoS protection, advanced firewalls, and instant scalability. This makes it an ideal solution for SaaS providers, digital agencies, and enterprises needing flexibility without compromising on security and uptime.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage9}
            alt="VPS Hosting"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Dedicated Servers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage7}
            alt="Dedicated Servers"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            High-Performance <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify mb-4">
            Dedicated servers are the ultimate choice for businesses that require full control, unmatched speed, and enterprise-grade reliability. With exclusive hardware resources, businesses can run heavy applications, manage large-scale databases, and handle millions of concurrent requests without latency issues. Every server is equipped with advanced CPUs, high memory capacity, and RAID-protected storage for maximum efficiency. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.7] tracking-[0.15px] font-normal text-justify">
            Alongside raw power, we provide round-the-clock monitoring, proactive threat detection, and customizable configurations so you can optimize your hosting environment exactly the way you need. Whether you’re running enterprise CRMs, streaming services, or handling mission-critical workloads, our dedicated servers ensure your business stays always online, always secure, and always performing at its peak.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
