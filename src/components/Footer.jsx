import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiRadio, FiChevronLeft, FiChevronRight, FiShield, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Without comms, there is no command.",
      author: "Naval Information Warfare Doctrine"
    },
    {
      text: "IP runs silently, but it runs everything.",
      author: "CDR Ethan T. Rivera"
    },
    {
      text: "In the digital domain, we are the first line of defense.",
      author: "Information Professional Community"
    },
    {
      text: "The network is the weapon. Information is the ammunition.",
      author: "Modern Naval Strategy"
    },
    {
      text: "Secure communications save lives. Compromised networks cost them.",
      author: "Cyber Warfare Principles"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <footer className="bg-hud-black border-t border-matrix-green/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Comm Beacon & Branding */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Static Comm Beacon */}
              <div className="relative inline-block mb-6">
                <div className="relative">
                  {/* Central Beacon */}
                  <div className="w-16 h-16 bg-matrix-green/20 border-2 border-matrix-green rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiRadio} className="w-8 h-8 text-matrix-green" />
                  </div>
                  
                  {/* Rotating Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-matrix-green/30 rounded-full"
                    style={{ width: '80px', height: '80px', left: '-8px', top: '-8px' }}
                  >
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-matrix-green rounded-full transform -translate-x-1/2"></div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-matrix-green/20 rounded-full"
                    style={{ width: '96px', height: '96px', left: '-16px', top: '-16px' }}
                  >
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-matrix-green/50 rounded-full transform -translate-x-1/2"></div>
                  </motion.div>
                  
                  {/* Signal Pulses */}
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-16 h-16 bg-matrix-green/10 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Branding */}
              <div className="mb-6">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                  <span className="text-matrix-green">IP</span>COMMAND
                </h3>
                <p className="text-gray-400 font-inter text-sm">
                  Digital Warfare • Secure Communications • Naval Excellence
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <SafeIcon icon={FiMail} className="w-4 h-4" />
                  <span>ethan.rivera@navy.mil</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span>DSN: 318-555-0123</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <SafeIcon icon={FiShield} className="w-4 h-4" />
                  <span>Clearance: Top Secret/SCI</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Carousel */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8"
            >
              <h4 className="font-orbitron text-lg font-bold text-matrix-green mb-6 text-center">
                COMMAND PHILOSOPHY
              </h4>
              
              <div className="relative">
                <motion.div
                  key={currentQuote}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <blockquote className="text-gray-300 font-inter text-lg italic leading-relaxed mb-4">
                    "{quotes[currentQuote].text}"
                  </blockquote>
                  <cite className="text-command-gold font-inter text-sm font-medium">
                    — {quotes[currentQuote].author}
                  </cite>
                </motion.div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevQuote}
                    className="p-2 bg-hud-black/50 border border-matrix-green/30 rounded-lg text-matrix-green hover:border-matrix-green/50 transition-colors"
                  >
                    <SafeIcon icon={FiChevronLeft} className="w-4 h-4" />
                  </motion.button>

                  {/* Dots */}
                  <div className="flex space-x-2">
                    {quotes.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => setCurrentQuote(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentQuote ? 'bg-matrix-green' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextQuote}
                    className="p-2 bg-hud-black/50 border border-matrix-green/30 rounded-lg text-matrix-green hover:border-matrix-green/50 transition-colors"
                  >
                    <SafeIcon icon={FiChevronRight} className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-matrix-green/20 pt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Service Info */}
            <div>
              <h5 className="font-orbitron text-sm font-bold text-matrix-green mb-3">
                SERVICE RECORD
              </h5>
              <div className="space-y-1 text-gray-400 font-inter text-sm">
                <p>15+ Years Active Duty</p>
                <p>Multiple Deployments</p>
                <p>Command Qualified</p>
                <p>Information Professional</p>
              </div>
            </div>

            {/* Current Assignment */}
            <div>
              <h5 className="font-orbitron text-sm font-bold text-matrix-green mb-3">
                CURRENT ASSIGNMENT
              </h5>
              <div className="space-y-1 text-gray-400 font-inter text-sm">
                <p>Commanding Officer</p>
                <p>NCTAMS Bahrain</p>
                <p>5th Fleet AOR</p>
                <p>2022 - Present</p>
              </div>
            </div>

            {/* Mrake Branding */}
            <div>
              <h5 className="font-orbitron text-sm font-bold text-matrix-green mb-3">
                DESIGNED BY
              </h5>
              <div className="space-y-1 text-gray-400 font-inter text-sm">
                <p>Mrake Agency</p>
                <p>Elite Design Standards</p>
                <p>Premium Digital Experiences</p>
                <p className="text-matrix-green">White-Label Ready</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-matrix-green/10 text-center">
            <p className="text-gray-500 font-inter text-sm">
              © 2024 CDR Ethan T. Rivera, USN. All rights reserved. 
              <span className="mx-2">•</span>
              This tribute honors naval service and the Information Professional community.
            </p>
            <p className="text-gray-600 font-inter text-xs mt-2">
              "Dominating the battlespace with secure comms and zero doubt."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-matrix-green/20 to-transparent">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="h-full w-32 bg-gradient-to-r from-transparent via-matrix-green/50 to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;