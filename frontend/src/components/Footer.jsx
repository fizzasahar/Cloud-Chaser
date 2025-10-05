import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaInfoCircle, FaHashtag, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "/CLOUDCHASERWEBLOGO.png"; // your transparent logo

const Footer = () => {
  const nasaLinks = [
    { name: "GES DISC OPeNDAP", url: "https://disc.gsfc.nasa.gov/information/tools?title=OPeNDAP%20and%20GDS" },
    { name: "Giovanni", url: "https://giovanni.gsfc.nasa.gov/giovanni/" },
    { name: "Earthdata Search", url: "https://search.earthdata.nasa.gov/search" },
    { name: "Worldview", url: "https://worldview.earthdata.nasa.gov/" }
  ];

  const challengeInfo = [
    "2025 NASA Space Apps Challenge",
    "Will It Rain On My Parade?",
    "Challenge #19",
    "Intermediate Difficulty"
  ];

  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com/spaceapps", label: "Twitter" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/showcase/nasa-space-apps-challenge/", label: "LinkedIn" },
    { icon: FaGithub, url: "https://github.com/nasa/spaceapps", label: "GitHub" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }} // neeche chhupa hoga
      whileInView={{ opacity: 1, y: 0 }} // dikhte hi upar slide karega
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // 20% visible hote hi trigger hoga
      className="bg-[#0d1117] text-gray-300 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 flex flex-col  sm:items-start ">
          <img
            src={logo}
            alt="Cloud Chaser"
            className="w-32 sm:w-36 md:w-40 lg:w-48 object-contain"
          />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg  sm:text-left">
            Tracking clouds, rain & sun to make your weather insights fun.
          </p>
        </motion.div>

        {/* NASA Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}>
          <h4 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            <FaRocket className="text-blue-400 flex-shrink-0" aria-hidden="true" /> NASA Data Resources
          </h4>
          <ul className="space-y-2 text-sm">
            {nasaLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Challenge Info */}
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}>
          <h4 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            <FaInfoCircle className="text-orange-400 flex-shrink-0" aria-hidden="true" /> Challenge Info
          </h4>
          <ul className="space-y-2 text-sm">
            {challengeInfo.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 mt-1 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}>
          <h4 className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            <FaHashtag className="text-blue-400 flex-shrink-0" aria-hidden="true" /> Connect
          </h4>
          <div className="flex gap-4 mb-4">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full text-blue-500 border border-blue-500 hover:border-orange-500 hover:text-orange-500 transition-all"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-gray-500 max-w-xs sm:max-w-md">
            NASA does not endorse any non-U.S. Government entity and is not responsible for information contained on non-U.S. Government websites.
          </p>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        © 2025 Cloud Chasers • Built for NASA Space Apps Challenge
      </motion.div>
    </motion.footer >
  );
};

export default Footer;
