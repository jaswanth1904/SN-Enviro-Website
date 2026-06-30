import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Activity, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

// Analyzer Database
const analyzerData = {
    so2: {
        id: "so2",
        name: "Ambient Sulphur Dioxide (SO₂) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures trace sulfur dioxide using UV light excitation at 214nm, filtering out atmospheric interferents.",
        specs: [
            { label: "Principle", value: "Pulsed UV Fluorescence" },
            { label: "Measurement", value: "SO₂ in Ambient Air" },
            { label: "Display", value: "Digital" },
            { label: "Ranges", value: "Auto ranging 0 - 200 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.5 ppb" },
            { label: "Zero Drift", value: "< 1 ppb/24 Hrs. with automatic zero compensation" },
            { label: "Span Drift", value: "<1 ppb in 24 hrs." },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response Time", value: "120 sec or less" },
            { label: "Span check facility", value: "Built in permeation bench" },
            { label: "Calibration", value: "Multi-calibration section & General Specifications (4.1.7 to 4.1.9)" },
            { label: "Analog Output", value: "0 – 1 V, 0 – 10 V, 2 – 20 mA / 4 – 20 mA" },
            { label: "Digital Output", value: "Multiple drop RS 232, USB port /TCP/IP, Ethernet" }
        ]
    },
    nox: {
        id: "nox",
        name: "Ambient Oxides of Nitrogen (NO-NO₂-NOx) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures nitric oxide and nitrogen oxides through the light-emitting reaction of NO with ozone.",
        specs: [
            { label: "Principle", value: "Chemiluminiscence" },
            { label: "Measurement", value: "NO-NO₂-NOx in Ambient Air" },
            { label: "Display", value: "Digital" },
            { label: "Ranges", value: "Auto ranging 0-2000 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.5 ppb" },
            { label: "Zero Drift", value: "< 1 ppb/24 Hrs." },
            { label: "Span Drift", value: "< 2% in 15 days of full scale" },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response Time", value: "120 sec or less" },
            { label: "Span Check", value: "Built in permeation bench" },
            { label: "Calibration", value: "Multi-calibration section & General Specifications (4.1.7 to 4.1.9)" },
            { label: "Analog Output", value: "0 – 1 V, 0 – 10 V, 2 – 20 mA / 4 – 20 mA" },
            { label: "Digital Output", value: "Multi drop RS 232 port, USB port /TCP/IP, Ethernet" }
        ]
    },
    nh3: {
        id: "nh3",
        name: "Ambient Ammonia (NH₃) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures ambient ammonia using chemical conversion and subsequent chemiluminescence.",
        specs: [
            { label: "Principle", value: "Chemiluminiscence (NH₃ conversion to NO by oxidation. NO₂ also converted to NO. The difference obtained by measuring NO in output of two sample stream is equal to NH₃)" },
            { label: "Measurement", value: "NH₃ in Ambient Air" },
            { label: "Display", value: "Digital" },
            { label: "Ranges", value: "Auto ranging 0-1000 ppb" },
            { label: "Lower Detectable Limit", value: "1 ppb" },
            { label: "Noise Level", value: "0.2% of reading" },
            { label: "Zero Drift", value: "< 5 ppb /24 Hrs." },
            { label: "Span Drift", value: "< 2% in 15 days of full scale" },
            { label: "NH3/NO converter", value: "Quartz at approx. 1000°C" },
            { label: "Linearity", value: "± 1% of full scale" },
            { label: "Response time", value: "180 second" },
            { label: "Rise / fall Time", value: "< 30 Sec (95% of the final value)" },
            { label: "Span Check facility", value: "Built in permeation bench" },
            { label: "Calibration", value: "Multi-calibration section & General Specifications (4.1.7 to 4.1.9)" },
            { label: "Analog Output", value: "0 – 1 V, 0 – 10 V, 2 – 20 mA /4 – 20 mA and Digital output" },
            { label: "Digital Output", value: "Multi drop RS 232 port, USB port /TCP/IP, Ethernet" }
        ]
    },
    co: {
        id: "co",
        name: "Ambient Carbon Monoxide (CO) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Utilizes gas filter correlation spectroscopy to eliminate carbon dioxide and water vapor interference.",
        specs: [
            { label: "Principle", value: "Non Dispersive Infra-Red (NDIR) with Gas Filter Correlation" },
            { label: "Measurement", value: "CO in Ambient Air" },
            { label: "Display", value: "Digital" },
            { label: "Ranges", value: "Auto ranging 0 - 100 ppm" },
            { label: "Lower Detectable Limit", value: "0.1 ppm" },
            { label: "Noise Level", value: "0.05 ppm with time constant 30 seconds" },
            { label: "Zero Drift", value: "< 0.2 ppm/7 days" },
            { label: "Span Drift", value: "< 1% full scale in 24 hrs." },
            { label: "Linearity", value: "Continuous ± 1%" },
            { label: "Response Time", value: "30 seconds or less" },
            { label: "Calibration", value: "Multi-calibration section & General Specifications (4.1.7 to 4.1.9)" },
            { label: "Analog Output", value: "0 – 1 V, 0 – 10 V, 2 – 20 mA / 4 – 20 mA" },
            { label: "Digital Output", value: "Multiple drop RS 232port, USB port /TCP/IP, Ethernet" }
        ]
    },
    o3: {
        id: "o3",
        name: "Ambient Ozone (O₃) Analyser",
        category: "CAAQMS Reference Analyzer",
        desc: "Measures absorption of UV light at 254nm within a dual-path cell to compute ground-level ozone.",
        specs: [
            { label: "Principle", value: "UV Photometric / Chemiluminiscence" },
            { label: "Measurement", value: "O₃ in Ambient Air" },
            { label: "Display", value: "Digital" },
            { label: "Range", value: "Auto ranging 0 - 500 ppb" },
            { label: "Lower Detectable Limit", value: "1.0 ppb" },
            { label: "Noise level", value: "± 0.5 ppb" },
            { label: "Zero Drift", value: "< ½% per month" },
            { label: "Span Drift", value: "< 1% per month" },
            { label: "Linearity", value: "Continuous ± 1%" },
            { label: "Response Time", value: "30 seconds or less" },
            { label: "Calibration", value: "Built in Zero and span generator & Multi-calibration section" },
            { label: "Analog Output", value: "0 – 1 V, 0 – 10 V, 2 – 20 mA / 4 – 20 mA" },
            { label: "Digital Output", value: "Multiple drop RS 232 port, USB port /TCP/IP, Ethernet" }
        ]
    }
};

