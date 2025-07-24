import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiPlay, FiPause, FiVolume2 } = FiIcons;

const StorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const story = `**MEMORANDUM FOR RECORD**

**SUBJECT:** Command Through the Network - Reflections on Information Warfare

**DATE:** ${new Date().toLocaleDateString()}

**CLASSIFICATION:** UNCLASSIFIED

---

### The Silent Lifeline of Command

In the modern battlespace, victory is not solely determined by the strength of our weapons or the courage of our warriors—though both remain essential. Victory increasingly depends on our ability to see first, decide faster, and act with precision across the electromagnetic spectrum.

As an Information Professional Officer, I have had the privilege of serving as the Navy's digital backbone, ensuring that command and control flows seamlessly from the Pentagon to the forward edge of battle. This is the story of how information warfare has evolved from a support function to the very foundation of naval dominance.

### Data Assurance in Combat Zones

During my deployment aboard USS JOHN S. MCCAIN in the South China Sea, we faced constant electronic warfare threats. Our mission wasn't just to maintain communications—it was to ensure that every byte of data transmitted was authentic, secure, and delivered without compromise.

I remember one particularly challenging night when we were conducting freedom of navigation operations near contested waters. Multiple adversaries were attempting to jam our communications and inject false data into our networks. Our team worked tirelessly to maintain what we call "information superiority"—the ability to collect, process, and disseminate information faster and more accurately than our adversaries.

That night, I realized that we weren't just IT professionals; we were digital warriors fighting an invisible war that would determine the outcome of any potential conflict.

### Mentoring the Next Generation

Perhaps the most rewarding aspect of my service has been mentoring young Sailors and junior officers entering the information warfare community. The pace of technological change is relentless, and today's cyber threats are more sophisticated than anything we faced even five years ago.

I've made it my mission to ensure that every Sailor under my command understands that they are not just maintaining networks—they are defending our nation's most critical infrastructure. Whether it's a Seaman Recruit learning to configure a secure router or a Lieutenant developing cyber defense protocols, each person in our community plays a vital role in maintaining our technological edge.

### The Future of Naval Information Warfare

As I look toward the future, I see a Navy that is more connected, more intelligent, and more capable than ever before. Artificial intelligence, quantum communications, and advanced cybersecurity protocols will revolutionize how we fight and win wars.

But technology alone will not ensure victory. It will be the dedication, professionalism, and expertise of Information Professional Officers and the Sailors we lead that will maintain America's dominance in the digital domain.

The network is no longer just a tool—it is the battlefield itself. And we are its guardians.

---

**CDR Ethan T. Rivera**  
**Information Professional Officer**  
**United States Navy**

*"Without comms, there is no command. Without the network, there is no Navy."*`;

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control audio playback
  };

  return (
    <section id="command" className="py-20 bg-hud-black relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiFileText} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              COMMAND BRIEF - PERSONAL NARRATIVE
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            COMMAND THROUGH THE <span className="text-matrix-green">NETWORK</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg">
            Reflections on information warfare and digital leadership
          </p>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg backdrop-blur-sm"
        >
          {/* Document Header */}
          <div className="border-b border-matrix-green/20 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-naval-blue/30 rounded-lg">
                  <SafeIcon icon={FiFileText} className="w-6 h-6 text-matrix-green" />
                </div>
                <div>
                  <h3 className="font-orbitron text-lg font-bold text-white">
                    MEMORANDUM FOR RECORD
                  </h3>
                  <p className="text-gray-400 font-inter text-sm">
                    Personal reflections on naval information warfare
                  </p>
                </div>
              </div>

              {/* Audio Control */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className="flex items-center space-x-2 px-4 py-2 bg-matrix-green/20 border border-matrix-green/30 rounded-lg text-matrix-green hover:bg-matrix-green/30 transition-colors"
              >
                <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-4 h-4" />
                <SafeIcon icon={FiVolume2} className="w-4 h-4" />
                <span className="font-inter text-sm">
                  {isPlaying ? 'Pause' : 'Listen'}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-6 max-h-96 overflow-y-auto custom-scrollbar">
            <div className="prose prose-invert prose-green max-w-none">
              {story.split('\n').map((line, index) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h4 key={index} className="font-orbitron text-command-gold font-bold text-lg mb-3 mt-6">
                      {line.replace(/\*\*/g, '')}
                    </h4>
                  );
                } else if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-orbitron text-white font-bold text-xl mb-4 mt-8">
                      {line.replace('### ', '')}
                    </h3>
                  );
                } else if (line.startsWith('---')) {
                  return (
                    <hr key={index} className="border-matrix-green/30 my-6" />
                  );
                } else if (line.trim() === '') {
                  return <br key={index} />;
                } else if (line.startsWith('*') && line.endsWith('*')) {
                  return (
                    <p key={index} className="text-matrix-green font-inter italic text-center text-lg mt-6">
                      {line.replace(/\*/g, '')}
                    </p>
                  );
                } else {
                  return (
                    <p key={index} className="text-gray-300 font-inter leading-relaxed mb-4">
                      {line}
                    </p>
                  );
                }
              })}
            </div>
          </div>

          {/* Classification Footer */}
          <div className="border-t border-matrix-green/20 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-400 font-orbitron font-bold">
                UNCLASSIFIED
              </span>
              <span className="text-gray-400 font-inter">
                Document ID: IP-CDR-RIVERA-2024-001
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 157, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 157, 0.7);
        }
      `}</style>
    </section>
  );
};

export default StorySection;