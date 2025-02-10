import React from "react";

const ContactUs = () => {
  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        We'd love to hear from you! Reach out to us via email or phone.
      </p>

      {/* Contact Form */}
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your email"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Additional Links */}
      <div className="mt-8 space-y-2">
        <p className="text-gray-700 dark:text-gray-300">
          For more information, please review our:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;