import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
            CONTACT
          </h1>
          <p className="text-xl text-zinc-500">
            Let's discuss your next project or booking.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <label className="block text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">
                NAME
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-accent transition-all font-medium text-lg text-white group-focus-within:shadow-[0_1px_20px_rgba(255,102,0,0.1)]"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div className="relative group">
              <label className="block text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">
                EMAIL
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-accent transition-all font-medium text-lg text-white group-focus-within:shadow-[0_1px_20px_rgba(255,102,0,0.1)]"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
          </div>

          <div className="relative group">
            <label className="block text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2">
              MESSAGE
            </label>
            <textarea
              required
              rows={5}
              className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-accent transition-all font-medium text-lg text-white resize-none group-focus-within:shadow-[0_1px_20px_rgba(255,102,0,0.1)]"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-6 bg-white text-black font-bold text-xl tracking-widest hover:bg-accent hover:text-white transition-all duration-300 uppercase"
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 border-l-4 border-accent bg-zinc-900 text-white text-sm font-bold uppercase tracking-widest"
          >
            Message sent. We'll be in touch.
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
