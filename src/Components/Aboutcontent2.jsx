import React from 'react';

const Aboutcontent2 = () => {
  return (
    <div className="min-h-screen w-full bg-white px-12 py-16 overflow-hidden">
      <h1 className="text-4xl font-semibold text-center text-black mb-20 mt-8 leading-snug">
        Empower Your Business with <span className="text-blue-800">End-to-End VoIP Solutions</span>
      </h1>

      {/* 1. VOIP Website Development */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-24 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/website-construction-illustration_114360-2576.jpg"
            alt="VoIP Website Development"
            className="w-[460px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Tailored <span className="text-orange-500">VoIP Website Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            We specialize in building modern VoIP websites with fully integrated client panels, contact forms, SIP onboarding, dynamic rate tables, billing dashboards, and real-time tracking features. Every website is crafted to reflect your brand identity and ensure optimal usability across all devices.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            Our team incorporates responsive design principles, interactive animations, and seamless user journeys to engage your visitors and convert them into leads. We also offer SEO optimization, multi-language support, secure login systems, and payment gateway integrations tailored for telecom service providers.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Whether you're launching a new VoIP brand or revamping your telecom interface, we provide a full-stack solution using MERN, React, WordPress, or custom CMS — delivering both front-end aesthetics and back-end functionality.
          </p>
        </div>
      </div>

      {/* 2. Free Hosting & Domain Services */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-24 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Free <span className="text-orange-500">Hosting & Domain Setup</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            Start your digital journey stress-free with free web hosting and domain registration (.com, .net, .org, .io, and more). We take care of server provisioning, panel configuration (cPanel, VestaCP, or custom), DNS management, and performance optimization.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            Your website will be hosted on ultra-fast, secure, and scalable infrastructure with free SSL, malware protection, and daily backups. You’ll also get email accounts, FTP access, Git deployment options, and uptime monitoring.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            From WordPress deployments to Node.js environments or VoIP control panels, we’ll ensure your project runs efficiently from Day 1. No hidden charges — just seamless setup to help you grow your telecom business without tech headaches.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/cloud-hosting-concept-illustration_114360-7242.jpg"
            alt="Hosting & Domain"
            className="w-[460px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* 3. Dialer & Switch Installations */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-10 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/server-cluster-concept-illustration_114360-2583.jpg"
            alt="Dialer Configuration"
            className="w-[460px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Robust <span className="text-orange-500">Dialer & Softswitch Setup</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            We install, configure, and maintain popular dialers like GoAutoDial, VICIdial, and hosted predictive dialers for outbound and inbound operations. Our setup includes SIP trunk registration, CRM integration, campaign scheduling, call logs, and user roles.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
            For larger infrastructure, we deploy ASTPP, FreeSWITCH, and FusionPBX-based VoIP Softswitches with real-time CDR reporting, routing logic, rate tables, and billing automation. Everything is tailored to suit your carrier, retail, or call center business model.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            Whether you need multi-tenant VoIP environments, call recording, IVR menus, or web-based admin panels, we offer end-to-end configuration along with support, training, and security hardening for production readiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent2;
