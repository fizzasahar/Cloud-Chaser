import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaUser, FaSignOutAlt, FaEnvelope } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";
import profile from "../assets/Profile.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Profile({ data }) {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);



  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.div whileHover={{ scale: 1.05 }} className="relative group">
        <button
          onClick={toggleDrawer(true)}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-semibold 
            bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg 
            hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
        >
          <FaUser className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </motion.div>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: { xs: "80vw", sm: 300 }, // Responsive drawer width
            p: 3,
            textAlign: "center",
            position: "relative",
            height: "100%",
            background:
              "linear-gradient(135deg, #fdfdfd 0%, #e0f2ff 50%, #fff7e6 100%)",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
          className="dark:bg-slate-900"
        >
          {/* Top Section (Title + Close Button) */}
          <div className="flex justify-between items-center mb-4">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
            >
              Profile
            </motion.h2>

            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: "#555" }}
              className="dark:text-gray-300 hover:text-pink-500 transition-all"
            >
              <CloseIcon />
            </IconButton>
          </div>

          {/* Middle Section (Avatar + Info) */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex justify-center mb-4 relative"
            >
              <Avatar
                src={profile}
                alt="Profile"
                sx={{
                  width: { xs: 100, sm: 150 }, // Responsive avatar size
                  height: { xs: 100, sm: 150 },
                }}
                className="shadow-lg border-4 border-blue-400"
              />
              <span className="absolute bottom-1 right-3 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white shadow-md"></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 px-2"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                {user?.name || data?.name || "Guest User"}
              </h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{user?.email || data?.email || "No email available"}</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section (Logout Button) */}
          <div className="pb-4 px-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/logout"
                onClick={toggleDrawer(false)}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl 
                  bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold 
                  hover:from-blue-600 hover:to-blue-400 transition-all duration-300 shadow-md group text-sm sm:text-base"
              >
                <FaSignOutAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Logout
              </Link>
            </motion.div>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
