// pages/contact.tsx
"use client"

import { useState } from 'react';
import { Navigation, Footer } from '@/components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Get in touch</h1>
              <p className="mt-3 text-lg text-gray-500">
                Ready to transform your business with custom AI solutions? Contact us today and let's discuss how we can help you automate and optimize your operations.
              </p>

              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>1-800-AI-TAYLOR</p>
                    <p className="mt-1">Mon-Fri 9am to 6pm EST</p>
                  </div>
                </div>

                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>contact@Createyouragents.com</p>
                  </div>
                </div>

                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 md:mt-0">
              <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {submitStatus === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-center">
                      There was an error sending your message. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}