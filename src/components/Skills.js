import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaGlobe, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const skills = {
  Languages: [
    { name: 'C++', level: 90, icon: '⚡', color: 'from-blue-500 to-cyan-600' },
    { name: 'Python', level: 85, icon: '🐍', color: 'from-yellow-500 to-orange-600' },
    { name: 'JavaScript', level: 80, icon: '🟨', color: 'from-amber-500 to-yellow-600' }
  ],
  Frontend: [
    { name: 'HTML', level: 95, icon: '🌐', color: 'from-orange-500 to-red-600' },
    { name: 'CSS', level: 90, icon: '🎨', color: 'from-blue-500 to-indigo-600' },
    { name: 'Tailwind CSS', level: 85, icon: '💨', color: 'from-cyan-500 to-blue-600' },
    { name: 'ReactJS', level: 80, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 75, icon: '🚀', color: 'from-purple-500 to-pink-600' }
  ],
  Backend: [
    { name: 'Node.js', level: 80, icon: '🟢', color: 'from-green-500 to-emerald-600' },
    { name: 'Express.js', level: 75, icon: '📡', color: 'from-gray-500 to-slate-600' }
  ],
  Databases: [
    { name: 'MySQL', level: 85, icon: '🐬', color: 'from-blue-500 to-indigo-600' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-400 to-teal-600' },
    { name: 'PL/SQL', level: 75, icon: '🗄️', color: 'from-purple-500 to-violet-600' }
  ],
  Tools: [
    { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-purple-600' },
    { name: 'Git', level: 85, icon: '📝', color: 'from-orange-500 to-red-600' },
    { name: 'GitHub', level: 90, icon: '🐙', color: 'from-gray-700 to-black' }
  ]
};

const categoryIcons = {
  Languages: FaCode,
  Frontend: FaGlobe,
  Backend: FaLaptopCode,
  Databases: FaDatabase,
  Tools: FaTools
};

const categoryColors = {
  Languages: 'from-blue-600 via-cyan-600 to-blue-700',
  Frontend: 'from-purple-600 via-pink-600 to-purple-700',
  Backend: 'from-green-600 via-emerald-600 to-green-700',
  Databases: 'from-indigo-600 via-blue-600 to-indigo-700',
  Tools: 'from-orange-600 via-red-600 to-orange-700'
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across different domains.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {Object.entries(skills).map(([category, skillList]) => {
          const IconComponent = categoryIcons[category];
          const categoryColor = categoryColors[category];
          
          return (
            <motion.div
              key={category}
              variants={categoryVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform-gpu"
            >
              {/* Enhanced Category Header with gradient */}
              <div className={`bg-gradient-to-r ${categoryColor} text-white p-6 relative overflow-hidden`}>
                {/* Animated background pattern */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-10 rounded-full"
                />
                
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={28} />
                  </motion.div>
                  <h4 className="text-xl font-bold">{category}</h4>
                </div>
                <p className="text-blue-100 text-sm mt-2 relative z-10">
                  {skillList.length} skill{skillList.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Skills List with enhanced styling */}
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="group/skill relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <motion.span 
                            className="text-lg"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill.icon}
                          </motion.span>
                          <span className="font-medium text-gray-700 group-hover/skill:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span 
                          className="text-sm font-semibold text-gray-500"
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Enhanced Skill Bar with gradient */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full transition-all duration-500 shadow-lg ${
                            hoveredSkill === skill.name
                              ? `bg-gradient-to-r ${skill.color}`
                              : `bg-gradient-to-r ${skill.color}`
                          }`}
                        />
                      </div>

                      {/* Animated glow effect on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredSkill === skill.name ? 1 : 0 
                        }}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 pointer-events-none"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating particles effect */}
              {hoveredCategory === category && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(5)].map((_, i) => (
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
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Enhanced Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto border border-pink-100 shadow-xl">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaLightbulb className="text-3xl text-white" />
            </div>
          </motion.div>
          
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Always Learning & Growing
          </h4>
          <p className="text-gray-600 mb-6">
            I'm constantly expanding my skill set and exploring new technologies to stay current with industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
              { name: 'GraphQL', color: 'from-pink-500 to-rose-600' },
              { name: 'Docker', color: 'from-blue-400 to-cyan-600' },
              { name: 'AWS', color: 'from-orange-500 to-amber-600' },
              { name: 'Machine Learning', color: 'from-purple-500 to-violet-600' },
              { name: 'DevOps', color: 'from-green-500 to-emerald-600' }
            ].map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -5
                }}
                className={`bg-gradient-to-r ${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
