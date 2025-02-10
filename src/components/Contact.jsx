// import React from 'react'
// import { CONTACT } from '../constants'

// const Contact = () => {
//     return (
//         <div>
//             <div className="container border-b border-neutral-900 px-10 pb-20">
//                 <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
//                 <div className=' bg-[#151515]  text-center tracking-tighter flex justify-center flex-col items-center gap-5'>
//                     <h4 className=' bg-[#933030] my-4 py-4'> Your Name <input className='border-1 rounded-4xl py-2 bg-[#15151532]' type="text" /></h4>
//                     <h4 className='bg-[#933030]  my-4'> Email <input className='border-1 rounded-4xl py-2 bg-[#151515]' type="text" /></h4>
//                     <h4 className='bg-[#933030]  my-4'> Message <textarea className='border-1 rounded-4xl py-2 bg-[#151515]' type="text" /></h4>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-[#15151553] p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-indigo-400">Contact Me</h2>
        <p className="text-center text-gray-400">I'd love to hear from you! Please fill out the form below.</p>

        <form onSubmit={handleSubmit} method= "post" action={"./data"} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="mt-2 p-3 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
