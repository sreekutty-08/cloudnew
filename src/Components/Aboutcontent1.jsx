import React from 'react';

const Homecontent1 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-[40px] font-normal font-[Roboto,Arial,sans-serif] text-center text-black mb-20 mt-8 leading-snug">
        Explore the Future of Communication with Our <span className="text-blue-800">Advanced Telecom Solutions</span>
      </h1>

      {/* CC Routes Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src="https://img.freepik.com/free-vector/gps-location-car-service_18591-51105.jpg?t=st=1753597676~exp=1753601276~hmac=c8a8a87efbcdca291f24206f921ffb04fda807a7a5400b45ab1c8ff302dd0af8&w=1380"
            alt="CC Routes"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            High-Quality <span className="text-orange-500">CC Routes</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif] mb-4">
            Our Call Center (CC) Routes are tailored for high-volume outbound traffic, offering a strategic advantage for businesses operating large-scale campaigns, support centers, or customer acquisition teams. These routes are built for optimized voice clarity, redundancy, and traffic prioritization, ensuring zero call drops and superior client interaction in real-time.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif]">
            With low PDD (Post Dial Delay) and multiple routing layers, we offer both CLI and non-CLI options across key destinations. Our infrastructure is continuously monitored by automated quality checkers, providing unparalleled reliability. CloudQlobe partners with top-tier global carriers to maintain consistent ACD (Average Call Duration) and ASR (Answer-Seizure Ratio), all while keeping your billing flexible and transparent.
          </p>
        </div>
      </section>

      {/* CLI Voice Termination Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 mb-24 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Trusted <span className="text-orange-500">CLI Voice Terminations</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif] mb-4">
            CloudQlobe’s CLI (Calling Line Identification) termination ensures your brand identity is maintained across all communications. By displaying verified, local, and geographically familiar caller IDs, your calls are more likely to be answered and trusted, increasing lead engagement and customer satisfaction.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif]">
            Our CLI routes comply with international standards and regulatory frameworks, supporting customized caller ID options and dynamic call routing based on your campaign's geographic target. Ideal for outbound marketing, appointment setting, and international B2B interactions, these terminations help establish credibility while maximizing performance metrics such as CPA (Cost Per Acquisition) and ROI. Enjoy round-the-clock monitoring and dedicated technical support for every route deployed.
          </p>
        </div>
        <div className="flex justify-center items-center w-full p-2">
          <img
            src="https://img.freepik.com/free-vector/technical-support-customer-service-flat-illustration_1150-51047.jpg"
            alt="CLI Voice Terminations"
            className="w-[480px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* DID Solutions Section */}
      <section className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full p-2">
          <img
            src="https://img.freepik.com/free-vector/people-using-different-electronic-devices-such-as-smartphone-laptop-tablet-radio-fields-electromagnetic-pollution_335657-4391.jpg?t=st=1753597790~exp=1753601390~hmac=69c11fa6dd5cd85428c3551e280ab36e48bc1849a84c014db878a23de4fceea2&w=1380"
            alt="DID Solutions"
            className="w-[480px] h-[420px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-[28px] font-normal font-[Roboto,Arial,sans-serif] text-gray-800 mb-4">
            Global <span className="text-orange-500">DID Number Solutions</span>
          </h2>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif] mb-4">
            Establishing a virtual presence worldwide has never been easier. With our Direct Inward Dialing (DID) number solutions, you gain access to local, national, and toll-free numbers across 100+ countries — instantly. These numbers are indispensable for businesses that require global reach with local appeal, all without investing in physical infrastructure.
          </p>
          <p className="text-[#5f6368] text-[17px] leading-[1.58] tracking-[0.15px] font-normal font-[Roboto,Arial,sans-serif]">
            Perfect for customer service hubs, remote teams, and VoIP PBX deployments, our DIDs support number portability, SIP trunking, and advanced call forwarding. You get complete control via a self-service portal, allowing real-time routing changes, live call reporting, and SIP registration. With CloudQlobe, every number comes with security, scalability, and seamless provisioning baked in.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homecontent1;
