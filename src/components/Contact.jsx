import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="bg-gray-800 text-gray-400 body-font relative py-24">
      <div className="container px-6 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center w-full mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We'd love to hear from you — let's make something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-2/3 mx-auto space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 bg-gray-900/60 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-3 px-4 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 bg-gray-900/60 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-3 px-4 transition"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full bg-gray-900/60 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 h-32 text-base outline-none text-gray-100 py-3 px-4 resize-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full md:w-auto mx-auto block px-10 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
              isSubmitted
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50'
            } text-white`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
