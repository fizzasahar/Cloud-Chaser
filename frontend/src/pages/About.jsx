import React from 'react';
import { motion } from "framer-motion";
import {
    Globe,
    Satellite,
    Database,
    Shield,
    Users,
    Target,
    Zap,
    Cloud,
    BarChart3,
    Cpu
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    const teamMembers = [
        {
            name: "Fizza Sahar",
            role: "Lead Full Stack & Data Integration",
            description: "Built the interactive UI, map integrations, and data visualizations. Responsible for frontend, Backend and Database architecture, performance tuning, and NASA dataset integration.",
            expertise: ["React", "TypeScript", "Map Integration", "Data Visualization", "API Integration", "Backend Development", "Database Management"]
        },
        {
            name: "Bushra Sehar",
            role: "Lead Design & Domain",
            description: "Responsible for UI Designing, visual storytelling, and context-aware recommendations (e.g.,Insigths tips for outdoor activities).",
            expertise: ["UI Design", "Visual Storytelling", "Data Research", "Content Management", "ConTent Writing", "Domain Expertise"]
        }
    ];

    const techStack = [
        {
            category: "Frontend",
            items: ["React with JavaScript or TypeScript", "Tailwind", "Material UI", "Framer Motion", "Recharts/Chart.js"],
            // Blue-Cyan (Existing theme color)
            icon: <Zap className="w-6 h-6" />,
            color: "  bg-gradient-to-r from-orange-500 to-yellow-500 "
        },
        {
            category: "Backend & Data",
            items: ["Python", "MongoDB", "Express JS", "Node JS"],
            // A different Blue-toned gradient
            icon: <Database className="w-6 h-6" />,
            color: " bg-gradient-to-r from-orange-500 to-yellow-500 "
        },
        {
            category: "Infrastructure",
            items: ["Vercel", "Railway", "GitHub CI/CD", "Godaddy"],
            // Another Blue-toned gradient
            icon: <Cpu className="w-6 h-6" />,
            color: " bg-gradient-to-r from-orange-500 to-yellow-500 "
        },
        {
            category: "Data Sources",
            items: ["NASA Earth Data", "MERRA-2", "GPM", "MODIS", "Hydrology"],
            // A third Blue-toned gradient (e.g., to replace the old orange one)
            icon: <Satellite className="w-6 h-6" />,
            color: " bg-gradient-to-r from-orange-500 to-yellow-500 "
        }
    ];

    const missionMetrics = [
        { value: "99%", label: "Data Accuracy", description: "NASA-validated datasets" },
        { value: "55km", label: "Spatial Resolution", description: "At equator" },
        { value: "Real-time", label: "Updates", description: "Continuous monitoring" },
        { value: "1000+", label: "Parameters", description: "Weather variables tracked" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-slate-900 dark:to-blue-900">
            <Navbar />
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 dark:bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky-200 dark:bg-yellow-800 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-blue-200 dark:border-blue-700 mb-8"
                        >
                            <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                Trusted Weather Probabilities
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Cloud Chaser
                            <span className="block text-transparent bg-clip-text mt-2  bg-gradient-to-r from-orange-500 to-yellow-500">
                                Weather Probability Provider
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
                        >
                            A practical, data-first weather planning tool that turns reliable open data into clear, decision-ready forecasts.
                        </motion.p>

                        {/* Mission Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                             whileHover={{ scale: 1.05 }}
                            className=" bg-gradient-to-r from-blue-500 to-cyan-500 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-100 dark:border-blue-800 max-w-4xl mx-auto"
                        >
                            <Target className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
                                Our Mission
                            </h3>
                            <p className="text-lg text-gray-200 dark:text-gray-300 leading-relaxed">
                                Provide decision-ready weather information — not just numbers, but clear probabilities,
                                confidence levels, and short recommendations so people can plan better and safer.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What It Does Section */}
            <section className="py-20 b bg-gradient-to-r from-orange-500/50 to-yellow-500/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            What Cloud Chaser Does
                        </h2>
                        <p className="text-xl   bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent dark:text-gray-300 max-w-3xl mx-auto">
                            Transforming complex weather data into actionable insights for your outdoor plans
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Location Intelligence",
                                description: "Interactive map selection with precise location targeting"
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "Probability Forecasting",
                                description: "Statistical models with confidence intervals and risk assessment"
                            },
                            {
                                icon: <Cloud className="w-8 h-8" />,
                                title: "Multi-Parameter Analysis",
                                description: "Temperature, precipitation, wind, humidity, and visibility tracking"
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Decision Support",
                                description: "Clear recommendations for outdoor activity planning"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16   bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold   bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent dark:text-white mb-4">
                            Built with Modern Technology
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Enterprise-grade stack for reliable, scalable weather probabilities
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                 whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {tech.category}
                                </h3>
                                <ul className="space-y-2">
                                    {tech.items.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center text-gray-600 dark:text-gray-300"
                                        >
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20   bg-gradient-to-r from-orange-500/50 to-yellow-500/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-4xl font-bold   bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent dark:text-white mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-300">
                            Passionate experts building the future of weather probabilities provider
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-800"
                            >
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-orange-500 dark:text-blue-400 font-medium">
                                        {member.role}
                                    </p>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {member.description}
                                </p>

                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                        Expertise
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="px-3 py-1   bg-gradient-to-r from-orange-500/30 to-yellow-500/30  dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Metrics */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold   bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent dark:text-white mb-4">
                            Data Integrity & Impact
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Transparent, reliable weather intelligence you can trust
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {missionMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-white mb-2">
                                        {metric.value}
                                    </div>
                                    <div className="text-white font-semibold">
                                        {metric.label}
                                    </div>
                                    <div className="text-orange-300 text-sm mt-2">
                                        {metric.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Data Transparency Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                         whileHover={{ scale: 1.05 }}
                        className="mt-12 text-center"
                    >
                        <div className="  bg-gradient-to-r from-blue-500/30 to-cyan-500/30 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-blue-100 dark:border-blue-800 max-w-2xl mx-auto">
                            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Data Transparency
                            </h4>
                            <p className="text-gray-500 dark:text-gray-300">
                                Every prediction shows a confidence score and explanation of data sources used,
                                so users understand why recommendations are made.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20   bg-gradient-to-r from-orange-500 to-yellow-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Plan with Confidence?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Experience weather intelligence that transforms complex data into clear, actionable recommendations for your outdoor activities.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/'}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Start Planning Now
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
            <Footer />
        </div>
    );
};

export default About;