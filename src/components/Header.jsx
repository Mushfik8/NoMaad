import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-5 md:px-10">
        <a href="#" className="flex items-center space-x-2 z-50">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-bold text-indigo-400">NoMaad</span>
        </a>

        <div className="hidden md:flex space-x-8 font-medium">
          <button onClick={() => scrollToSection('home')} className="hover:text-indigo-400 transition">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-indigo-400 transition">
            About
          </button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-indigo-400 transition">
            Event
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-400 transition">
            Contact
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-gray-300 hover:text-white font-medium border border-gray-700 hover:border-indigo-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            Login
          </button>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 text-white p-2 hover:bg-gray-800 rounded-lg transition"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-lg pt-20 px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-semibold text-white hover:text-indigo-400 transition py-3"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-2xl font-semibold text-white hover:text-indigo-400 transition py-3"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-2xl font-semibold text-white hover:text-indigo-400 transition py-3"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-2xl font-semibold text-white hover:text-indigo-400 transition py-3"
              >
                Contact
              </button>
              <div className="flex flex-col gap-4 pt-6">
                <button className="text-gray-300 hover:text-white font-medium border border-gray-700 hover:border-indigo-500 px-6 py-3 rounded-lg transition-all duration-300">
                  Login
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
