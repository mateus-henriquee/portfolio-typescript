import React from 'react';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const SimpleContactForm = () => {

  return (
    <section className='bg-gray-700 py-18'>
    <div className="max-w-md mx-auto p-6 rounded-lg">

    
      <h3 className="text-gray-200 text-center font-semibold text-4xl mb-10">Contact Us</h3>
      

      <div className="space-y-6" id="contact">
        <div>
          <label className="block text-gray-400 mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">phone/contact</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-400 mb-1">mailbox</label>
          <input
            type="text"
            className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-white"
          />
        </div>

        <button className="w-full mt-8 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-400 transition-colors cursor-pointer">
          ADD CONTACT
        </button>
      </div>
    </div>
    </section>
  );
};

export default SimpleContactForm;