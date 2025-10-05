import React, { RefObject, useEffect, useState } from "react";
import {
  Sparkles, Calendar, MapPin, Download, FileText, Brain, Lightbulb
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis,
  Tooltip, Legend, Bar, LineChart, Line
} from "recharts";
import { motion } from "framer-motion";
import RightGif from "../assets/right.gif";

// Custom hook for dark mode (avoids repeated DOM queries)
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const updateTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return isDark;
};

interface ResultsProps {
  results: any;
  aiInsights: string[];
  loading: boolean;
  exportData: (format: "csv" | "json" | "pdf") => void;
  resultsRef: RefObject<HTMLDivElement | null>;
}

const Results: React.FC<ResultsProps> = ({
  results,
  aiInsights,
  loading,
  exportData,
  resultsRef,
}) => {
  const isDark = useDarkMode();

  // Safe data access with optional chaining
  const safeResults = results || {};
  const probabilitiesData = safeResults.probabilities || [];
  const historicalData = safeResults.historical || [];

  if (loading) {
    return (
      <div ref={resultsRef} className="w-full px-4 py-8"> {/* Added padding for mobile */}
        <div className="text-center my-6">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Fetching NASA Data...</p>
        </div>
      </div>
    );
  }

  if (!safeResults || probabilitiesData.length === 0) {
    return (
      <div ref={resultsRef} className="w-full px-4 py-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">No data available yet.</p>
      </div>
    );
  }

  return (
    <div ref={resultsRef} className="w-full px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-orange-500 to-yellow-500  dark:bg-orange-900/80 backdrop-blur-xl rounded-lg p-4 sm:p-6 mt-3 mb-3 shadow-lg border border-gray-200/50 dark:border-slate-700/50"> {/* Responsive padding */}

      <motion.section
        initial={{ opacity: 0, y: 50 }} // neeche chhupa hoga
        whileInView={{ opacity: 1, y: 0 }} // dikhte hi upar slide karega
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // 20% visible hote hi trigger hoga
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-lg p-4 sm:p-6 mb-8 shadow-lg border border-gray-200/50 dark:border-slate-700/50"
      >
        <h1  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500  mt-3 mb-3 to-blue-500 bg-clip-text text-transparent">
          Weather Probability Results
        </h1>
   {/* Responsive Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-24 sm:w-96 sm:h-96 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-24 h-24 sm:w-96 sm:h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-24 h-24 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Enhanced AI Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-xl mb-8 bg-gradient-to-br from-blue-500/70 via-white/70 to-orange-500/70 dark:from-blue-900/30 dark:via-slate-800/50 dark:to-orange-900/30 border border-blue-200/40 dark:border-blue-700/40 shadow-xl"
        >

          <div className="relative z-10 p-6 sm:p-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Text */}
              <div className="space-y-4">
                <h1 className=" text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Insights
                </h1>
                <div className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-orange-500" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Key Findings
                  </h4>
                </div>

                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-300/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-95 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30">
                  <ul className="space-y-3">
                    {aiInsights.map((insight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-start"
                      >

                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {insight}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                >
                  <Sparkles className="w-4 h-4 mr-1 text-blue-500" />
                  <span>Powered by advanced weather prediction algorithms</span>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-xl opacity-30"></div>
                 
                  <img
                    src={RightGif}
                    alt="AI insights illustration"
                    className="relative w-72 h-64 sm:w-84 sm:h-84 object-contain rounded-lg "
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metadata - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-white-500/70 via-white/70 to-blue-200/70 dark:bg-slate-800/70 backdrop-blur-xl shadow-md rounded-xl p-6 border border-gray-300/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30"
          >
            <h4 className="font-semibold mb-2 flex items-center text-blue-500 dark:text-blue-300">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
              Data Coverage
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{safeResults.metadata?.timePeriod || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">MERRA-2, GPM, MODIS</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-white-500/70 via-white/70 to-orange-200/70  dark:bg-slate-800/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-300/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-900/30"
          >
            <h4 className="font-semibold mb-2 flex items-center text-orange-500 dark:text-orange-400">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
              Resolution
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{safeResults.metadata?.resolution || 'N/A'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">~55km at equator</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-white-500/70 via-white/70 to-yellow-200/70  dark:bg-slate-800/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-300/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-900/30"
          >
            <h4 className="font-semibold mb-2 flex items-center text-yellow-500 dark:text-yellow-400">
              <Sparkles className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
              Data Quality
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">NASA Validated</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Peer-reviewed algorithms</p>
          </motion.div>
        </div>

        {/* Charts - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-400/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/30"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Probability of Extreme Conditions
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={probabilitiesData} aria-label="Bar chart of weather probabilities">
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#475569' : '#e5e7eb'} strokeOpacity={0.5} />
                <XAxis dataKey="condition" tick={{ fill: isDark ? '#d1d5db' : '#4b5563' }} />
                <YAxis tick={{ fill: isDark ? '#d1d5db' : '#4b5563' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar
                  dataKey="probability"
                  fill="url(#colorGradient)"
                  name="Probability (%)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-md rounded-xl p-6 border border-gray-400/50 dark:border-gray-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-900/30"
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Historical Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalData} aria-label="Line chart of historical weather trends">
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#475569' : '#e5e7eb'} strokeOpacity={0.5} />
                <XAxis dataKey="month" tick={{ fill: isDark ? '#d1d5db' : '#4b5563' }} />
                <YAxis tick={{ fill: isDark ? '#d1d5db' : '#4b5563' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temperature"
                  stroke="#ef4444"
                  name="Temperature (°F)"
                  strokeWidth={2}
                  dot={{ fill: '#ef4444', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="precipitation"
                  stroke="#3b82f6"
                  name="Precipitation (mm)"
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Export Buttons - Stack on mobile */}
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 font-semibold">
          {/* CSV Export */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative">
            <button
              onClick={() => exportData("csv")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold 
        bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg min-w-[120px]
        hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 
        transform hover:-translate-y-0.5"
              aria-label="Export data as CSV"
            >
              <Download className="w-4 h-4 transition-all duration-300 
        group-hover:scale-110 group-hover:rotate-12" />
              <span className="transition-all duration-300">CSV</span>
            </button>
          </motion.div>

          {/* JSON Export */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative">
            <button
              onClick={() => exportData("json")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold 
        bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg min-w-[120px]
        hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 
        transform hover:-translate-y-0.5"
              aria-label="Export data as JSON"
            >
              <Download className="w-4 h-4 transition-all duration-300 
        group-hover:scale-110 group-hover:rotate-12" />
              <span className="transition-all duration-300">JSON</span>
            </button>
          </motion.div>

          {/* PDF Export */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative">
            <button
              onClick={() => exportData("pdf")}
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold 
        bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg min-w-[140px]
        hover:from-purple-600 hover:to-pink-600 transition-all duration-300 
        transform hover:-translate-y-0.5"
              aria-label="Export data as PDF report"
            >
              <FileText className="w-4 h-4 transition-all duration-300 
        group-hover:scale-110 group-hover:rotate-12" />
              <span className="transition-all duration-300">PDF Report</span>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Results;