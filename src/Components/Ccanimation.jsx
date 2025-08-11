import React, { useState } from 'react';
import {
  Server,
  PhoneCall,
  Settings,
  ShieldCheck,
  MessageSquare,
  Network,
  UserCheck,
  Globe,
} from 'lucide-react';

const Ccanimation = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    requirement: '',
  });

  const tabs = [
    { id: 'tab1', label: 'CLI Routes' },
    { id: 'tab2', label: 'Non-CLI Routes' },
    { id: 'tab3', label: 'Wholesale Voice' },
    { id: 'tab4', label: 'Retail VoIP' },
  ];

  const tabContent = {
    tab1: 'High-quality CLI routes for crystal-clear international voice termination.',
    tab2: 'Affordable non-CLI routes tailored for cost-effective voice traffic.',
    tab3: 'Carrier-grade wholesale solutions for global voice coverage.',
    tab4: 'Reliable retail VoIP services for enterprises and startups.',
  };

  const features = [
    { icon: <Server />, label: 'Direct Interconnects' },
    { icon: <PhoneCall />, label: 'Voice Quality' },
    { icon: <Settings />, label: 'Custom Routing' },
    { icon: <ShieldCheck />, label: 'Secure Routing' },
    { icon: <MessageSquare />, label: 'Support Team' },
    { icon: <Network />, label: '24/7 NOC' },
    { icon: <UserCheck />, label: 'KYC Enabled' },
    { icon: <Globe />, label: 'Global Reach' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Request submitted!');
    setFormData({ company: '', contact: '', requirement: '' });
  };

  return (
    <section className="bg-[#0a2463] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">CC Route Solutions</h2>
          <p className="mb-6 text-lg text-orange-300">
            Choose the right route for your voice business. Flexible, scalable, and supported by experts.
          </p>

          <div className="bg-white/10 border border-orange-400 p-4 rounded mb-6 text-orange-200">
            {tabContent[activeTab]}
          </div>

          <div className="flex gap-3 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm border transition font-medium ${
                  activeTab === tab.id
                    ? 'border-orange-400 bg-orange-500 text-white'
                    : 'border-orange-200 text-orange-200 hover:bg-orange-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Registration */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white border-4 border-[#0a2463] rounded-xl shadow-lg p-8 w-full max-w-md"
          >
            <h3 className="text-2xl font-bold text-[#0a2463] mb-6 text-center">Request Routes</h3>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number or Email"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 border rounded focus:outline-none"
              required
            />
            <textarea
              name="requirement"
              placeholder="Route Requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-6 border rounded focus:outline-none"
              rows={3}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0a2463] text-white py-2 rounded hover:bg-orange-500 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 text-center p-6 border border-orange-400 rounded-xl flex flex-col items-center shadow hover:bg-orange-500 transition"
          >
            <div className="text-orange-300 mb-2">{item.icon}</div>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ccanimation;
