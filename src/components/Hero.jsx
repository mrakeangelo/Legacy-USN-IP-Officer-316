import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiRadio, FiShield, FiZap } = FiIcons;

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Dominating the battlespace with secure comms and zero doubt.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Radar Animation */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-matrix-green rounded-full"></div>
            <div className="absolute inset-2 border border-matrix-green/50 rounded-full"></div>
            <div className="absolute inset-4 border border-matrix-green/30 rounded-full"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-matrix-green rounded-full"
            ></motion.div>
          </div>
        </div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-32 left-20 text-matrix-green/30"
        >
          <SafeIcon icon={FiRadio} className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-32 right-32 text-matrix-green/30"
        >
          <SafeIcon icon={FiShield} className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Classification Header */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/20 border border-matrix-green/30 rounded-lg">
            <SafeIcon icon={FiShield} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              CLASSIFIED - PERSONNEL FILE
            </span>
          </div>
        </motion.div>

        {/* Rank and Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            <span className="text-command-gold">CDR</span>{' '}
            <span className="bg-gradient-to-r from-white to-matrix-green bg-clip-text text-transparent">
              ETHAN T. RIVERA
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-inter text-lg md:text-xl text-gray-300 mb-2">
            U.S. Navy Information Professional Officer
          </h2>
          <div className="flex items-center justify-center space-x-4 text-matrix-green">
            <SafeIcon icon={FiZap} className="w-5 h-5" />
            <span className="font-orbitron text-sm font-medium tracking-wider">
              DIGITAL WARFARE SPECIALIST
            </span>
            <SafeIcon icon={FiZap} className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Typed Quote */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="font-inter text-lg md:text-xl text-gray-300 italic">
              "{typedText}"
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-matrix-green"
              >
                |
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#mission-log"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-naval-blue to-matrix-green text-white font-orbitron font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-matrix-green/25 transition-all duration-300"
          >
            <span>ACCESS LEGACY FILE</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Status Indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex items-center justify-center space-x-8 text-sm"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse"></div>
            <span className="text-gray-400 font-inter">SECURE CONNECTION</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-command-gold rounded-full animate-pulse"></div>
            <span className="text-gray-400 font-inter">CLEARANCE: TOP SECRET</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-matrix-green rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-matrix-green rounded-full mt-2 animate-pulse"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;