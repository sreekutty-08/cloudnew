import React from 'react';

const faqs = [
  { q: 'What is VoIP?', a: 'VoIP stands for Voice over Internet Protocol. It allows phone calls over the internet.' },
  { q: 'How to get started?', a: 'Click on the Get Started button and follow the instructions to sign up.' },
  { q: 'Is Cloudqlobe secure?', a: 'Yes, we use encrypted protocols and firewalls to keep your communication safe.' },
  { q: 'Can I port my number?', a: 'Yes, number portability is available upon request.' },
  { q: 'Do you offer support?', a: 'Yes, we offer 24/7 customer support through chat, email, and phone.' },
  { q: 'Is there a free trial?', a: 'Yes, you can start with a free trial to explore our services.' },
  { q: 'What countries are supported?', a: 'We provide global coverage across 100+ countries.' },
  { q: 'How to integrate with CRM?', a: 'You can integrate Cloudqlobe with major CRMs like Salesforce and HubSpot.' },
];

const Faqanimation = () => {
  return (
    <div className="min-h-screen bg-[#0a2463] text-white px-6 py-12 flex flex-col items-center">
      {/* Top section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center mb-16">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Need Help? We're Here!</h1>
          <p className="text-lg text-gray-200">
            Learn everything about VoIP, SIP routing, integrations, and more. Start exploring our most commonly asked questions or reach out directly.
          </p>
        </div>

        {/* Right Action Box */}
        <div className="lg:w-1/3 bg-white text-[#0a2463] rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Have a question?</h2>
          <p className="mb-4 text-sm">We're here to help you find answers or talk to our support team.</p>
          <button className="bg-[#0a2463] text-white px-6 py-3 rounded-lg hover:bg-[#09306b] transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom FAQ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {faqs.map((item, index) => (
          <div key={index} className="bg-white text-[#0a2463] p-5 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
            <p className="text-sm text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqanimation;
