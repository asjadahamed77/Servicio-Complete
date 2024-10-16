// HelpPage.js
import React from 'react';

const HelpPage = () => {
  return (
    <div className="border-t border-mainColor  container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">Help Center</h1>

      {/* Getting Started Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-600">
          Learn how to get started with our platform. Below are the steps to create an account and book a service provider.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Create an account by clicking "Sign Up" on the homepage.</li>
          <li>Navigate to the service provider page and browse providers.</li>
          <li>Book your desired provider by selecting the available time slots.</li>
          <li>Track your service through the dashboard.</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {/* Question 1 */}
          <div>
            <h3 className="text-xl font-medium">How do I reset my password?</h3>
            <p className="text-gray-600">
              Click on "Forgot Password" on the login page and follow the instructions to reset your password.
            </p>
          </div>
          {/* Question 2 */}
          <div>
            <h3 className="text-xl font-medium">What is the cancellation policy?</h3>
            <p className="text-gray-600">
              You can cancel a service up to 24 hours before the appointment. No refunds for cancellations after that period.
            </p>
          </div>
          {/* Add more FAQs here */}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <p className="text-gray-600 mb-4">
          Need more help? You can reach out to our support team through the following channels:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Email: <a href="mailto:support@serviceprovider.com" className="text-blue-500">support@serviceprovider.com</a></li>
          <li>Phone: <a href="tel:+123456789" className="text-blue-500">+1 234 567 89</a></li>
          <li>Live Chat: Available 24/7 on our platform.</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
