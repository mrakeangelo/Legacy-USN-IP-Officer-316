import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMap, FiMapPin, FiRadio, FiShield, FiGlobe } = FiIcons;

const OpsMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: 'Norfolk, Virginia',
      coordinates: { x: 76, y: 38 },
      type: 'shore',
      classification: 'UNCLASSIFIED',
      operations: [
        'Naval Network Warfare Command',
        'C4I Systems Implementation',
        'Cyber Defense Training'
      ],
      timeframe: '2013-2015',
      description: 'Primary shore duty assignment focusing on fleet-wide network security and C4I system implementation.'
    },
    {
      id: 2,
      name: 'Mediterranean Sea',
      coordinates: { x: 15, y: 35 },
      type: 'deployment',
      classification: 'CONFIDENTIAL',
      operations: [
        'USS ARLEIGH BURKE Operations',
        'NATO Maritime Security',
        'Counter-Piracy Operations'
      ],
      timeframe: '2011-2012',
      description: 'Shipboard deployment supporting NATO operations and maritime security missions.'
    },
    {
      id: 3,
      name: 'South China Sea',
      coordinates: { x: 114, y: 12 },
      type: 'deployment',
      classification: 'SECRET',
      operations: [
        'Freedom of Navigation Operations',
        'USS JOHN S. MCCAIN',
        'Electronic Warfare Defense'
      ],
      timeframe: '2016-2018',
      description: 'Critical deployment conducting FONOPS while maintaining information superiority in contested waters.'
    },
    {
      id: 4,
      name: 'Fort Meade, Maryland',
      coordinates: { x: 76.7, y: 39.1 },
      type: 'joint',
      classification: 'TOP SECRET',
      operations: [
        'JFHQ-DODIN Support',
        'Multi-Service Cyber Defense',
        'DoD Information Networks'
      ],
      timeframe: '2019-2021',
      description: 'Joint assignment supporting Department of Defense Information Networks security and cyber operations.'
    },
    {
      id: 5,
      name: 'Manama, Bahrain',
      coordinates: { x: 50.6, y: 26.2 },
      type: 'command',
      classification: 'SECRET',
      operations: [
        'NCTAMS Bahrain Command',
        '5th Fleet C4I Support',
        'Forward Communications Hub'
      ],
      timeframe: '2022-Present',
      description: 'Current command assignment providing critical communications support to 5th Fleet operations.'
    }
  ];

  const getLocationColor = (type) => {
    switch (type) {
      case 'shore': return 'text-blue-400';
      case 'deployment': return 'text-orange-400';
      case 'joint': return 'text-purple-400';
      case 'command': return 'text-matrix-green';
      default: return 'text-gray-400';
    }
  };

  const getLocationIcon = (type) => {
    switch (type) {
      case 'shore': return FiMapPin;
      case 'deployment': return FiGlobe;
      case 'joint': return FiShield;
      case 'command': return FiRadio;
      default: return FiMapPin;
    }
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

  return (
    <section id="intel" className="py-20 bg-hud-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiMap} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              OPERATIONAL THEATER - GLOBAL PRESENCE
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            OPERATIONS <span className="text-matrix-green">MAP</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Global deployment footprint and strategic communication network presence
          </p>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8 mb-12"
        >
          {/* World Map Outline */}
          <div className="relative w-full h-96 bg-gradient-to-b from-naval-blue/20 to-cyber-gray/20 rounded-lg overflow-hidden">
            {/* Map Grid Overlay */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
            
            {/* Radar Sweep Animation */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-30">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border border-matrix-green rounded-full"></div>
                <div className="absolute inset-2 border border-matrix-green/50 rounded-full"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t border-matrix-green rounded-full"
                ></motion.div>
              </div>
            </div>

            {/* Location Markers */}
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ 
                  left: `${(location.coordinates.x + 180) / 360 * 100}%`,
                  top: `${(90 - location.coordinates.y) / 180 * 100}%`
                }}
                onClick={() => setSelectedLocation(location)}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  {/* Ping Animation */}
                  <div className="absolute inset-0 animate-ping">
                    <div className={`w-6 h-6 rounded-full ${getLocationColor(location.type).replace('text', 'bg')} opacity-30`}></div>
                  </div>
                  
                  {/* Main Marker */}
                  <div className={`relative w-6 h-6 rounded-full border-2 border-white ${getLocationColor(location.type).replace('text', 'bg')} flex items-center justify-center`}>
                    <SafeIcon 
                      icon={getLocationIcon(location.type)} 
                      className="w-3 h-3 text-white" 
                    />
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-matrix-green/30 transform -translate-y-1/2 origin-left rotate-45"></div>
                </motion.div>
              </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-hud-black/80 border border-matrix-green/30 rounded-lg p-4">
              <h4 className="font-orbitron text-sm font-bold text-white mb-3">OPERATION TYPES</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 font-inter text-xs">Shore Duty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300 font-inter text-xs">Deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300 font-inter text-xs">Joint Assignment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
                  <span className="text-gray-300 font-inter text-xs">Command</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Details */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 mb-8"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${getLocationColor(selectedLocation.type).replace('text', 'bg')}/20`}>
                  <SafeIcon 
                    icon={getLocationIcon(selectedLocation.type)} 
                    className={`w-6 h-6 ${getLocationColor(selectedLocation.type)}`} 
                  />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    {selectedLocation.name}
                  </h3>
                  <p className="text-command-gold font-inter font-medium">
                    {selectedLocation.timeframe}
                  </p>
                </div>
              </div>
              
              <span className={`px-3 py-1 rounded text-xs font-orbitron font-bold ${getClassificationColor(selectedLocation.classification)}`}>
                {selectedLocation.classification}
              </span>
            </div>

            <p className="text-gray-300 font-inter mb-4">
              {selectedLocation.description}
            </p>

            <div>
              <h4 className="font-orbitron text-sm font-bold text-matrix-green mb-2">
                KEY OPERATIONS:
              </h4>
              <ul className="space-y-1">
                {selectedLocation.operations.map((op, index) => (
                  <li key={index} className="text-gray-300 font-inter text-sm flex items-center space-x-2">
                    <div className="w-1 h-1 bg-matrix-green rounded-full"></div>
                    <span>{op}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: location.id * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedLocation(location)}
              className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-4 cursor-pointer hover:border-matrix-green/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getLocationColor(location.type).replace('text', 'bg')}/20`}>
                  <SafeIcon 
                    icon={getLocationIcon(location.type)} 
                    className={`w-5 h-5 ${getLocationColor(location.type)}`} 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-orbitron text-sm font-bold text-white mb-1">
                    {location.name}
                  </h4>
                  <p className="text-command-gold font-inter text-xs mb-2">
                    {location.timeframe}
                  </p>
                  <span className={`px-2 py-1 rounded text-xs font-orbitron font-bold ${getClassificationColor(location.classification)}`}>
                    {location.classification}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpsMap;