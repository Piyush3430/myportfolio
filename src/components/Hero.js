import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaArrowDown, FaRocket, FaStar, FaCode } from 'react-icons/fa';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Enhanced Background floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-30 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-30 blur-sm"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
        className="absolute top-60 left-1/2 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-30 blur-sm"
      />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div variants={textVariants}>
          {/* Enhanced Greeting */}
          <motion.h3 
            variants={letterVariants}
            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 font-medium mb-4"
          >
            Hello, I'm
          </motion.h3>

          {/* Enhanced Name with more colors */}
          <motion.h1 
            variants={letterVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(147, 51, 234, 0.5)"
            }}
          >
            Piyush Unde
          </motion.h1>

          {/* Enhanced Title */}
          <motion.h2 
            variants={letterVariants}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-blue-700 to-purple-700 mb-6"
          >
            Full Stack Developer & Problem Solver
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p 
            variants={letterVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Proficient in <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">C++</span> and <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Python</span> with strong web development skills using <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ReactJS</span>, <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Node.js</span>, and modern tools. Passionate about building interactive web applications that solve real-world problems.
          </motion.p>

          {/* Enhanced Interactive Buttons */}
          <motion.div 
            variants={letterVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <FaEnvelope className="group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
            >
              <FaRocket className="group-hover:rotate-12 transition-transform duration-300" />
              View My Work
            </motion.button>
          </motion.div>

          {/* Enhanced Skills Preview with more colors */}
          <motion.div 
            variants={letterVariants}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { name: 'React', color: 'from-cyan-500 to-blue-600', icon: '⚛️' },
              { name: 'Node.js', color: 'from-green-500 to-emerald-600', icon: '🟢' },
              { name: 'Python', color: 'from-yellow-500 to-orange-600', icon: '🐍' },
              { name: 'C++', color: 'from-blue-500 to-purple-600', icon: '⚡' },
              { name: 'MongoDB', color: 'from-green-400 to-teal-600', icon: '🍃' },
              { name: 'TypeScript', color: 'from-blue-600 to-indigo-600', icon: '🔷' }
            ].map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -5
                }}
                className={`bg-gradient-to-r ${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm`}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Enhanced floating icons */}
          <motion.div
            variants={letterVariants}
            className="flex justify-center gap-8 mb-8"
          >
            {[FaCode, FaStar, FaRocket].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-gradient-to-b from-purple-500 to-pink-500 rounded-full flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
            />
          </motion.div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-purple-600 mt-2 font-medium"
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
