import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [loadedImages, setLoadedImages] = useState({});

  const images = [
    'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="bg-gray-800 body-font py-24">
      <div className="container px-5 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Experience the <span className="text-indigo-400">Moments</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A glimpse into the hidden world of NoMaad — where every event tells a story.
          </p>
        </motion.div>

        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:p-2 p-1 w-1/2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[0] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[0]}
                  onLoad={() => handleImageLoad(0)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:p-2 p-1 w-1/2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[1] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[1]}
                  onLoad={() => handleImageLoad(1)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:p-2 p-1 w-full"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[2] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[2]}
                  onLoad={() => handleImageLoad(2)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:p-2 p-1 w-full"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[3] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[3]}
                  onLoad={() => handleImageLoad(3)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:p-2 p-1 w-1/2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[4] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[4]}
                  onLoad={() => handleImageLoad(4)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="md:p-2 p-1 w-1/2"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                {!loadedImages[5] && (
                  <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                )}
                <img
                  alt="gallery"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={images[5]}
                  onLoad={() => handleImageLoad(5)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
