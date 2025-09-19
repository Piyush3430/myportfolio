import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaCog, FaRocket, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg sticky top-0 z-50 border-b border-gradient-to-r from-pink-200 via-purple-200 to-blue-200"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <FaRocket className="text-white text-sm" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            Piyush Unde
          </motion.h1>
        </motion.div>
        
        <div className="flex items-center gap-4">
          {/* Enhanced Admin Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-2 text-xs text-gray-600 bg-gradient-to-r from-pink-50 to-purple-50 px-4 py-2 rounded-full border border-pink-200 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaCog className="text-pink-500" />
              </motion.div>
              <span className="font-medium">Admin: Ctrl+Shift+A</span>
            </motion.div>
            
            {/* Floating particles on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: 0, 
                        y: 0,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{ 
                        x: Math.random() * 40 - 20, 
                        y: Math.random() * 40 - 20,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      style={{
                        left: `${50 + i * 10}%`,
                        top: `${50 + i * 5}%`
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Enhanced Social Links */}
          <div className="flex space-x-4 text-blue-600 text-xl">
            <motion.a 
              href="https://www.linkedin.com/in/piyush-unde-6b1a07287/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              whileHover={{ 
                scale: 1.2, 
                y: -3,
                rotate: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 hover:text-blue-800 transition-all duration-300 p-2 rounded-full hover:bg-blue-50"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/Piyush3430" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              whileHover={{ 
                scale: 1.2, 
                y: -3,
                rotate: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-gray-900 transition-all duration-300 p-2 rounded-full hover:bg-gray-50"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              whileHover={{ 
                scale: 1.2, 
                y: -3,
                rotate: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-400 hover:text-blue-600 transition-all duration-300 p-2 rounded-full hover:bg-blue-50"
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Animated background gradient line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </motion.nav>
  );
};

export default Navbar;
