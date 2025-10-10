import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Sparkles, Globe } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Users,
      title: 'Connect Authentically',
      description: 'Meet like-minded explorers and creators in a space that values genuine connections.',
    },
    {
      icon: Sparkles,
      title: 'Hidden Experiences',
      description: 'Discover secret events, meetups, and adventures that go beyond the ordinary.',
    },
    {
      icon: Globe,
      title: 'Share Your Story',
      description: 'Create moments worth remembering and share them with a community that cares.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-indigo-950/10 to-gray-900"></div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why <span className="text-indigo-400">NoMaad</span>?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 leading-relaxed">
            <strong className="text-indigo-300">NoMaad</strong> isn't your typical social app — it's a hidden world for
            people who crave authenticity. Whether it's meetups, music jams, or spontaneous adventures, every moment
            you create here becomes a story worth sharing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
