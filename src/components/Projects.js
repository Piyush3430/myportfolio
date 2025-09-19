import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaEye, FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';

const Projects = ({ projects = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gradientColors = [
    'from-pink-500 via-purple-500 to-blue-500',
    'from-emerald-500 via-teal-500 to-cyan-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-blue-500 via-indigo-500 to-purple-500',
    'from-green-500 via-emerald-500 to-teal-500',
    'from-purple-500 via-pink-500 to-rose-500'
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          My Projects
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>

      {projects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-purple-100">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-24 h-24 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <FaEye className="text-3xl text-white" />
            </motion.div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">No Projects Yet</h4>
            <p className="text-gray-600 mb-4">
              Projects will appear here once they're added through the admin panel.
            </p>
            <div className="text-sm text-gray-500 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
              <p className="font-medium mb-1 text-purple-700">💡 Admin Access:</p>
              <p>Press <kbd className="bg-white px-2 py-1 rounded border text-xs text-purple-600 font-mono">Ctrl + Shift + A</kbd> to manage projects</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Enhanced Project Image with gradient overlay */}
              {project.imageUrl ? (
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-pink-200/50 via-purple-200/50 to-blue-200/50"
                  />
                  <div className="text-6xl text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    💻
                  </div>
                </div>
              )}

              {/* Enhanced Project Content */}
              <div className="p-6 relative">
                {/* Floating particles on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: Math.random() * 100 - 50, 
                        y: Math.random() * 100 - 50,
                        opacity: 0 
                      }}
                      animate={{ 
                        x: Math.random() * 200 - 100, 
                        y: Math.random() * 200 - 100,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 15}%`
                      }}
                    />
                  ))}
                </motion.div>

                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-300">
                  {project.name}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Technologies with gradient colors */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.split(',').map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          y: -2
                        }}
                        className={`bg-gradient-to-r ${gradientColors[techIndex % gradientColors.length]} text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-white/20`}
                      >
                        {tech.trim()}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Enhanced Project Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white text-center py-2.5 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                    >
                      <FaExternalLinkAlt size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </motion.a>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 py-2.5 px-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg border border-gray-200"
                  >
                    <FaEye size={14} />
                    Details
                  </motion.button>
                </div>

                {/* Enhanced Creation Date */}
                {project.createdAt && (
                  <div className="mt-4 pt-4 border-t border-gradient-to-r from-pink-200 to-purple-200">
                    <p className="text-xs text-gray-400 text-center">
                      Added: {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Enhanced Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Enhanced Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 max-w-2xl mx-auto border border-purple-100 shadow-xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaRocket className="text-2xl text-white" />
            </div>
          </motion.div>
          <h4 className="text-xl font-bold text-gray-800 mb-3">
            Ready to Start a Project?
          </h4>
          <p className="text-gray-600 mb-4">
            Let's work together to bring your ideas to life!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
