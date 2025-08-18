import React from 'react';
import Homeimage10 from '../assets/ChatGPT Image Aug 17, 2025, 08_31_13 AM.png'
import Homeimage12 from '../assets/wmremove-transformed (2).jpeg'
import Homeimage11 from '../assets/wmremove-transformed (3).jpeg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Empower Your Business with Our <span className="text-blue-800">Advanced Hosting Solutions</span>
      </h1>

      {/* Cloud Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage12}
            alt="Cloud Hosting"
            className="w-[580px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Scalable <span className="text-orange-500">Cloud Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We at CloudQlobe provide <span className="text-blue-800">Cloud Hosting solutions</span> that are built to support 
            businesses of every size, from agile startups to established enterprises. With unmatched scalability and speed, 
            our cloud infrastructure ensures that your websites and applications can seamlessly handle fluctuating traffic 
            without any downtime or performance bottlenecks. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            By leveraging redundant infrastructure, advanced load balancing, and secure global data centers, you gain the 
            flexibility to deploy and scale resources instantly. Cloud hosting with CloudQlobe means you pay only for what 
            you use while enjoying built-in backups, disaster recovery options, and enterprise-grade security. With real-time 
            monitoring and 24/7 expert support, we make sure your business stays online, always resilient, and always future-ready.
          </p>
        </div>
      </section>

      {/* VPS Hosting Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Reliable <span className="text-orange-500">VPS Hosting</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We at CloudQlobe understand that flexibility and performance are essential. Our 
            <span className="text-blue-800"> Virtual Private Server (VPS) hosting</span> combines the power of 
            dedicated resources with the affordability of a virtualized environment. Businesses benefit from 
            high-speed SSD storage, customizable configurations, and isolated environments that guarantee 
            consistent performance without interruptions from shared users. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            Equipped with DDoS protection, advanced firewalls, and full root access, our VPS hosting is 
            ideal for developers, agencies, and enterprises looking for greater control. Whether you’re 
            hosting databases, SaaS platforms, or resource-intensive applications, CloudQlobe ensures your 
            operations remain secure, scalable, and cost-efficient — giving you complete freedom to build 
            and grow without limits.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage11}
            alt="VPS Hosting"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Dedicated Servers Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage10}
            alt="Dedicated Servers"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Powerful <span className="text-orange-500">Dedicated Servers</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We at CloudQlobe offer <span className="text-blue-800">Dedicated Server solutions</span> for 
            enterprises that demand complete control, high reliability, and unmatched performance. With 
            exclusive hardware resources, your applications and databases run at peak efficiency, handling 
            heavy workloads, high-volume transactions, and complex processes without compromise. 
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            From large-scale e-commerce platforms to mission-critical enterprise systems, our dedicated 
            servers are optimized for speed, security, and customization. Backed by 24/7 monitoring, proactive 
            technical support, and flexible upgrade options, CloudQlobe ensures your operations remain secure, 
            highly available, and always high-performing — empowering your business with infrastructure that 
            grows alongside your vision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
