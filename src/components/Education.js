import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Dr D.Y. Patil Institute of Technology Pimpri Pune',
    degree: 'Bachelor of Engineering in Computer Engineering',
    years: '2022 - 2026',
    grade: '8.56 CGPA'
  },
  {
    institution: 'Abhishek Arts, Commerce and Science Junior College',
    degree: '12th (HSC)',
    years: '2021 - 2022',
    grade: '80.83%'
  },
  {
    institution: 'City International School',
    degree: '10th (CBSE)',
    years: '2019 - 2020',
    grade: '89.4%'
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mb-16"
    >
      <h3 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 inline-block">Education</h3>
      <div className="space-y-6">
        {education.map(({ institution, degree, years, grade }) => (
          <div key={institution} className="bg-white p-6 rounded shadow">
            <h4 className="font-bold text-xl">{institution}</h4>
            <p className="italic">{degree}</p>
            <p>{years}</p>
            <p>Grade/CGPA: {grade}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
