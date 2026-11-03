import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Compass, Home, ArrowLeft, Radio, AlertOctagon, PhoneCall } from 'lucide-react';

const NotFound = ({ isDarkMode }) => {
    const navigate = useNavigate();

    return (
        <div className={`min-h-[80vh] flex items-center justify-center px-4 py-16 relative overflow-hidden transition-colors duration-500 ${
            isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
        }`}>
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                    isDarkMode ? 'bg-emerald-500' : 'bg-emerald-400'
                }`} />
                <div className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                    isDarkMode ? 'bg-cyan-500' : 'bg-cyan-400'
                }`} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Radar / Sensor Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className={`absolute inset-0 rounded-full border-2 border-dashed ${
                            isDarkMode ? 'border-emerald-500/40' : 'border-emerald-600/30'
                        }`}
                    />
                    <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className={`absolute inset-2 rounded-full ${
                            isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/15'
                        }`}
                    />
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md border ${
                        isDarkMode
                            ? 'bg-slate-900/80 border-slate-700/60 text-emerald-400 shadow-emerald-500/10'
                            : 'bg-white/90 border-slate-200 text-emerald-600 shadow-slate-200'
                    }`}>
                        <Radio size={44} className="animate-pulse" />
                    </div>
                </motion.div>

                {/* 404 Headline */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                        <AlertOctagon size={14} />
                        Error 404 • Signal Lost
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        Coordinates <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Not Found</span>
                    </h1>
                    <p className={`text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        The environmental telemetry route you requested is unreachable or has been recalibrated. Let us guide you back to active monitoring stations.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium border text-sm transition-all duration-300 ${
                            isDarkMode
                                ? 'bg-slate-900/80 border-slate-700 hover:bg-slate-800 text-slate-200'
                                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                    <Link
                        to="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/20 transition-all duration-300"
                    >
                        <Home size={16} />
                        Return to Headquarters
                    </Link>
                </motion.div>

                {/* Helpful Quick Navigation Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}
                >
                    <p className={`text-xs uppercase font-bold tracking-wider mb-4 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        Explore Essential Stations
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { name: 'Solutions & Products', path: '/#products' },
                            { name: 'Live Dashboard', path: '/dashboard' },
                            { name: 'Contact Engineering', path: '/#contact' },
                            { name: 'Admin Portal', path: '/admin/login' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-colors ${
                                    isDarkMode
                                        ? 'border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 bg-slate-900/50'
                                        : 'border-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 bg-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
