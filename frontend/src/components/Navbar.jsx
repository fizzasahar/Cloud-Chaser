import React, { useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBook,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: FaHome, href: "/Home" },
  { name: "About", icon: FaInfoCircle, href: "/About" },
  { name: "Resources", icon: FaBook, href: "/Resources" }
];

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false);

  // Variants for mobile menu container with staggered children
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, height: 0, y: -10 }
  };

  // Variants for each mobile menu item
  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-slate-700/50"
    >
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-4 relative">


          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img src="/CLOUDCHASERWEBLOGO.png" alt="logo" className="h-13" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-1 lg:gap-2" aria-label="Primary navigation">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300"
                    aria-label={item.name}
                  >
                    {/* Icon */}
                    <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />

                    {/* Text */}
                    <span className="bg-gradient-to-r from-blue-600 via-orange-400 to-yellow-500 bg-clip-text text-transparent group-hover:bg-none group-hover:text-blue-700 dark:group-hover:text-orange-300">
                      {item.name}
                    </span>

                    {/* Hover background effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-orange-400/10 to-yellow-400/10 rounded-lg -z-10 scale-0 group-hover:scale-100 transition-transform origin-center duration-300"></span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Auth/Profile Section */}
            {!user ? (
              <div className="flex items-center gap-3 lg:gap-4">
                {/* Login Button */}
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <Link
                    to="/login"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold 
               bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg 
               hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 
               transform hover:-translate-y-0.5"
                    aria-label="Login"
                  >
                    <FaSignInAlt className="w-4 h-4 transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:rotate-90" />
                    <span className="transition-all duration-300 ">
                      Login
                    </span>
                  </Link>
                </motion.div>


                {/* Signup Button */}
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <Link
                    to="/signup"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold 
               bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg 
               hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 
               transform hover:-translate-y-0.5"
                    aria-label="Sign Up"
                  >
                    <FaUserPlus className="w-4 h-4 transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:rotate-35"  />
                    <span className="transition-all duation-300 ">
                      Sign Up
                    </span>
                  </Link>
                </motion.div>
              </div>
            ) : (
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4">
                <Profile data={user} />
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 0 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6 text-yellow-400" />
              ) : (
                <FaBars className="w-6 h-6 text-blue-600" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-500 px-4 py-6 space-y-4 border-t border-white/20">
              <motion.nav
                aria-label="Mobile primary navigation"
                className="space-y-3"
              >
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      variants={mobileMenuItemVariants}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all duration-300"
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </motion.nav>

              {/* Mobile Auth/Profile Section */}
              {!user ? (
                <div className="space-y-3 pt-4 border-t border-white/20">
                  {/* Login Button (Mobile Menu) */}
                  <motion.div whileHover={{ scale: 1.05 }} className="relative w-full">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="group block w-full text-center flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold 
               bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg 
               hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                      aria-label="Login"
                    >
                      <FaSignInAlt className="w-4 h-4 transition-all duration-300 
                            group-hover:scale-110 
                            group-hover:rotate-90" />
                      <span className="transition-all duration-300">Login</span>
                    </Link>
                  </motion.div>

                  {/* Signup Button (Mobile Menu) */}
                  <motion.div whileHover={{ scale: 1.05 }} className="relative w-full">
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="group block w-full text-center flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold 
               bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg 
               hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                      aria-label="Sign Up"
                    >
                      <FaUserPlus className="w-4 h-4 transition-all duration-300 
                           group-hover:scale-110 
                           group-hover:rotate-[35deg]" />
                      <span className="transition-all duration-300">Sign Up</span>
                    </Link>
                  </motion.div>

                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="pt-4 border-t border-white/20 space-y-3"
                >
                  <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <Profile data={user} />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
