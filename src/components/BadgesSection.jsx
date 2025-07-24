import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiAward, FiStar, FiTrendingUp, FiLock } = FiIcons;

const BadgesSection = () => {
  const insignia = [
    {
      id: 1,
      name: 'Information Professional Officer',
      description: 'Primary warfare specialty insignia',
      image: 'https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=200&q=80',
      category: 'warfare',
      earned: '2009'
    },
    {
      id: 2,
      name: 'Surface Warfare Officer',
      description: 'Qualified Surface Warfare Officer',
      image: 'https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=200&q=80',
      category: 'warfare',
      earned: '2011'
    }
  ];

  const ranks = [
    { rank: 'ENS', year: '2008', active: false },
    { rank: 'LTJG', year: '2010', active: false },
    { rank: 'LT', year: '2012', active: false },
    { rank: 'LCDR', year: '2016', active: false },
    { rank: 'CDR', year: '2021', active: true }
  ];

  const medals = [
    {
      id: 1,
      name: 'Navy and Marine Corps Commendation Medal',
      description: 'For meritorious service during deployment',
      ribbons: 2,
      category: 'achievement'
    },
    {
      id: 2,
      name: 'Navy and Marine Corps Achievement Medal',
      description: 'For outstanding performance of duty',
      ribbons: 3,
      category: 'achievement'
    },
    {
      id: 3,
      name: 'Joint Service Achievement Medal',
      description: 'For exceptional service in joint operations',
      ribbons: 1,
      category: 'joint'
    },
    {
      id: 4,
      name: 'National Defense Service Medal',
      description: 'For service during period of national emergency',
      ribbons: 1,
      category: 'service'
    },
    {
      id: 5,
      name: 'Global War on Terrorism Service Medal',
      description: 'For service in support of operations against terrorism',
      ribbons: 1,
      category: 'service'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'CISSP',
      fullName: 'Certified Information Systems Security Professional',
      issuer: '(ISC)²',
      level: 'Expert',
      icon: FiShield
    },
    {
      id: 2,
      name: 'CompTIA Security+',
      fullName: 'Computing Technology Industry Association Security+',
      issuer: 'CompTIA',
      level: 'Professional',
      icon: FiLock
    },
    {
      id: 3,
      name: 'CCNA',
      fullName: 'Cisco Certified Network Associate',
      issuer: 'Cisco',
      level: 'Associate',
      icon: FiTrendingUp
    },
    {
      id: 4,
      name: 'JWICS Access',
      fullName: 'Joint Worldwide Intelligence Communications System',
      issuer: 'DoD',
      level: 'Classified',
      icon: FiShield
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-20 bg-cyber-gradient relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiAward} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              HONORS & QUALIFICATIONS - SERVICE RECORD
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            BADGES & <span className="text-matrix-green">CERTIFICATIONS</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Military honors, professional qualifications, and digital warfare credentials
          </p>
        </motion.div>

        {/* Rank Progression */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            RANK PROGRESSION
          </h3>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto pb-4">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.rank}
                variants={itemVariants}
                className="flex flex-col items-center min-w-0"
              >
                <div className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                  rank.active 
                    ? 'border-matrix-green bg-matrix-green/20' 
                    : 'border-gray-600 bg-cyber-gray/30'
                }`}>
                  <span className={`font-orbitron text-lg font-bold ${
                    rank.active ? 'text-matrix-green' : 'text-gray-300'
                  }`}>
                    {rank.rank}
                  </span>
                  {rank.active && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-matrix-green rounded-full animate-pulse"></div>
                  )}
                </div>
                <span className="text-gray-400 font-inter text-sm mt-2">
                  {rank.year}
                </span>
                {index < ranks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-matrix-green/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warfare Insignia */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            WARFARE INSIGNIA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {insignia.map((badge) => (
              <motion.div
                key={badge.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 hover:border-matrix-green/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-orbitron text-lg font-bold text-white mb-1">
                      {badge.name}
                    </h4>
                    <p className="text-gray-300 font-inter text-sm mb-2">
                      {badge.description}
                    </p>
                    <span className="text-command-gold font-inter text-sm font-medium">
                      Earned: {badge.earned}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medals and Ribbons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-16"
        >
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            MEDALS & DECORATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {medals.map((medal) => (
              <motion.div
                key={medal.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-4 hover:border-matrix-green/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-naval-blue/30 rounded-lg">
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-command-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-orbitron text-sm font-bold text-white mb-1">
                      {medal.name}
                    </h4>
                    <p className="text-gray-400 font-inter text-xs mb-2 leading-tight">
                      {medal.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-command-gold font-inter text-xs">
                        {medal.ribbons} ribbon{medal.ribbons > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            DIGITAL WARFARE CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 hover:border-matrix-green/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-naval-blue/30 rounded-lg">
                    <SafeIcon icon={cert.icon} className="w-6 h-6 text-matrix-green" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-orbitron text-lg font-bold text-white">
                        {cert.name}
                      </h4>
                      <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${
                        cert.level === 'Expert' ? 'text-red-400 bg-red-400/20' :
                        cert.level === 'Professional' ? 'text-orange-400 bg-orange-400/20' :
                        cert.level === 'Classified' ? 'text-matrix-green bg-matrix-green/20' :
                        'text-yellow-400 bg-yellow-400/20'
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                    <p className="text-gray-300 font-inter text-sm mb-2">
                      {cert.fullName}
                    </p>
                    <span className="text-command-gold font-inter text-sm font-medium">
                      Issued by: {cert.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BadgesSection;