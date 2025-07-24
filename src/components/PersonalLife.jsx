import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCamera, FiPlay, FiPause, FiHeadphones, FiUsers } = FiIcons;

const PersonalLife = () => {
  const [selectedCategory, setSelectedCategory] = useState('family');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const categories = [
    { id: 'family', label: 'Family', icon: FiHeart },
    { id: 'hobbies', label: 'Interests', icon: FiCamera },
    { id: 'community', label: 'Community', icon: FiUsers }
  ];

  const content = {
    family: {
      title: 'Family & Personal Life',
      description: 'The foundation that keeps me grounded through every deployment and challenge.',
      items: [
        {
          id: 1,
          title: 'Sarah & Family',
          image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
          description: 'My wife Sarah and our two children, Emma (12) and Jack (9). They are my anchor and my inspiration for everything I do in service to our country.',
          date: 'Always'
        },
        {
          id: 2,
          title: 'Family Traditions',
          image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
          description: 'Annual camping trips and family game nights. These moments remind me what I\'m protecting and why the mission matters.',
          date: 'Every Summer'
        },
        {
          id: 3,
          title: 'Homecoming',
          image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
          description: 'The joy of returning home after deployment. No mission success compares to seeing their faces again.',
          date: 'Every Return'
        }
      ]
    },
    hobbies: {
      title: 'Personal Interests & Hobbies',
      description: 'Pursuits that challenge me and keep me sharp outside of naval service.',
      items: [
        {
          id: 1,
          title: 'Amateur Radio (Ham Radio)',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80',
          description: 'Licensed as KN4RIV. Building and operating HF radio equipment keeps my technical skills sharp and connects me with operators worldwide.',
          date: 'Licensed 2015'
        },
        {
          id: 2,
          title: 'Drone Technology & FPV',
          image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
          description: 'Building and flying FPV racing drones. The precision and technical knowledge required parallels many aspects of naval technology.',
          date: 'Ongoing'
        },
        {
          id: 3,
          title: 'Cybersecurity Research',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
          description: 'Staying current with emerging threats and defense technologies. Continuous learning is essential in information warfare.',
          date: 'Continuous'
        },
        {
          id: 4,
          title: 'Fitness & Running',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
          description: 'Marathon running and CrossFit training. Physical fitness is as important as mental acuity in naval service.',
          date: 'Daily'
        }
      ]
    },
    community: {
      title: 'Community Involvement',
      description: 'Giving back to the community and supporting the next generation of leaders.',
      items: [
        {
          id: 1,
          title: 'STEM Education Outreach',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
          description: 'Speaking at local schools about careers in cybersecurity and information technology. Inspiring young minds to pursue STEM fields.',
          date: 'Monthly'
        },
        {
          id: 2,
          title: 'Veteran Support Network',
          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
          description: 'Mentoring transitioning veterans entering cybersecurity careers. Helping bridge the gap between military and civilian IT roles.',
          date: 'Ongoing'
        },
        {
          id: 3,
          title: 'Navy League Support',
          image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80',
          description: 'Active member supporting Navy families and community relations. Building bridges between naval service and civilian communities.',
          date: 'Since 2018'
        }
      ]
    }
  };

  const currentContent = content[selectedCategory];

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // In a real implementation, this would control audio playback
  };

  return (
    <section className="py-20 bg-cyber-gradient relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiHeart} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              PERSONAL FILE - OFF DUTY
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            BEYOND THE <span className="text-matrix-green">UNIFORM</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            The person behind the officer - family, interests, and community connections
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-orbitron text-sm font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-matrix-green text-hud-black'
                  : 'bg-cyber-gray/30 text-gray-300 border border-matrix-green/20 hover:border-matrix-green/40'
              }`}
            >
              <SafeIcon icon={category.icon} className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
                {currentContent.title}
              </h3>
              <p className="text-gray-300 font-inter text-lg max-w-3xl mx-auto">
                {currentContent.description}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentContent.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg overflow-hidden hover:border-matrix-green/40 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-hud-black/80 px-2 py-1 rounded text-command-gold font-inter text-xs">
                      {item.date}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-orbitron text-lg font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Audio Letter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">
              PERSONAL MESSAGE
            </h3>
            <p className="text-gray-300 font-inter">
              A personal reflection on service, family, and the balance between duty and life
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAudio}
              className="flex items-center space-x-3 px-8 py-4 bg-matrix-green/20 border border-matrix-green/30 rounded-lg text-matrix-green hover:bg-matrix-green/30 transition-colors"
            >
              <SafeIcon icon={isAudioPlaying ? FiPause : FiPlay} className="w-6 h-6" />
              <span className="font-orbitron font-bold">
                {isAudioPlaying ? 'PAUSE MESSAGE' : 'PLAY MESSAGE'}
              </span>
              <SafeIcon icon={FiHeadphones} className="w-5 h-5" />
            </motion.button>
          </div>

          {isAudioPlaying && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-hud-black/50 border border-matrix-green/20 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 2, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      className="w-1 h-4 bg-matrix-green rounded"
                    />
                  ))}
                </div>
                <span className="text-matrix-green font-inter text-sm">
                  Audio Message Playing...
                </span>
              </div>
              <p className="text-gray-300 font-inter italic leading-relaxed">
                "Service to our nation is more than a job—it's a calling that shapes every aspect of who we are. 
                But behind every uniform is a person with dreams, family, and a life that gives meaning to the mission. 
                My family reminds me daily why the work we do matters, and my hobbies keep me sharp and grounded. 
                To my fellow service members: never forget that you are whole people, not just your rank or your role."
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLife;