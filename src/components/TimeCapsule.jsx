import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUnlock, FiClock, FiCalendar, FiFileText, FiShield, FiX } = FiIcons;

const TimeCapsule = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const timeCapsuleData = {
    releaseDate: '2034-01-01',
    classification: 'PERSONAL - UNCLASSIFIED',
    encryptionLevel: 'AES-256',
    authorizedRecipients: ['Family', 'Future IPs', 'Naval History']
  };

  const letters = [
    {
      id: 1,
      title: 'To My Future Self',
      recipient: 'CDR Rivera (Retired)',
      date: '2024',
      preview: 'Reflecting on the journey and the path ahead...',
      content: `Dear Future Ethan,

If you're reading this, it means you've reached a milestone I can only imagine today. As I write this in 2024, I'm commanding NCTAMS Bahrain, leading some of the finest Sailors in the Navy, and still learning something new about information warfare every day.

I hope you remember the weight of responsibility you felt every time you put on the uniform. The late nights troubleshooting network issues weren't just about keeping systems running—they were about keeping our Sailors connected to home and our commanders connected to the information they needed to make life-and-death decisions.

Did we achieve our goal of making the Navy's networks truly unassailable? Did the next generation of Information Professionals build on what we started? I hope the answer is yes, but more importantly, I hope you never stopped learning, never stopped mentoring, and never lost sight of why we serve.

The technology will change—it always does. But the mission remains the same: ensure that information flows freely to those who need it and remains secure from those who would do us harm.

Stay curious. Stay humble. Stay Navy.

Your younger self,
CDR Ethan T. Rivera
2024`
    },
    {
      id: 2,
      title: 'To the Next Generation of IPs',
      recipient: 'Future Information Professionals',
      date: '2024',
      preview: 'Lessons learned and wisdom to pass forward...',
      content: `To the Information Professionals who will inherit this mission,

You are entering the Navy at a time when information warfare is no longer a supporting function—it IS the warfare. The networks you defend, the systems you maintain, and the communications you enable are the nervous system of naval operations.

Here's what I wish someone had told me when I was starting out:

1. Master the fundamentals. Every advanced system is built on basic principles. Understand networking, understand security, understand how data moves and why it matters.

2. Never stop learning. The threat evolves daily. What worked yesterday may be compromised today. Continuous education isn't just recommended—it's survival.

3. Remember the human element. Behind every IP address is a person trying to do their job. Behind every security protocol is a family depending on you to keep their loved one safe.

4. Embrace joint operations. The future belongs to those who can seamlessly integrate Navy, Army, Air Force, Marine, and Space Force networks. Learn their languages, understand their needs.

5. Mentor others. The knowledge you gain belongs not just to you, but to the community. Share it, teach it, pass it on.

The sea services have always been about exploring new frontiers. Today, that frontier is digital. Chart the course with the same courage and precision our predecessors used to navigate unknown waters.

Fair winds and following seas,
CDR Ethan T. Rivera
Information Professional Officer, USN`
    },
    {
      id: 3,
      title: 'To My Family',
      recipient: 'Sarah, Emma, and Jack',
      date: '2024',
      preview: 'Love, gratitude, and hopes for the future...',
      content: `My Dearest Sarah, Emma, and Jack,

If you're reading this, it means we've reached a point where I can look back on my naval career with the perspective that only time provides. I wanted to capture these thoughts while they're fresh, while I can still remember the weight of every decision and the pride of every accomplishment.

Sarah, you have been my anchor through every storm, my compass when I lost direction, and my harbor when I needed rest. Every deployment was bearable because I knew you were keeping our family strong. Every difficult decision was easier because I knew you supported the mission. You didn't just marry a naval officer—you became the foundation that made my service possible.

Emma and Jack, by the time you read this, you'll understand better why Dad had to miss some games, some birthdays, some moments. It wasn't because they weren't important—it was because the work we do helps protect the freedom for you to have those moments at all. I hope you're proud of the choice we made to serve, and I hope you understand that every day away from you made me more determined to build a safer world for your future.

The Navy taught me about duty, honor, and courage. But you taught me about love, sacrifice, and what truly matters. Whatever I accomplished in uniform, my greatest achievement will always be being your husband and your father.

I love you more than all the stars in the sky and all the data in the network.

Always yours,
Dad/Ethan`
    }
  ];

  const unlockCapsule = () => {
    setIsUnlocked(true);
  };

  const formatTimeUntilRelease = () => {
    const now = new Date();
    const release = new Date(timeCapsuleData.releaseDate);
    const diff = release - now;
    const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
    return `${years} years`;
  };

  return (
    <section id="legacy" className="py-20 bg-hud-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-naval-blue/30 border border-matrix-green/30 rounded-lg mb-6">
            <SafeIcon icon={FiClock} className="w-4 h-4 text-matrix-green" />
            <span className="text-matrix-green font-orbitron text-xs font-bold tracking-wider">
              TIME CAPSULE - ENCRYPTED LEGACY
            </span>
          </div>
          
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
            TO THE <span className="text-matrix-green">FUTURE</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Encrypted messages and reflections sealed for future generations
          </p>
        </motion.div>

        {/* Time Capsule Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {!isUnlocked ? (
            /* Locked State */
            <div className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8 text-center">
              {/* Lock Animation */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <SafeIcon icon={FiLock} className="w-16 h-16 text-matrix-green" />
                  <div className="absolute inset-0 animate-ping">
                    <SafeIcon icon={FiLock} className="w-16 h-16 text-matrix-green opacity-30" />
                  </div>
                </div>
              </motion.div>

              <h3 className="font-orbitron text-2xl font-bold text-white mb-4">
                ENCRYPTED TIME CAPSULE
              </h3>
              
              {/* Capsule Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 text-matrix-green" />
                    <span className="font-orbitron text-sm font-bold text-matrix-green">RELEASE DATE</span>
                  </div>
                  <p className="text-gray-300 font-inter">{timeCapsuleData.releaseDate}</p>
                  <p className="text-command-gold font-inter text-sm">
                    {formatTimeUntilRelease()} remaining
                  </p>
                </div>

                <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiShield} className="w-4 h-4 text-matrix-green" />
                    <span className="font-orbitron text-sm font-bold text-matrix-green">ENCRYPTION</span>
                  </div>
                  <p className="text-gray-300 font-inter">{timeCapsuleData.encryptionLevel}</p>
                  <p className="text-command-gold font-inter text-sm">Military Grade</p>
                </div>

                <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-4 md:col-span-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiFileText} className="w-4 h-4 text-matrix-green" />
                    <span className="font-orbitron text-sm font-bold text-matrix-green">AUTHORIZED RECIPIENTS</span>
                  </div>
                  <p className="text-gray-300 font-inter">
                    {timeCapsuleData.authorizedRecipients.join(' • ')}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 font-inter mb-8 leading-relaxed">
                This time capsule contains personal reflections, professional insights, and messages 
                for future generations. The contents are encrypted and scheduled for automatic release 
                on the specified date, or can be unlocked early with proper authorization.
              </p>

              {/* Unlock Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={unlockCapsule}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-naval-blue to-matrix-green text-white font-orbitron font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-matrix-green/25 transition-all duration-300"
              >
                <SafeIcon icon={FiUnlock} className="w-5 h-5" />
                <span>EMERGENCY UNLOCK</span>
              </motion.button>

              <p className="text-gray-500 font-inter text-sm mt-4">
                *Requires command authorization or family access*
              </p>
            </div>
          ) : (
            /* Unlocked State */
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Unlock Success */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-matrix-green/20 border border-matrix-green rounded-lg">
                    <SafeIcon icon={FiUnlock} className="w-4 h-4 text-matrix-green" />
                    <span className="text-matrix-green font-orbitron text-sm font-bold">
                      DECRYPTION SUCCESSFUL
                    </span>
                  </div>
                </motion.div>

                {/* Letters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {letters.map((letter, index) => (
                    <motion.div
                      key={letter.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedLetter(letter)}
                      className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 cursor-pointer hover:border-matrix-green/40 transition-all duration-300"
                    >
                      <div className="text-center">
                        <div className="p-3 bg-naval-blue/30 rounded-lg inline-block mb-4">
                          <SafeIcon icon={FiFileText} className="w-6 h-6 text-matrix-green" />
                        </div>
                        <h4 className="font-orbitron text-lg font-bold text-white mb-2">
                          {letter.title}
                        </h4>
                        <p className="text-command-gold font-inter text-sm mb-2">
                          {letter.recipient}
                        </p>
                        <p className="text-gray-400 font-inter text-sm mb-4">
                          {letter.preview}
                        </p>
                        <span className="text-matrix-green font-inter text-xs">
                          Written: {letter.date}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Letter Modal */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-hud-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[80vh] bg-cyber-gray/90 border border-matrix-green/30 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-hud-black/50 rounded-lg text-white hover:text-matrix-green transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                {/* Letter Header */}
                <div className="border-b border-matrix-green/20 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-naval-blue/30 rounded-lg">
                      <SafeIcon icon={FiFileText} className="w-6 h-6 text-matrix-green" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-xl font-bold text-white">
                        {selectedLetter.title}
                      </h3>
                      <p className="text-command-gold font-inter">
                        To: {selectedLetter.recipient}
                      </p>
                      <p className="text-gray-400 font-inter text-sm">
                        Written: {selectedLetter.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Letter Content */}
                <div className="p-6 max-h-96 overflow-y-auto custom-scrollbar">
                  <div className="prose prose-invert prose-green max-w-none">
                    {selectedLetter.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-300 font-inter leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Letter Footer */}
                <div className="border-t border-matrix-green/20 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-400 font-orbitron font-bold">
                      PERSONAL - UNCLASSIFIED
                    </span>
                    <span className="text-gray-400 font-inter">
                      Time Capsule Entry #{selectedLetter.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

export default TimeCapsule;