import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiMail, FiKey, FiShield, FiSettings, FiEdit, FiUpload, FiSave, FiLogOut } = FiIcons;

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTab, setActiveTab] = useState('timeline');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, this would authenticate with Supabase
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: FiSettings },
    { id: 'gallery', label: 'Gallery', icon: FiUpload },
    { id: 'testimonials', label: 'Testimonials', icon: FiUser },
    { id: 'capsule', label: 'Time Capsule', icon: FiLock }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-hud-black flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8 max-w-md w-full mx-4"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-naval-blue/30 rounded-lg mb-4">
              <SafeIcon icon={FiShield} className="w-8 h-8 text-matrix-green" />
            </div>
            <h1 className="font-orbitron text-2xl font-bold text-white mb-2">
              ADMIN ACCESS
            </h1>
            <p className="text-gray-400 font-inter text-sm">
              Secure authentication required
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-matrix-green font-orbitron text-sm font-bold mb-2">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full bg-hud-black/50 border border-matrix-green/30 rounded-lg px-10 py-3 text-white font-inter focus:border-matrix-green focus:outline-none"
                  placeholder="admin@navy.mil"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-matrix-green font-orbitron text-sm font-bold mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <SafeIcon icon={FiKey} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full bg-hud-black/50 border border-matrix-green/30 rounded-lg px-10 py-3 text-white font-inter focus:border-matrix-green focus:outline-none"
                  placeholder="Enter secure password"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-naval-blue to-matrix-green text-white font-orbitron font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-matrix-green/25 transition-all duration-300"
            >
              AUTHENTICATE
            </motion.button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-hud-black/50 border border-matrix-green/20 rounded-lg">
            <p className="text-gray-400 font-inter text-xs text-center">
              <SafeIcon icon={FiLock} className="w-3 h-3 inline mr-1" />
              Secure connection established • All actions logged
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hud-black">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5"></div>
      
      {/* Header */}
      <div className="bg-cyber-gray/30 border-b border-matrix-green/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-naval-blue/30 rounded-lg">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-matrix-green" />
              </div>
              <div>
                <h1 className="font-orbitron text-xl font-bold text-white">
                  ADMIN DASHBOARD
                </h1>
                <p className="text-gray-400 font-inter text-sm">
                  Content Management System
                </p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="w-4 h-4" />
              <span className="font-inter text-sm">Logout</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-6 sticky top-24">
              <h2 className="font-orbitron text-lg font-bold text-white mb-6">
                CONTROL PANEL
              </h2>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-inter text-sm transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-matrix-green/20 text-matrix-green border border-matrix-green/30'
                        : 'text-gray-300 hover:bg-hud-black/50 hover:text-white'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-8"
            >
              {/* Timeline Management */}
              {activeTab === 'timeline' && (
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-6">
                    MISSION LOG MANAGEMENT
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-6">
                      <h4 className="font-orbitron text-lg font-bold text-matrix-green mb-4">
                        Add New Mission Entry
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Year
                          </label>
                          <input
                            type="text"
                            className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none"
                            placeholder="2024"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Title
                          </label>
                          <input
                            type="text"
                            className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none"
                            placeholder="Mission Title"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none"
                            placeholder="Assignment Location"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Description
                          </label>
                          <textarea
                            rows="3"
                            className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none"
                            placeholder="Mission description..."
                          />
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 flex items-center space-x-2 px-6 py-3 bg-matrix-green/20 border border-matrix-green/30 rounded-lg text-matrix-green hover:bg-matrix-green/30 transition-colors"
                      >
                        <SafeIcon icon={FiSave} className="w-4 h-4" />
                        <span className="font-inter">Save Entry</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Management */}
              {activeTab === 'gallery' && (
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-6">
                    OPERATIONS GALLERY
                  </h3>
                  
                  <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-6">
                    <h4 className="font-orbitron text-lg font-bold text-matrix-green mb-4">
                      Upload New Images
                    </h4>
                    
                    <div className="border-2 border-dashed border-matrix-green/30 rounded-lg p-8 text-center">
                      <SafeIcon icon={FiUpload} className="w-12 h-12 text-matrix-green mx-auto mb-4" />
                      <p className="text-gray-300 font-inter mb-4">
                        Drag and drop images here or click to browse
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-matrix-green/20 border border-matrix-green/30 rounded-lg text-matrix-green hover:bg-matrix-green/30 transition-colors"
                      >
                        Select Files
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Testimonials Management */}
              {activeTab === 'testimonials' && (
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-6">
                    TESTIMONIALS MANAGEMENT
                  </h3>
                  
                  <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-6">
                    <h4 className="font-orbitron text-lg font-bold text-matrix-green mb-4">
                      Pending Approvals
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-cyber-gray/30 border border-matrix-green/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-orbitron text-white font-bold">
                              LCDR Sarah Johnson
                            </h5>
                            <p className="text-gray-400 font-inter text-sm">
                              Submitted 2 hours ago
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded text-green-400 hover:bg-green-500/30 transition-colors"
                            >
                              Approve
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded text-red-400 hover:bg-red-500/30 transition-colors"
                            >
                              Reject
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Time Capsule Management */}
              {activeTab === 'capsule' && (
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-6">
                    TIME CAPSULE SETTINGS
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-hud-black/50 border border-matrix-green/20 rounded-lg p-6">
                      <h4 className="font-orbitron text-lg font-bold text-matrix-green mb-4">
                        Release Configuration
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Release Date
                          </label>
                          <input
                            type="date"
                            className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-300 font-inter text-sm mb-2">
                            Access Level
                          </label>
                          <select className="w-full bg-hud-black/50 border border-matrix-green/30 rounded px-3 py-2 text-white font-inter focus:border-matrix-green focus:outline-none">
                            <option>Family Only</option>
                            <option>Public</option>
                            <option>Navy Personnel</option>
                          </select>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 flex items-center space-x-2 px-6 py-3 bg-matrix-green/20 border border-matrix-green/30 rounded-lg text-matrix-green hover:bg-matrix-green/30 transition-colors"
                      >
                        <SafeIcon icon={FiSave} className="w-4 h-4" />
                        <span className="font-inter">Update Settings</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;