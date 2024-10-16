import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" border-t border-mainColor py-12 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Effective Date: <span className="font-semibold">2012 July 18th</span>
        </p>
        <p className="text-gray-600 mb-6">
          Your privacy is important to us. This Privacy Policy outlines how{" "}
          <span className="font-semibold">Servicio</span> (“we”, “us”, or “our”) collects, uses, and
          protects the information you provide when using our website{" "}
          <span className="font-semibold">servicio@gmail.com</span> (the “Site”).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li><span className="font-semibold">Personal Information</span>: This may include your name, email address, phone number, or other details you provide when you contact us or interact with the Site.</li>
          <li><span className="font-semibold">Non-Personal Information</span>: This includes browser type, device information, IP address, and usage data.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6 text-gray-600">
          <li>To operate and maintain the Site</li>
          <li>To improve your user experience and our services</li>
          <li>To respond to your inquiries or provide customer support</li>
          <li>To send emails, notifications, or updates</li>
          <li>To analyze website usage patterns and trends</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Protect Your Information</h2>
        <p className="text-gray-600 mb-6">
          We implement security measures to protect your personal information from unauthorized access. However, please note that no method of transmission over the internet or electronic storage is completely secure.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-600 mb-6">
          We may use cookies to improve your experience on our site. You can choose to disable cookies through your browser settings, but this may affect some features of the Site.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Third-Party Services</h2>
        <p className="text-gray-600 mb-6">
          We may use third-party services (such as analytics providers or payment processors) that collect, use, or store your data. These services operate under their own privacy policies.
        </p>

        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, feel free to contact us at{" "}
          <span className="font-semibold">servicio@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
