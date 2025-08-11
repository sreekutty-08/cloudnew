import React, { useState } from 'react';
import {
  Server,
  PhoneForwarded,
  Globe2,
  Settings,
} from 'lucide-react';

const Ccanimation = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const tabs = [
    { id: 'tab1', label: 'CLI Routes' },
    { id: 'tab2', label: 'NCLI Routes' },
    { id: 'tab3', label: 'TDM Routes' },
    { id: 'tab4', label: 'Hybrid Routes' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return 'Get premium CLI Routes with crystal-clear voice quality across global destinations.';
      case 'tab2':
        return 'Explore cost-effective NCLI Routes for large-scale wholesale traffic.';
      case 'tab3':
        return 'Experience reliable, traditional TDM voice routing with global interconnects.';
      case 'tab4':
        return 'Combine the best of CLI and NCLI with our hybrid route optimization.';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered:', formData);
    alert('Registration submitted!');
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <section className="bg-[#0a2463] text-[#0a2463] px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Optimize Your <span className="text-white">CC Routes</span> with Smart Switching
          </h1>
          <p className="text-[#0a2463]/90 max-w-md">
            Discover high-quality voice routing solutions tailored to your business needs. Choose from CLI, NCLI, TDM, or Hybrid routes to ensure maximum uptime and call clarity.
          </p>

          {/* Tab Content */}
          <div className="bg-white p-4 rounded border border-[#0a2463] text-[#0a2463] text-sm shadow">
            {renderTabContent()}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm border transition font-medium ${
                  activeTab === tab.id
                    ? 'bg-[#0a2463] text-yellow-400 border-[#0a2463]'
                    : 'border-[#0a2463] text-[#0a2463] hover:bg-[#0a2463] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Registration Form */}
        <div className="w-full max-w-md bg-white text-[#0a2463] border border-[#0a2463] rounded-xl p-8 mx-auto shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6">Partner with Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-[#0a2463] rounded focus:outline-none focus:ring-2 focus:ring-[#0a2463]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 border border-[#0a2463] rounded focus:outline-none focus:ring-2 focus:ring-[#0a2463]"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-2 border border-[#0a2463] rounded focus:outline-none focus:ring-2 focus:ring-[#0a2463]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#0a2463] text-yellow-400 py-2 font-semibold rounded hover:bg-[#051638] transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Feature Tabs */}
      <div className="mt-16 bg-[#0a2463] py-10 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[Server, PhoneForwarded, Globe2, Settings].map((Icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg text-center shadow"
            >
              <div className="w-12 h-12 bg-[#0a2463] flex items-center justify-center rounded-full mb-3">
                <Icon className="text-yellow-400 w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-[#0a2463]">{
                ['Carrier Access', 'Call Routing', 'Global Interop', 'Advanced Settings'][i]
              }</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ccanimation;
