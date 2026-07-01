import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, Building, Mail, Phone, AlertCircle, Calendar, MapPin, Award, ChevronLeft } from 'lucide-react';

const EmployeePortal = ({ isDarkMode }) => {
    const [searchId, setSearchId] = useState('');
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchId.trim()) {
            setError('Please enter an Employee ID');
            return;
        }

        setLoading(true);
        setError('');
        setEmployee(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/employees/${searchId}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Employee not found. Please check the ID and try again.');
                }
                throw new Error('An error occurred while fetching employee data.');
            }

            const data = await response.json();
            setEmployee(data);
            setSearched(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const resetSearch = () => {
        setSearched(false);
        setEmployee(null);
        setSearchId('');
        setError('');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className={`min-h-screen pt-24 pb-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
            
            <AnimatePresence mode="wait">
                {!searched ? (
                    // ==========================================
                    // STATE 1: SEARCH MODE (Clean, Immersive UI)
                    // ==========================================
                    <motion.div 
                        key="search-state"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        className="container mx-auto px-6 max-w-4xl min-h-[70vh] flex flex-col justify-center items-center relative"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="text-center mb-10 z-10 w-full">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border ${isDarkMode ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-white border-slate-200 text-emerald-600'}`}
                            >
                                <Building size={16} /> SN Enviro Employee Portal
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className={`text-5xl md:text-6xl font-bold mb-6 font-serif ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                            >
                                Identify <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Yourself</span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-slate-500 max-w-xl mx-auto"
                            >
                                Access your secure profile, employment details, and company information by entering your unique ID.
                            </motion.p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="w-full max-w-xl z-10"
                        >
                            <form onSubmit={handleSearch} className="relative">
                                <div className="relative flex items-center group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <Search className="absolute left-6 text-emerald-500 z-10" size={24} />
                                    <input
                                        type="text"
                                        value={searchId}
                                        onChange={(e) => setSearchId(e.target.value)}
                                        placeholder="Employee ID (e.g. SNE102)"
                                        className={`w-full pl-16 pr-36 py-5 rounded-2xl text-xl outline-none transition-all duration-300 relative z-0 border-2 ${
                                            isDarkMode 
                                                ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:bg-slate-800' 
                                                : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                                        }`}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`absolute right-3 top-3 bottom-3 px-8 rounded-xl font-bold text-lg transition-all duration-300 z-10 flex items-center justify-center ${
                                            loading 
                                                ? 'bg-emerald-400 cursor-not-allowed opacity-80' 
                                                : 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30'
                                        } text-white`}
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : 'Access'}
                                    </button>
                                </div>
                            </form>
                            
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mt-6 bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-xl flex items-center justify-center gap-3"
                                    >
                                        <AlertCircle size={20} />
                                        <p className="font-medium">{error}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                ) : (
                    // ==========================================
                    // STATE 2: PROFILE DASHBOARD (Full Page UI)
                    // ==========================================
                    <motion.div
                        key="profile-state"
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="container mx-auto px-4 md:px-8 max-w-7xl"
                    >
                        {/* Back Button */}
                        <button 
                            onClick={resetSearch}
                            className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                                isDarkMode ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                        >
                            <ChevronLeft size={18} /> Back to Search
                        </button>

                        {/* Banner & Header Grid */}
                        <div className={`rounded-3xl overflow-hidden mb-8 border shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                            {/* Banner */}
                            <div className="h-48 md:h-64 w-full bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-900 relative overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500 opacity-20 rounded-full blur-3xl translate-y-1/2"></div>
                            </div>

                            {/* Profile Info Row (Overlaps Banner) */}
                            <div className="px-8 pb-8 md:px-12 relative">
                                {/* Avatar (Absolute Positioned) */}
                                <div className="absolute -top-16 md:-top-20 left-8 md:left-12 w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 shadow-2xl overflow-hidden bg-white z-20" style={{ borderColor: isDarkMode ? '#0f172a' : '#ffffff' }}>
                                    <img 
                                        src={employee.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=10b981&color=fff&size=256`} 
                                        alt={employee.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Name & Badges */}
                                <div className="pt-20 md:pt-4 md:pl-[180px] pb-2 z-10 relative">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
                                        <div>
                                            <h1 className={`text-4xl md:text-5xl font-bold mb-2 break-words ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                                {employee.name}
                                            </h1>
                                            <div className="flex flex-wrap items-center gap-3 text-lg font-medium mt-2">
                                                <span className="text-emerald-500">{employee.designation || employee.role}</span>
                                                <span className="text-slate-400 hidden md:inline">•</span>
                                                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>{employee.department}</span>
                                                {employee.bloodGroup && (
                                                    <>
                                                        <span className="text-slate-400 hidden md:inline">•</span>
                                                        <span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-sm font-bold border border-red-500/20 flex items-center gap-1">
                                                            Blood: {employee.bloodGroup}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3">
                                            <div className={`px-4 py-2 rounded-xl border flex flex-col items-center justify-center ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                                                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">Employee ID</span>
                                                <span className={`text-lg font-mono font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{employee.employeeId}</span>
                                            </div>
                                            <div className={`px-4 py-2 rounded-xl border flex flex-col items-center justify-center bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20`}>
                                                <span className="text-xs uppercase tracking-wider text-emerald-100 font-bold mb-1">Status</span>
                                                <span className="text-lg font-bold flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> Active
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Left Column: Contact & Metadata */}
                            <div className="space-y-8">
                                {/* Contact Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={`p-8 rounded-3xl border shadow-lg ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
                                >
                                    <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        <User size={20} className="text-emerald-500"/> Contact Information
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                                <Mail size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 mb-0.5">Email Address</p>
                                                <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{employee.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                                <Phone size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 mb-0.5">Phone Number</p>
                                                <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{employee.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-500 mb-0.5">Location</p>
                                                <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{employee.location || 'Headquarters'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Employment Details Card */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className={`p-8 rounded-3xl border shadow-lg ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
                                >
                                    <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        <Briefcase size={20} className="text-emerald-500"/> Employment Details
                                    </h3>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500 mb-1 flex items-center gap-2"><Calendar size={16}/> Date of Joining</p>
                                            <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{formatDate(employee.joinDate)}</p>
                                        </div>
                                        <div className="w-full h-px bg-slate-200 dark:bg-slate-800"></div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500 mb-1 flex items-center gap-2"><User size={16}/> Reporting Manager</p>
                                            <p className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{employee.reportingManager || 'Not Assigned'}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column: Bio & Skills */}
                            <div className="lg:col-span-2 space-y-8">
                                
                                {/* About Section */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className={`p-8 md:p-10 rounded-3xl border shadow-lg ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
                                >
                                    <h3 className={`text-2xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        About
                                    </h3>
                                    <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {employee.bio || `${employee.name} is a valued member of the ${employee.department} department at SN Enviro.`}
                                    </p>
                                </motion.div>

                                {/* Skills Section */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className={`p-8 md:p-10 rounded-3xl border shadow-lg ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
                                >
                                    <h3 className={`text-2xl font-bold mb-6 font-serif flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        <Award className="text-emerald-500" size={28}/> Technical Skills
                                    </h3>
                                    
                                    {employee.techSkills && employee.techSkills.length > 0 ? (
                                        <div className="flex flex-wrap gap-3">
                                            {employee.techSkills.map((skill, index) => (
                                                <div 
                                                    key={index}
                                                    className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
                                                        isDarkMode 
                                                            ? 'bg-slate-800 text-emerald-400 border border-slate-700 hover:border-emerald-500 hover:bg-slate-700' 
                                                            : 'bg-emerald-50 text-emerald-700 border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-100'
                                                    }`}
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-slate-500 italic">No technical skills listed.</p>
                                    )}
                                </motion.div>

                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default EmployeePortal;
