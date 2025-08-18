import React from 'react';
import Homeimage13 from '../assets/ChatGPT Image Aug 18, 2025, 04_45_59 AM.png' 
import Homeimage15 from '../assets/wmremove-transformed (5).jpeg' 
import Homeimage14 from '../assets/ChatGPT Image Aug 18, 2025, 04_57_25 AM.png' 

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Build the Future of Digital Experiences with Our{" "}
        <span className="text-blue-800">Advanced Development Solutions</span>
      </h1>

      {/* Website Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage13}
            alt="Website Development"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[25px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Innovative <span className="text-orange-500">Website Development</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We at CloudQlobe specialize in crafting dynamic, high-performing, and
            visually stunning websites tailored for businesses of all sizes. Our
            dedicated team leverages <span className="text-blue-800">advanced technologies</span> 
            such as React, Next.js, and cloud-native architectures to deliver seamless
            user experiences, lightning-fast performance, and scalable solutions. We
            design with a purpose — ensuring every website is not only attractive but
            also deeply functional and aligned with your business goals.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            From e-commerce platforms to corporate websites, we ensure mobile-first
            design, SEO optimization, and enterprise-grade security are embedded in
            every project. Our approach focuses on long-term value creation, meaning
            your website will grow and evolve with your business. With CloudQlobe,
            your digital presence becomes a powerful growth engine — secure,
            adaptable, and always future-ready.
          </p>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto ml-[35px]">
        <div className="flex flex-col justify-center w-full max-w-[850px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Scalable <span className="text-orange-500">Mobile App Development</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            We at CloudQlobe design and develop cutting-edge mobile applications
            that blend functionality with innovation. Using frameworks like{" "}
            <span className="text-blue-800">Flutter, React Native, and Kotlin</span>, 
            we deliver apps that work flawlessly across iOS and Android, ensuring
            businesses can engage users anytime, anywhere. Our apps are built with
            intuitive interfaces, robust backends, and performance-driven architectures
            that adapt to the ever-changing mobile landscape.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            Whether it’s an e-commerce app, a social platform, or an enterprise
            productivity tool, we provide feature-rich solutions with AI integration,
            push notifications, cloud syncing, and advanced analytics. We at CloudQlobe
            go beyond development by also offering maintenance, updates, and 
            post-launch support, ensuring your mobile app scales seamlessly with your 
            vision. Every app we deliver is designed to be intuitive, secure, and 
            ready for rapid growth in a competitive market.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage14}
            alt="Mobile App Development"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Advanced Tech & Innovation Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src={Homeimage15}
            alt="Advanced Tech"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full max-w-[850px] ml-[20px]">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Advanced <span className="text-orange-500">Technology & Innovation</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify mb-4">
            At CloudQlobe, innovation is at the heart of everything we build. Our
            solutions integrate <span className="text-blue-800">AI, machine learning,
            cloud-native infrastructure, automation, and data-driven insights</span>
            to create smarter, faster, and more resilient digital ecosystems. We
            empower organizations to leverage emerging technologies that improve
            decision-making, optimize processes, and enhance customer experiences.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal text-justify">
            We don’t just deliver software — we deliver transformative digital
            experiences. By aligning technology with business objectives, CloudQlobe
            ensures you gain a real competitive edge in today’s digital-first world.
            From strategy to deployment, and even beyond with ongoing support, our 
            advanced tech solutions empower your business to scale without limits 
            while staying secure, efficient, and adaptable to future innovations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
