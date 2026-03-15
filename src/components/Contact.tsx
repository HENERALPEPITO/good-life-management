import React, { useState } from 'react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        alert('Failed to send message: ' + errorData.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while sending your message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 noise-bg">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-accent transition-colors font-body text-lg"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-accent transition-colors font-body text-lg"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-accent transition-colors font-body text-lg"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                />
              </div>

              <div className="relative">
                <label className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-black py-4 focus:outline-none focus:border-accent transition-colors font-body text-lg resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-6 bg-black text-white font-heading text-2xl tracking-widest transition-all duration-300 rounded-none uppercase ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}`}
              >
                {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 border-l-4 border-accent bg-black text-white text-sm font-body font-bold uppercase tracking-widest"
              >
                Message sent. We'll be in touch.
              </motion.div>
            )}
          </div>

          {/* Right: Info */}
          <div className="order-1 lg:order-2 space-y-16">
            <div>
              <span className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-4">
                BOOKINGS & MANAGEMENT
              </span>
              <a href="mailto:hello@goodlifemgmt.net" className="text-4xl md:text-6xl font-heading text-black hover:text-accent transition-colors">
                hello@goodlifemgmt.net
              </a>
            </div>

            <div>
              <span className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-4">
                PHONE
              </span>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-body font-medium text-black">+34 693 43 25 06</p>
                <p className="text-2xl md:text-3xl font-body font-medium text-black">+34 647 33 08 06</p>
              </div>
            </div>

            <div>
              <span className="block text-[10px] font-body font-bold text-accent uppercase tracking-[0.2em] mb-4">
                FOLLOW US
              </span>
              <a href="#" className="text-2xl md:text-3xl font-body font-medium text-black hover:text-accent transition-colors">
                @goodlife_management
              </a>
            </div>

            <div className="pt-12 border-t border-divider-dark">
              <h3 className="text-5xl md:text-7xl font-heading text-black tracking-tighter leading-none uppercase">
                EMPOWERING<br />TALENT WORLDWIDE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