const AnalyzerDetails = ({ isDarkMode }) => {
    const { id } = useParams();
    
    // In a real application, we might fallback to fetching generic data if it's not one of these 5,
    // but for now, we'll just show the specific ones or a generic "Not Found" state.
    const data = analyzerData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) {
        return (
            <div className={`min-h-screen pt-32 pb-16 flex items-center justify-center ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Analyzer Specifications Not Available</h2>
                    <p className="text-slate-500 mb-6 max-w-md">Detailed CPCB specifications for this specific analyzer are not yet available or are being updated.</p>
                    <Link to="/#products" className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors">Return to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen pt-28 pb-16 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
            <div className="container mx-auto px-6 max-w-5xl">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm font-semibold mb-8">
                    <Link to="/" className={`hover:text-emerald-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Home</Link>
                    <ChevronRight size={14} className="text-slate-400" />
                    <Link to="/product/698da53e5bff466e7fbecc3b" className={`hover:text-emerald-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Products</Link>
                    <ChevronRight size={14} className="text-slate-400" />
                    <span className="text-emerald-500">{data.name}</span>
                </div>

                {/* Back Button */}
                <Link to="/product/698da53e5bff466e7fbecc3b?tab=product" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-600 transition-colors mb-8">
                    <ArrowLeft size={16} />
                    Back to CAAQMS
                </Link>

                {/* Hero Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-3xl p-8 md:p-12 mb-12 shadow-xl border relative overflow-hidden ${isDarkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-100'}`}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-3 block">
                                {data.category}
                            </span>
                            <h1 className={`text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                {data.name}
                            </h1>
                            <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {data.desc}
                            </p>
                        </div>
                        <div className="hidden md:flex w-full md:w-1/3 shrink-0">
                            {/* Abstract Icon/Image Representation */}
                            <div className={`w-full aspect-square rounded-2xl flex items-center justify-center border shadow-inner ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                                <Activity size={80} className="text-emerald-500/30" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Specifications Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="mb-6 flex flex-wrap items-center gap-4 justify-between">
                        <h2 className={`text-2xl font-bold flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            <Settings className="text-emerald-500" />
                            Technical Specifications
                        </h2>
                        <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20 uppercase tracking-wider">CPCB Compliant</span>
                    </div>
                    
                    <div className={`rounded-2xl overflow-hidden border shadow-lg ${isDarkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-white'}`}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className={`border-b ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                                        <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs w-1/3">Parameter</th>
                                        <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Specification</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {data.specs.map((spec, idx) => (
                                        <tr 
                                            key={idx} 
                                            className={`transition-colors hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 ${
                                                isDarkMode ? 'text-slate-300' : 'text-slate-600'
                                            }`}
                                        >
                                            <td className="py-4 px-6 font-bold text-sm border-r border-slate-100 dark:border-slate-800 align-top">
                                                {spec.label}
                                            </td>
                                            <td className="py-4 px-6 text-sm leading-relaxed font-medium">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnalyzerDetails;
