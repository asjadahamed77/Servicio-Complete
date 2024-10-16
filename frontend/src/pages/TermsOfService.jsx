import React from "react";

const TermsOfService = () => {
  return (
    <div className="border-t border-mainColor py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-6">
          Effective Date: <span className="font-semibold">2012 July 18th</span>
        </p>
        <p className="text-gray-600 mb-6">
          Welcome to <span className="font-semibold">Servicio</span> (“we”, “us”, or “our”). By accessing or
          using our website <span className="font-semibold">servicio@gmail.com</span> (the “Site”) or our services, you
          agree to comply with and be bound by the following terms and conditions (the “Terms of Service”).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-6">
          By accessing or using our Site, you agree to be bound by these Terms of Service and any applicable laws and regulations. If you do not agree with any part of the terms, you may not use the Site or our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to update or modify these Terms of Service at any time. Any changes will be effective immediately upon posting on the Site. It is your responsibility to review these terms periodically.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Use of the Site</h2>
        <p className="text-gray-600 mb-6">
          You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">
          All content on the Site, including text, graphics, logos, images, and software, is the property of <span className="font-semibold">[Your Company Name]</span> or its licensors and is protected by copyright and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          To the fullest extent permitted by law, <span className="font-semibold">[Your Company Name]</span> shall not be liable for any direct, indirect, incidental, or consequential damages arising out of or related to your use of the Site or our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to terminate or suspend your access to the Site or our services, without prior notice or liability, for any reason, including if you violate these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Governing Law</h2>
        <p className="text-gray-600 mb-6">
          These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
        </p>

        <p className="text-gray-600">
          If you have any questions about these Terms of Service, please contact us at{" "}
          <span className="font-semibold">servicio@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
