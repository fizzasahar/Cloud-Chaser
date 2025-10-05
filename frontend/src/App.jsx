import React, { useState, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './pages/Logout';
import Home from "./pages/Home"
import NasaDataResources from "./pages/NasaDataResources";
import About from './pages/About.jsx';
import LoginSignup from './pages/LoginSignup';

const CloudChaser = () => {


  return (



    <div className="min-h-screen bg-background text-foreground">




      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"   // yahan se beautiful dark-light look aayega
      />



      <Routes>
        {/* Redirect to login if the path is root */}
        <Route path="/" element={<Navigate to="/Home" />} />

        {/* Public Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/loginregister" element={<LoginRegister />} /> */}
        {/* <Route path="/Register" element={<Register />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/Resources" element={<NasaDataResources />} />
        <Route path="/About" element={<About />} />
        {/* Logout Route */}
        <Route path="/logout" element={<Logout />} />
      </Routes>



    </div>
  );
};

export default CloudChaser;
