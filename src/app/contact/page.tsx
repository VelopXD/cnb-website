'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-cnb-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact <span className="neon-text">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  />
                </div>

                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`button-primary w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center mt-4">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center mt-4">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-cnb-neon">Connect with Us</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Discord</h4>
                    <p className="text-gray-300">Join our Discord server for quick responses</p>
                    <a
                      href="https://discord.gg/cnb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cnb-accent hover:text-opacity-80"
                    >
                      discord.gg/cnb
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <a
                      href="mailto:contact@cnbteam.com"
                      className="text-cnb-accent hover:text-opacity-80"
                    >
                      contact@cnbteam.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-cnb-neon">Social Media</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cnb-neon transition-colors duration-300"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cnb-neon transition-colors duration-300"
                  >
                    YouTube
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cnb-neon transition-colors duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cnb-neon transition-colors duration-300"
                  >
                    TikTok
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-cnb-neon">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How can I join CNB?</h4>
                    <p className="text-gray-300">
                      Visit our <a href="/join" className="text-cnb-accent hover:text-opacity-80">Join page</a> to
                      submit your application.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">When do you host tournaments?</h4>
                    <p className="text-gray-300">
                      Check our <a href="/news" className="text-cnb-accent hover:text-opacity-80">News page</a> for
                      upcoming events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}