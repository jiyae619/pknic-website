import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold mb-6 text-slate-900"
            >
              Join the Next<br />
              <span className="text-blue-600">PKNIC!</span>
            </motion.h2>
            <p className="text-2xl text-slate-600 mb-12 font-light">
              Come for the insights. <br />
              <span className="font-semibold text-slate-900">Stay for the people.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={SOCIAL_LINKS.circle} 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                Join PKNIC <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={SOCIAL_LINKS.circle} 
                className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-bold rounded-full hover:border-slate-900 transition-all flex items-center justify-center"
              >
                Explore Events
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl">
            {isSent ? (
              <div className="h-80 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 text-sm text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Get in Touch</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-500 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-500 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 transition-colors resize-none"
                    placeholder="How can we help you grow?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;