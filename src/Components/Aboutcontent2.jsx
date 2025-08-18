import React from 'react';
import Homeimage51 from '../assets/6206964.jpg'
import Homeimage52 from '../assets/6206970.jpg'
import Homeimage53 from '../assets/10030681.jpg'


const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Experience Innovation with <span className="text-blue-800">We Cloud Qlobe</span> – Your Global Telecom Partner
      </h1>

      {/* About Us Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage51}
            alt="About Us"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Driving Global Connections
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            At We Cloud Qlobe, we specialize in creating seamless communication networks that empower businesses and individuals worldwide. Our expertise spans cutting-edge VoIP solutions, advanced call routing, and fully integrated digital platforms, ensuring you remain connected wherever your operations take you.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            By combining innovative technology with personalized service, we provide tailored telecom solutions that enhance efficiency, optimize connectivity, and foster growth. Our global presence, strategic partnerships, and commitment to excellence make us a trusted partner in communication.
          </p>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            A Culture of Collaboration
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            Our team thrives in an inspiring environment where creativity and collaboration are at the heart of every project. Employees are encouraged to share ideas, explore new technologies, and contribute to solutions that drive measurable impact for our clients.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            With a focus on growth, mentorship, and well-being, we cultivate a workplace where every member feels valued and motivated. This positive and innovative atmosphere translates directly into exceptional service, cutting-edge solutions, and lasting client satisfaction.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage52}
            alt="Team Culture"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage53}
            alt="Our Solutions"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Innovative Telecom Services
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify mb-4">
            We Cloud Qlobe provides a complete range of telecom solutions, including CC Routes, CLI Routes, VoIP Websites, Dialer Solutions, and DID Number Solutions. Each service is engineered for reliability, scalability, and exceptional quality, enabling businesses to streamline communications while maintaining optimal efficiency.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.8] tracking-[0.15px] font-normal text-justify">
            Supported by advanced infrastructure, real-time monitoring, and expert technical assistance, our solutions ensure uninterrupted connectivity and enhanced operational performance. Whether expanding globally or optimizing local campaigns, We Cloud Qlobe delivers innovative, client-focused, and cost-effective telecom services that keep businesses seamlessly connected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
