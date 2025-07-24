import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar, FiUser } = FiIcons;

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'CAPT Sarah Mitchell',
      rank: 'Captain',
      role: 'Commanding Officer, USS ARLEIGH BURKE',
      relationship: 'Former Commanding Officer',
      content: 'CDR Rivera\'s expertise in information systems was instrumental during our Mediterranean deployment. His ability to maintain secure communications under challenging conditions and his leadership of the Information Systems division was exemplary. He consistently demonstrated the technical competence and tactical acumen expected of a senior IP officer.',
      rating: 5,
      classification: 'UNCLASSIFIED',
      date: '2012'
    },
    {
      id: 2,
      name: 'RDML James Chen',
      rank: 'Rear Admiral',
      role: 'Commander, Naval Network Warfare Command',
      relationship: 'Former Superior',
      content: 'During his tour at NETWARCOM, CDR Rivera led critical C4I implementation projects that enhanced our fleet\'s cyber capabilities. His technical leadership and ability to coordinate complex multi-platform integrations made him an invaluable asset to our command. I have complete confidence in his abilities as an information warfare professional.',
      rating: 5,
      classification: 'CONFIDENTIAL',
      date: '2015'
    },
    {
      id: 3,
      name: 'LT Marcus Rodriguez',
      rank: 'Lieutenant',
      role: 'Information Systems Officer',
      relationship: 'Mentee',
      content: 'CDR Rivera was my division officer aboard USS JOHN S. MCCAIN. His mentorship shaped my understanding of information warfare and tactical communications. He taught me that being an IP officer means more than maintaining networks—we are guardians of the information that enables naval operations. His leadership style and technical expertise set the standard for excellence.',
      rating: 5,
      classification: 'UNCLASSIFIED',
      date: '2017'
    },
    {
      id: 4,
      name: 'COL Patricia Williams',
      rank: 'Colonel, USMC',
      role: 'Cyber Operations Director, JFHQ-DODIN',
      relationship: 'Joint Assignment Colleague',
      content: 'Working with CDR Rivera on joint cyber defense initiatives was a privilege. His deep understanding of naval information systems and ability to integrate them with joint operations made our multi-service coordination seamless. His contributions to Department of Defense Information Networks security protocols were significant and lasting.',
      rating: 5,
      classification: 'SECRET',
      date: '2020'
    },
    {
      id: 5,
      name: 'IT1 Michael Thompson',
      rank: 'Information Systems Technician First Class',
      role: 'Senior Enlisted Advisor',
      relationship: 'Direct Report',
      content: 'Sir, CDR Rivera is the kind of officer who remembers that mission success depends on every Sailor doing their job right. He took time to ensure I understood not just the \'how\' but the \'why\' behind our operations. His leadership made me a better technician and a better Sailor. He truly embodies what it means to be an Information Professional.',
      rating: 5,
      classification: 'UNCLASSIFIED',
      date: '2023'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'UNCLASSIFIED': return 'text-green-400 bg-green-400/20';
      case 'CONFIDENTIAL': return 'text-yellow-400 bg-yellow-400/20';
      case 'SECRET': return 'text-orange-400 bg-orange-400/20';
      case 'TOP SECRET': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-hud-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiMessageSquare} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              PERSONNEL EVALUATIONS - TESTIMONIALS
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            COMMAND <span className="text-matrix-green">ASSESSMENTS</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Professional evaluations from commanding officers, peers, and subordinates
          </p>
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-naval-blue/30 rounded-lg">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-matrix-green" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white">
                      {current.name}
                    </h3>
                    <p className="text-command-gold font-inter font-medium">
                      {current.rank}
                    </p>
                    <p className="text-gray-300 font-inter text-sm">
                      {current.role}
                    </p>
                    <p className="text-matrix-green font-inter text-sm font-medium mt-1">
                      {current.relationship}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded text-xs font-orbitron font-bold ${getClassificationColor(current.classification)}`}>
                    {current.classification}
                  </span>
                  <span className="text-gray-400 font-inter text-sm">
                    {current.date}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-command-gold fill-current" />
                ))}
                <span className="ml-2 text-gray-300 font-inter text-sm">
                  Outstanding Performance
                </span>
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 font-inter text-lg leading-relaxed italic">
                "{current.content}"
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-cyber-gray/50 border border-matrix-green/20 rounded-lg text-matrix-green hover:border-matrix-green/40 transition-colors"
            >
              <SafeIcon icon={FiChevronLeft} className="w-5 h-5" />
              <span className="font-inter font-medium">Previous</span>
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-matrix-green'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-cyber-gray/50 border border-matrix-green/20 rounded-lg text-matrix-green hover:border-matrix-green/40 transition-colors"
            >
              <span className="font-inter font-medium">Next</span>
              <SafeIcon icon={FiChevronRight} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="text-center p-6 bg-cyber-gray/20 border border-matrix-green/10 rounded-lg">
            <h4 className="font-orbitron text-2xl font-bold text-matrix-green mb-2">
              {testimonials.length}
            </h4>
            <p className="text-gray-300 font-inter">
              Professional Evaluations
            </p>
          </div>
          
          <div className="text-center p-6 bg-cyber-gray/20 border border-matrix-green/10 rounded-lg">
            <h4 className="font-orbitron text-2xl font-bold text-command-gold mb-2">
              15+
            </h4>
            <p className="text-gray-300 font-inter">
              Years of Service
            </p>
          </div>
          
          <div className="text-center p-6 bg-cyber-gray/20 border border-matrix-green/10 rounded-lg">
            <h4 className="font-orbitron text-2xl font-bold text-matrix-green mb-2">
              100%
            </h4>
            <p className="text-gray-300 font-inter">
              Mission Success Rate
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;