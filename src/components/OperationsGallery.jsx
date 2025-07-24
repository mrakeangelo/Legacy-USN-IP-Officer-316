import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiImage, FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiCalendar, FiShield } = FiIcons;

const OperationsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'deployments', label: 'Deployments' },
    { id: 'c4i', label: 'C4I Systems' },
    { id: 'exercises', label: 'Exercises' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
      title: 'Combat Information Center',
      category: 'deployments',
      location: 'USS JOHN S. MCCAIN (DDG-56)',
      date: '2017',
      classification: 'CONFIDENTIAL',
      description: 'Advanced radar and communications control center during South China Sea operations.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
      title: 'Satellite Communications Array',
      category: 'c4i',
      location: 'NCTAMS Bahrain',
      date: '2023',
      classification: 'SECRET',
      description: 'Primary SATCOM facility providing C4I support to 5th Fleet operations.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      title: 'Network Operations Center',
      category: 'facilities',
      location: 'Naval Network Warfare Command',
      date: '2014',
      classification: 'SECRET',
      description: '24/7 network monitoring and cyber defense operations center.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      title: 'Joint Exercise CYBER FLAG',
      category: 'exercises',
      location: 'Nellis AFB, Nevada',
      date: '2020',
      classification: 'CONFIDENTIAL',
      description: 'Multi-service cyber warfare exercise focused on defensive operations.'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&q=80',
      title: 'Forward Operating Base Communications',
      category: 'deployments',
      location: 'Arabian Gulf',
      date: '2022',
      classification: 'SECRET',
      description: 'Tactical communications setup supporting special operations.'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80',
      title: 'Cyber Defense Training',
      category: 'exercises',
      location: 'Fort Gordon, Georgia',
      date: '2019',
      classification: 'UNCLASSIFIED',
      description: 'Advanced cyber defense course for naval information professionals.'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'UNCLASSIFIED': return 'text-green-400 bg-green-400/20';
      case 'CONFIDENTIAL': return 'text-yellow-400 bg-yellow-400/20';
      case 'SECRET': return 'text-orange-400 bg-orange-400/20';
      case 'TOP SECRET': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="operations" className="py-20 bg-cyber-gradient relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiImage} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              OPERATIONS ARCHIVE - VISUAL INTEL
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            MISSION <span className="text-matrix-green">GALLERY</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Classified visual documentation of naval information operations and deployments
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-orbitron text-sm font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-matrix-green text-hud-black'
                  : 'bg-cyber-gray/30 text-gray-300 border border-matrix-green/20 hover:border-matrix-green/40'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-lg bg-cyber-gray/30 border border-matrix-green/20 hover:border-matrix-green/40 transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hud-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-orbitron text-white font-bold text-lg mb-2">
                        {image.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{image.date}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${getClassificationColor(image.classification)}`}>
                          {image.classification}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Classification Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${getClassificationColor(image.classification)}`}>
                      {image.classification}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-hud-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-cyber-gray/90 border border-matrix-green/30 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-hud-black/50 rounded-lg text-white hover:text-matrix-green transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-hud-black/50 rounded-lg text-white hover:text-matrix-green transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-hud-black/50 rounded-lg text-white hover:text-matrix-green transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-300 text-sm">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                          <span>{selectedImage.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                          <span>{selectedImage.date}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded font-orbitron font-bold text-sm ${getClassificationColor(selectedImage.classification)}`}>
                      <SafeIcon icon={FiShield} className="w-4 h-4 inline mr-2" />
                      {selectedImage.classification}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OperationsGallery;