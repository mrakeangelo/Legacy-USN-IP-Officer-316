import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiStar, FiShield, FiRadio, FiMonitor, FiUsers, FiAward, FiTrendingUp } = FiIcons;

const MissionLog = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const missions = [
    {
      id: 1,
      year: '2008',
      title: 'COMMISSIONING',
      location: 'Officer Candidate School, Newport, RI',
      description: 'Commissioned as Ensign through Officer Candidate School. Selected for Information Professional community.',
      icon: FiStar,
      classification: 'UNCLASSIFIED',
      status: 'COMPLETED'
    },
    {
      id: 2,
      year: '2009',
      title: 'INITIAL TRAINING',
      location: 'Naval Computer and Telecommunications Station, Norfolk',
      description: 'Completed Basic Information Professional Officer Course. Specialized in tactical communications and network operations.',
      icon: FiRadio,
      classification: 'UNCLASSIFIED',
      status: 'COMPLETED'
    },
    {
      id: 3,
      year: '2010-2012',
      title: 'FIRST SHIPBOARD TOUR',
      location: 'USS ARLEIGH BURKE (DDG-51)',
      description: 'Information Systems Officer aboard guided missile destroyer. Managed shipboard networks and tactical communications during Mediterranean deployment.',
      icon: FiShield,
      classification: 'CONFIDENTIAL',
      status: 'COMPLETED'
    },
    {
      id: 4,
      year: '2013-2015',
      title: 'SHORE DUTY - C4I IMPLEMENTATION',
      location: 'Naval Network Warfare Command, Norfolk',
      description: 'Led implementation of advanced C4I systems across Atlantic Fleet units. Managed cybersecurity protocols for critical infrastructure.',
      icon: FiMonitor,
      classification: 'SECRET',
      status: 'COMPLETED'
    },
    {
      id: 5,
      year: '2016-2018',
      title: 'DEPARTMENT HEAD',
      location: 'USS JOHN S. MCCAIN (DDG-56)',
      description: 'Combat Information Center Officer and Information Warfare Coordinator. Deployed to 7th Fleet AOR, conducted freedom of navigation operations.',
      icon: FiUsers,
      classification: 'SECRET',
      status: 'COMPLETED'
    },
    {
      id: 6,
      year: '2019-2021',
      title: 'JOINT ASSIGNMENT',
      location: 'JFHQ-DODIN, Fort Meade, MD',
      description: 'Cyber Operations Planner supporting Department of Defense Information Networks. Coordinated multi-service cyber defense initiatives.',
      icon: FiTrendingUp,
      classification: 'TOP SECRET',
      status: 'COMPLETED'
    },
    {
      id: 7,
      year: '2022-Present',
      title: 'COMMAND TOUR',
      location: 'Naval Computer and Telecommunications Station, Bahrain',
      description: 'Commanding Officer of forward-deployed communications facility. Providing critical C4I support to 5th Fleet operations.',
      icon: FiAward,
      classification: 'SECRET',
      status: 'ACTIVE'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-mission-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'UNCLASSIFIED': return 'text-green-400';
      case 'CONFIDENTIAL': return 'text-yellow-400';
      case 'SECRET': return 'text-orange-400';
      case 'TOP SECRET': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="mission-log" className="py-20 bg-cyber-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiMapPin} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              MISSION LOG - CAREER TIMELINE
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            SERVICE <span className="text-matrix-green">RECORD</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            A classified chronology of naval service, from commissioning to command
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-matrix-green/30"></div>

          {/* Mission Items */}
          <div className="space-y-12">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.id}
                data-id={mission.id}
                data-mission-item
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={visibleItems.has(mission.id.toString()) ? 
                  { opacity: 1, x: 0 } : 
                  { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-matrix-green rounded-full border-2 border-hud-black"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-matrix-green rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-cyber-gray/50 border border-matrix-green/20 rounded-lg p-6 backdrop-blur-sm hover:border-matrix-green/40 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-naval-blue/30 rounded-lg">
                          <SafeIcon icon={mission.icon} className="w-5 h-5 text-matrix-green" />
                        </div>
                        <div>
                          <h3 className="font-orbitron text-lg font-bold text-white">
                            {mission.title}
                          </h3>
                          <p className="text-command-gold font-inter text-sm font-medium">
                            {mission.year}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-1">
                        <span className={`text-xs font-orbitron font-bold ${getClassificationColor(mission.classification)}`}>
                          {mission.classification}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          mission.status === 'ACTIVE' 
                            ? 'bg-matrix-green/20 text-matrix-green' 
                            : 'bg-gray-600/20 text-gray-400'
                        }`}>
                          {mission.status}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 mb-3">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-matrix-green" />
                      <span className="text-gray-300 font-inter text-sm">
                        {mission.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 font-inter text-sm leading-relaxed">
                      {mission.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionLog;