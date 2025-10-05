import React, { useState, useRef } from 'react';
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar, ResponsiveContainer } from 'recharts';
import { Thermometer, CloudRain, Wind, Droplets, Sun, Eye, Award, Calendar, MapPin, Sparkles, Download, FileText } from "lucide-react";// Lucide Icons
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import jsPDF from "jspdf";   // 👈 Add this import at the top
import { motion } from "framer-motion";
// import '../App.css';
import Typography from "@mui/material/Typography";
import Results from "../components/Results";
import HeroSection from '../components/HeroSection';
import GetProbabilityForm from "../components/GetProbabilityForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {

  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedParams, setSelectedParams] = useState<string[]>([]);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapCoordinates, setMapCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false); // NEW state for spinner
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  // ---------------- AI INSIGHTS ----------------
  const generateAiInsights = (selectedParams: string[], probabilities: any[]) => {
    let insights: string[] = [];

    selectedParams.forEach(param => {
      const prob = probabilities.find(p =>
        p.condition.toLowerCase().includes(param.toLowerCase())
      );

      if (!prob) return;

      if (param === "temperature") {
        if (prob.probability > 50) {
          insights.push("🌡️ High chance of extreme heat! Stay hydrated and avoid outdoor activities during noon.");
        } else if (prob.probability > 20) {
          insights.push("🌤️ Mild temperatures expected, a pleasant day overall.");
        }
      }

      if (param === "precipitation") {
        if (prob.probability > 50) {
          insights.push("☔ Rain is very likely. Don’t forget your umbrella!");
        } else if (prob.probability > 20) {
          insights.push("🌦️ Slight chance of showers, you might see a rainbow!");
        }
      }

      if (param === "windSpeed") {
        if (prob.probability > 50) {
          insights.push("💨 Strong winds expected. Secure loose objects outside!");
        } else if (prob.probability > 20) {
          insights.push("🍃 Gentle breeze likely, good day for outdoor walks.");
        }
      }

      if (param === "humidity") {
        if (prob.probability > 50) {
          insights.push("💧 Very humid conditions — stay cool and drink plenty of water.");
        } else if (prob.probability > 20) {
          insights.push("🌫️ Moderate humidity, might feel a bit sticky.");
        }
      }

      if (param === "uvIndex") {
        if (prob.probability > 50) {
          insights.push("☀️ High UV index! Don’t forget sunscreen and sunglasses.");
        } else if (prob.probability > 20) {
          insights.push("🌤️ Moderate UV, light protection is enough.");
        }
      }

      if (param === "airQuality") {
        if (prob.probability > 50) {
          insights.push("😷 Poor air quality expected. Avoid outdoor workouts.");
        } else if (prob.probability > 20) {
          insights.push("🌬️ Air quality may be slightly reduced, sensitive groups take care.");
        }
      }

      if (param === "uncomfortable") {
        if (prob.probability > 50) {
          insights.push("🥵 Conditions may feel very uncomfortable. Stay in shade and rest often.");
        } else if (prob.probability > 20) {
          insights.push("🙂 Slightly uncomfortable, but manageable with precautions.");
        }
      }
    });

    if (insights.length === 0) {
      insights.push("✅ Weather looks favorable, enjoy your day!");
    }

    return insights;
  };

  // ---------------- PARAMETERS ----------------
  const weatherParameters = [
    { id: 'temperature', name: 'Temperature', unit: '°F', source: 'GES DISC', dataset: 'MERRA-2 Surface Temperature', icon: Thermometer },
    { id: 'precipitation', name: 'Precipitation', unit: 'mm', source: 'GPM', dataset: 'IMERG Final Precipitation', icon: CloudRain },
    { id: 'windSpeed', name: 'Wind Speed', unit: 'mph', source: 'GES DISC', dataset: 'MERRA-2 Surface Winds', icon: Wind },
    { id: 'humidity', name: 'Humidity', unit: '%', source: 'GES DISC', dataset: 'MERRA-2 Specific Humidity', icon: Droplets },
    { id: 'uvIndex', name: 'UV Index', unit: '', source: 'OMI', dataset: 'Total Ozone Mapping Spectrometer', icon: Sun },
    { id: 'airQuality', name: 'Air Quality', unit: 'AQI', source: 'MODIS', dataset: 'Aerosol Optical Depth', icon: Eye },
    { id: 'uncomfortable', name: 'Very Uncomfortable', unit: 'Index', source: 'Composite', dataset: 'Comfort Index', icon: Award },
  ];

  const nasaHistoricalData = [
    { month: 'Jan', temperature: 35, precipitation: 45, windSpeed: 8, humidity: 65, uvIndex: 3, airQuality: 45 },
    { month: 'Feb', temperature: 38, precipitation: 40, windSpeed: 9, humidity: 62, uvIndex: 4, airQuality: 48 },
    { month: 'Mar', temperature: 48, precipitation: 50, windSpeed: 10, humidity: 60, uvIndex: 5, airQuality: 52 },
    { month: 'Apr', temperature: 58, precipitation: 55, windSpeed: 11, humidity: 58, uvIndex: 6, airQuality: 58 },
    { month: 'May', temperature: 68, precipitation: 60, windSpeed: 10, humidity: 65, uvIndex: 7, airQuality: 65 },
    { month: 'Jun', temperature: 78, precipitation: 55, windSpeed: 9, humidity: 70, uvIndex: 8, airQuality: 72 },
    { month: 'Jul', temperature: 85, precipitation: 50, windSpeed: 8, humidity: 75, uvIndex: 9, airQuality: 78 },
    { month: 'Aug', temperature: 83, precipitation: 55, windSpeed: 8, humidity: 77, uvIndex: 8, airQuality: 75 },
    { month: 'Sep', temperature: 75, precipitation: 60, windSpeed: 9, humidity: 72, uvIndex: 6, airQuality: 68 },
    { month: 'Oct', temperature: 63, precipitation: 55, windSpeed: 10, humidity: 68, uvIndex: 5, airQuality: 62 },
    { month: 'Nov', temperature: 50, precipitation: 50, windSpeed: 11, humidity: 70, uvIndex: 4, airQuality: 55 },
    { month: 'Dec', temperature: 40, precipitation: 45, windSpeed: 10, humidity: 72, uvIndex: 3, airQuality: 48 },
  ];

  const nasaProbabilityData = [
    { condition: 'Very Hot (>90°F)', probability: 25, confidence: 'High', dataSource: 'MERRA-2 (2000-2023)', icon: Thermometer },
    { condition: 'Very Cold (<32°F)', probability: 15, confidence: 'High', dataSource: 'MERRA-2 (2000-2023)', icon: Thermometer },
    { condition: 'Very Wet (>10mm rain)', probability: 40, confidence: 'Medium', dataSource: 'GPM IMERG (2014-2023)', icon: CloudRain },
    { condition: 'Very Windy (>20mph)', probability: 20, confidence: 'Medium', dataSource: 'MERRA-2 (2000-2023)', icon: Wind },
    { condition: 'Very Humid (>80%)', probability: 35, confidence: 'High', dataSource: 'MERRA-2 (2000-2023)', icon: Droplets },
    { condition: 'Very High UV (>8)', probability: 30, confidence: 'Medium', dataSource: 'OMI TOMS (2004-2023)', icon: Sun },
    { condition: 'Poor Air Quality (>150 AQI)', probability: 18, confidence: 'Medium', dataSource: 'MODIS (2000-2023)', icon: Eye },
    { condition: 'Very Uncomfortable (>75 Index)', probability: 28, confidence: 'Medium', dataSource: 'Composite Analysis', icon: Award },
  ];

  const handleParamToggle = (paramId: string) => {
    setSelectedParams(prev =>
      prev.includes(paramId)
        ? prev.filter(id => id !== paramId)
        : [...prev, paramId]
    );
  };

  // ---------------- MAP ----------------
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setMapCoordinates(e.latlng);
        setLocation(`Lat: ${e.latlng.lat.toFixed(2)}, Lon: ${e.latlng.lng.toFixed(2)}`);
      },
    });
    return mapCoordinates ? <Marker position={[mapCoordinates.lat, mapCoordinates.lng]} /> : null;
  };

  // ---------------- SEARCH ----------------
  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredProbabilities = nasaProbabilityData.filter(p => {
        if (selectedParams.includes("temperature") && p.condition.toLowerCase().includes("hot")) return true;
        if (selectedParams.includes("temperature") && p.condition.toLowerCase().includes("cold")) return true;
        if (selectedParams.includes("precipitation") && p.condition.toLowerCase().includes("wet")) return true;
        if (selectedParams.includes("windSpeed") && p.condition.toLowerCase().includes("wind")) return true;
        if (selectedParams.includes("humidity") && p.condition.toLowerCase().includes("humid")) return true;
        if (selectedParams.includes("uvIndex") && p.condition.toLowerCase().includes("uv")) return true;
        if (selectedParams.includes("airQuality") && p.condition.toLowerCase().includes("air")) return true;
        if (selectedParams.includes("uncomfortable") && p.condition.toLowerCase().includes("uncomfortable")) return true;
        return false;
      });

      const resultsData = {
        location,
        date: selectedDate,
        coordinates: mapCoordinates,
        probabilities: filteredProbabilities,
        historical: nasaHistoricalData,
        metadata: {
          timePeriod: "2000-2025",
          resolution: "0.5° × 0.625°",
          lastUpdated: new Date().toISOString().split("T")[0]
        }
      };

      setResults(resultsData);
      setAiInsights(generateAiInsights(selectedParams, nasaProbabilityData));

      setLocation("");
      setSelectedDate("");
      setSelectedParams([]);
      setMapCoordinates(null);
      setLoading(false);

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }, 1500);
  };

  // ---------------- EXPORT ----------------
  const exportData = (format: "csv" | "json" | "pdf") => {
    if (!results) return;

    if (format === "csv") {
      const csvContent =
        "data:text/csv;charset=utf-8," +
        ["Condition,Probability (%)", ...results.probabilities.map((d: { condition: string; probability: number }) => `${d.condition},${d.probability}`)].join("\n");
      const link = document.createElement("a");
      link.href = encodeURI(csvContent);
      link.download = "nasa_weather.csv";
      link.click();
    }

    else if (format === "json") {
      const jsonContent = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(results, null, 2));
      const link = document.createElement("a");
      link.href = jsonContent;
      link.download = "nasa_weather.json";
      link.click();
    }

    else if (format === "pdf") {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("NASA Weather Probability Report", 20, 20);

      doc.text("AI Insights:", 20, 120);
      aiInsights.forEach((insight: string, i: number) => {
        doc.text(`- ${insight}`, 25, 130 + i * 10);
      });
      doc.setFontSize(12);
      doc.text(`Time Period: ${results.metadata.timePeriod}`, 20, 30);
      doc.text(`Resolution: ${results.metadata.resolution}`, 20, 40);
      doc.text(`Last Updated: ${results.metadata.lastUpdated}`, 20, 50);

      doc.text("Probabilities:", 20, 70);
      results.probabilities.forEach((d: { condition: string; probability: number }, i: number) => {
        doc.text(`${d.condition}: ${d.probability}%`, 30, 80 + i * 10);
      });


      doc.save("nasa_weather_report.pdf");
    }
  };













  return (
    <>

      <main className="container-fluid mx-auto">
        <Navbar />

        <HeroSection setShowModal={setShowModal} />

        {showModal && (
          <GetProbabilityForm
            location={location}
            setLocation={setLocation}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedParams={selectedParams}
            handleParamToggle={handleParamToggle}
            isMapVisible={isMapVisible}
            setIsMapVisible={setIsMapVisible}
            mapCoordinates={mapCoordinates}
            setMapCoordinates={setMapCoordinates}
            handleSearch={handleSearch}
            loading={loading}
            showModal={showModal}
            setShowModal={setShowModal}
            weatherParameters={weatherParameters}
          />
        )}

        {/* Results */}

        <div id="results">
          <Results
            results={results}
            aiInsights={aiInsights}
            loading={loading}
            exportData={exportData}
            resultsRef={resultsRef}
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Home;
