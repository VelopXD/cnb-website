'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Join() {
  const [formData, setFormData] = useState({
    minecraft_username: '',
    discord_username: '',
    age: '',
    experience: '',
    availability: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form
      setFormData({
        minecraft_username: '',
        discord_username: '',
        age: '',
        experience: '',
        availability: '',
        motivation: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
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
            Join <span className="neon-text">CNB</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take your Minecraft skills to the next level with CNB
          </p>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 bg-cnb-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-cnb-neon">Experience</h3>
              <p className="text-gray-300">Minimum 2 years of competitive Minecraft experience</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-cnb-neon">Commitment</h3>
              <p className="text-gray-300">Available for team practice sessions and tournaments</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-cnb-neon">Communication</h3>
              <p className="text-gray-300">Active Discord participation and good team communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-8 text-center">Application Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="minecraft_username" className="block text-sm font-medium text-gray-300 mb-2">
                  Minecraft Username*
                </label>
                <input
                  type="text"
                  id="minecraft_username"
                  name="minecraft_username"
                  value={formData.minecraft_username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                />
              </div>

              <div>
                <label htmlFor="discord_username" className="block text-sm font-medium text-gray-300 mb-2">
                  Discord Username*
                </label>
                <input
                  type="text"
                  id="discord_username"
                  name="discord_username"
                  value={formData.discord_username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                  Age*
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="13"
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  Competitive Experience*
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  placeholder="Describe your competitive Minecraft experience..."
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-2">
                  Weekly Availability*
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                >
                  <option value="">Select availability</option>
                  <option value="0-10">0-10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20-30">20-30 hours</option>
                  <option value="30+">30+ hours</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join CNB?*
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
                  placeholder="Tell us why you want to join our team..."
                />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`button-primary w-full md:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-center mt-4">
                  Application submitted successfully! We'll contact you via Discord.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-center mt-4">
                  There was an error submitting your application. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}