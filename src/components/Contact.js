import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaUser, FaComments, FaRocket, FaHeart } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'piyushunde87@gmail.com',
      link: 'mailto:piyushunde87@gmail.com',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8805791980',
      link: 'tel:+918805791980',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/piyush-unde-6b1a07287/',
      color: 'hover:bg-blue-600',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/Piyush3430',
      color: 'hover:bg-gray-800',
      bgColor: 'from-gray-700 to-gray-800'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/',
      color: 'hover:bg-blue-400',
      bgColor: 'from-blue-400 to-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mb-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Let's Connect
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        {/* Enhanced Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaUser className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600" />
              </motion.div>
              Get In Touch
            </h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Enhanced Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`p-4 bg-gradient-to-br ${info.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50`}
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <div>
                    <h5 className="font-semibold text-gray-800">{info.title}</h5>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div>
            <h5 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FaHeart className="text-pink-500" />
              Follow Me
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 bg-gradient-to-r ${social.bgColor} ${social.color} text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20`}
                  title={social.name}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-purple-100 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 blur-xl" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-xl" />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaComments className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600" />
            </motion.div>
            <h4 className="text-2xl font-bold text-gray-800">Send Message</h4>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                placeholder="Tell me more about your project or inquiry..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="group-hover:rotate-12 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Enhanced Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: 2 }}
                  >
                    ✅
                  </motion.div>
                  <span className="font-medium">Thank you! Your message has been sent successfully. I'll get back to you soon!</span>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Enhanced Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-3xl p-8 max-w-3xl mx-auto border border-purple-100 shadow-xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaRocket className="text-2xl text-white" />
            </div>
          </motion.div>
          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Something Amazing?
          </h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next big project. I'm excited to bring your ideas to life with cutting-edge technology and creative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Let's Build Together! 🚀
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
