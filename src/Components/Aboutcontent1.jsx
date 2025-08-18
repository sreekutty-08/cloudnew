import React from 'react';
import Homeimage48 from '../assets/5_communication02.jpg'
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
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            We Cloud Qlobe is a globally recognized telecom leader dedicated to connecting businesses, enterprises, and individuals across the world. With years of experience and an unwavering commitment to innovation, we deliver cutting-edge communication solutions that empower organizations to achieve seamless connectivity, operational efficiency, and measurable growth. Our solutions leverage the latest in VoIP, cloud technology, and digital infrastructure, ensuring reliable and crystal-clear communication for every client.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            Our mission is to redefine the way businesses communicate globally, offering scalable, cost-effective, and technologically advanced solutions. By combining strategic partnerships with dedicated support and advanced analytics, we ensure our clients benefit from unmatched service quality, global reach, and real-time insights that strengthen decision-making and boost overall communication performance.
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
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage51}
            alt="Our Services"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Our <span className="text-orange-500">Telecom Services</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            We Cloud Qlobe offers a comprehensive range of telecom services, including Call Center (CC) Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Our services are engineered to provide seamless connectivity, high-quality voice clarity, scalable solutions, and easy integration with existing systems, enabling businesses to operate efficiently at local and global levels.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            Each solution is supported by our robust infrastructure, real-time monitoring, and expert technical support, ensuring reliability, security, and performance. Whether it’s optimizing outbound campaigns, establishing a global presence, or deploying advanced communication platforms, We Cloud Qlobe delivers cost-effective, technologically advanced, and client-focused telecom solutions that keep businesses connected anytime, anywhere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
