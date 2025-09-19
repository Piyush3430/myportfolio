import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">About Me</h3>
      <p>
        I am a computer engineering student at Dr. D.Y. Patil Institute of Technology, Pune.
        Skilled in C++, Python, JavaScript, ReactJS, Next.js, Node.js, Express.js, MySQL, and MongoDB.
        Enthusiastic about full-stack development and building scalable, performant applications.
      </p>
    </motion.section>
  );
};

export default About;
