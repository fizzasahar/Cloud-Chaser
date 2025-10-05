import React from "react";
import {
  ChevronRightIcon,
  CalendarIcon,
  MapPinIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline"; // Assuming Heroicons are installed; if not, use react-icons or inline SVGs
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import '../App.css';

const NasaDataResources: React.FC = () => {
  const dataSources = [
    {
      name: "GES DISC OPeNDAP",
      url: "https://disc.gsfc.nasa.gov/information/tools?title=OPeNDAP%20and%20GDS",
      description: "Multi-decadal Earth science data access",
      icon: "🌍" // Emoji fallback; replace with Heroicon if preferred
    },
    {
      name: "Giovanni",
      url: "https://giovanni.gsfc.nasa.gov/giovanni/",
      description: "Interactive visualization and analysis",
      icon: "📊"
    },
    {
      name: "Data Rods for Hydrology",
      url: "https://disc.gsfc.nasa.gov/information/tools?title=Hydrology%20Data%20Rods",
      description: "Time-series hydrological data",
      icon: "💧"
    },
    {
      name: "Worldview",
      url: "https://worldview.earthdata.nasa.gov/",
      description: "Global imagery and data visualization",
      icon: "🛰️"
    }
  ];

  const dataCoverage = [
    {
      label: "Time Period",
      value: "2000-2023",
      icon: CalendarIcon
    },
    {
      label: "Spatial Resolution",
      value: "0.5° × 0.625°",
      icon: MapPinIcon
    },
    {
      label: "Data Refresh",
      value: "Monthly Updates",
      icon: ArrowPathIcon
    }
  ];

  return (
    <>

      <Navbar />
      <section className=" bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-slate-900 dark:to-blue-900 min-h-screen py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold  bg-white bg-clip-text text-transparent mb-4 animate-fade-in">
              NASA Data Resources
            </h2>
            <p className="text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
              Explore powerful NASA tools and datasets for Earth science and satellite observations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column: Primary Data Sources */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-white flex items-center gap-2">
                <span className="tex-blue-500">🚀</span> Primary Data Sources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dataSources.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                  >
                    {/* Background gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>

                    {/* Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-500 font-medium group-hover:underline">
                        Learn More
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Data Coverage */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-white flex items-center gap-2">
                <span className="text-green-500">📈</span> Data Coverage
              </h3>
              <div className="space-y-4">
                {dataCoverage.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                          <IconComponent className="w-6 h-6 text-blue-500 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide  ">
                            {item.label}
                          </p>
                          <p className="text-2xl font-bold text-gray-800 dark:text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section: Data Access Methods */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-purple-500">🔗</span> Data Access Methods
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              This application leverages NASA's public APIs to deliver cutting-edge satellite data. Dive into{" "}
              <a
                href="https://disc.gsfc.nasa.gov/information/tools?title=OPeNDAP%20and%20GDS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-all duration-200 hover:no-underline"
              >
                OPeNDAP protocols
              </a>
              ,{" "}
              <a
                href="https://giovanni.gsfc.nasa.gov/giovanni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-all duration-200 hover:no-underline"
              >
                Giovanni visualization services
              </a>
              , and{" "}
              <a
                href="https://search.earthdata.nasa.gov/search"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-all duration-200 hover:no-underline"
              >
                Earthdata Search APIs
              </a>
              . Developers can also explore{" "}
              <a
                href="https://disc.gsfc.nasa.gov/information/howto?page=1&dataTools=Python"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 transition-all duration-200 hover:no-underline"
              >
                Python tools
              </a>{" "}
              for seamless integration.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore NASA APIs
              </button>
              <button className="flex-1 bg-transparent border-2 border-blue-600 hover:border-orange-600 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Custom Animations - Add this to your global CSS or use Tailwind's built-in */}
        <style>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.6s ease-in-out forwards; }
`}</style>

      </section>
      <Footer />
    </>
  );
};

export default NasaDataResources;
