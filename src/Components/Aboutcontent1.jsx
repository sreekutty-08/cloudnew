import React from 'react';
import Homeimage48 from '../assets/6222519.jpg'
import Homeimage50 from '../assets/6072191.jpg'
import Homeimage51 from '../assets/3489823.jpg'

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Welcome to <span className="text-blue-800">We Cloud Qlobe</span> – Leading the Future of Telecom
      </h1>

      {/* Our Company Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage50}
            alt="Our Company"
            className="w-[580px] h-[450px] object-cover rounded-lg mt-[80px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Who We Are
          </h2>
         
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
  Cloud Qlobe is a globally recognized telecom leader dedicated to connecting businesses, enterprises, and individuals worldwide. With years of expertise and a strong commitment to innovation, we provide advanced communication solutions that enable seamless connectivity, operational efficiency, and measurable growth. Leveraging the latest in VoIP, cloud computing, and digital infrastructure, we deliver reliable and crystal-clear communication for every client. From startups to global enterprises, we help organizations embrace digital transformation, enhance collaboration, and stay competitive in a fast-changing digital era.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
  Our mission is to redefine the way businesses communicate globally by offering scalable, cost-effective, and future-ready solutions. Through strategic partnerships, advanced analytics, and 24/7 expert support, we ensure our clients benefit from unmatched service quality, global reach, and real-time insights. Every solution is tailored to align with business goals, empowering organizations to reduce costs, improve customer experience, and drive sustainable growth with confidence in an interconnected world.
</p>


        </div>
      </section>

      {/* Working Atmosphere Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Our <span className="text-orange-500">Working Atmosphere</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            At We Cloud Qlobe, we cultivate a dynamic, inclusive, and collaborative work environment where creativity and innovation thrive. Our teams are empowered to share ideas, experiment with new technologies, and lead projects that drive both personal growth and organizational success. By fostering open communication and continuous learning, we ensure that every employee feels valued, motivated, and equipped to contribute meaningfully to our clients’ success.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            Our offices are designed to inspire teamwork and productivity, with spaces that encourage brainstorming, collaboration, and knowledge sharing. We place a strong emphasis on work-life balance, mentorship, and employee development programs, believing that a motivated and engaged workforce directly translates into superior solutions, exceptional client experiences, and sustained business growth.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage48}
            alt="Working Atmosphere"
            className="w-[450px] h-[480px] object-cover rounded-lg ml-[150px]"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage51}
            alt="Our Services"
            className="w-[580px] h-[460px] object-cover rounded-lg mt-[50px] ml-[-100px]"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px] mt-[-50px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Our <span className="text-orange-500">Telecom Services</span>
          </h2>
         <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
  Cloud Qlobe offers a comprehensive range of telecom services, including Call Center (CC) Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Our services are engineered to provide seamless connectivity, high-quality voice clarity, and scalable solutions with easy integration into existing systems. By combining reliability with flexibility, we enable businesses to operate efficiently at both local and global levels while ensuring smooth communication across networks.
</p>
<p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
  Each solution is powered by our robust infrastructure, real-time monitoring, and expert technical support, ensuring security and consistent performance. Whether it’s optimizing outbound campaigns, expanding international presence, or deploying advanced communication platforms, Cloud Qlobe delivers cost-effective and technologically advanced telecom solutions. With a strong focus on client needs, we help businesses stay connected anytime, anywhere with confidence and scalability.
</p>


        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
