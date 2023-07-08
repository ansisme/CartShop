import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.query) {
      newErrors.query = 'Query is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form submission logic goes here
      console.log('Form submitted successfully!');
      // Reset form data
      setFormData({
        name: '',
        email: '',
        query: '',
      });
      // Clear errors
      setErrors({});
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-standardBg rounded shadow">
  
      <form onSubmit={handleSubmit}>
        <div className="mb-4 max-sm:text-[14px] max-xs:text-[12px]">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4 max-sm:text-[14px] max-xs:text-[12px]">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4 max-sm:text-[14px] max-xs:text-[12px]">
          <label htmlFor="query" className="block mb-2 font-semibold">
            Query<span className="text-red-500">*</span>
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleInputChange}
            className={`w-full p-2 border ${
              errors.query ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows="4"
          />
          {errors.query && <p className="text-red-500 mt-1">{errors.query}</p>}
        </div>
        <button
          type="submit"
          className="bg-Addbtn hover:bg-iconsColors text-white py-2 px-4 rounded focus:outline-none max-sm:text-[14px] max-xs:text-[12px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
