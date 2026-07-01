import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Briefcase, Building, Mail, Phone, AlertCircle } from 'lucide-react';

const EmployeePortal = ({ isDarkMode }) => {
    const [searchId, setSearchId] = useState('');
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`min-h-screen pt-32 pb-20 ${isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
            <div className="container mx-auto px-6 max-w-4xl">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-4xl md:text-5xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
                    >
                        Employee Portal
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500"
                    >
                        Enter your Employee ID to view your profile and details.
                    </motion.p>
                </div>

                {/* Search Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl mx-auto mb-12"
                >
                    <form onSubmit={handleSearch} className="relative">
                        <div className="relative flex items-center">
                            <Search className="absolute left-4 text-emerald-500" size={20} />
                            <input
                                type="text"
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                                placeholder="Enter Employee ID (e.g. SNE102)"
                                className={`w-full pl-12 pr-32 py-4 rounded-2xl text-lg outline-none transition-shadow duration-300 shadow-lg focus:shadow-emerald-500/20 border-2 ${
                                    isDarkMode 
                                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-emerald-500' 
                                        : 'bg-white border-slate-100 text-slate-900 placeholder-slate-400 focus:border-emerald-500'
                                }`}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`absolute right-2 top-2 bottom-2 px-6 rounded-xl font-bold transition-colors ${
                                    loading 
                                        ? 'bg-emerald-400 cursor-not-allowed' 
                                        : 'bg-emerald-500 hover:bg-emerald-600'
                                } text-white`}
                            >
                                {loading ? 'Searching...' : 'Search'}
                            </button>
                        </div>
                    </form>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="max-w-xl mx-auto mb-8 overflow-hidden"
                        >
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-xl flex items-center gap-3">
                                <AlertCircle size={20} />
                                <p className="font-medium">{error}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Employee Card */}
                <AnimatePresence>
                    {employee && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className={`overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-sm ${
                                isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white/80 border-slate-100'
                            }`}>
                                {/* Card Header Background */}
                                <div className="h-32 bg-gradient-to-r from-emerald-500 to-teal-500 relative">
                                    <div className="absolute -bottom-16 left-8">
                                        <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 overflow-hidden bg-white">
                                            <img 
                                                src={employee.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=10b981&color=fff&size=128`} 
                                                alt={employee.name} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-6 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-white font-bold tracking-wider">
                                        ID: {employee.employeeId}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="pt-20 px-8 pb-8">
                                    <h2 className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {employee.name}
                                    </h2>
                                    <div className="flex items-center gap-2 text-emerald-500 font-medium mb-6">
                                        <Briefcase size={16} />
                                        <span>{employee.role}</span>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                                                    <Building size={18} className="text-emerald-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Department</p>
                                                    <p className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                        {employee.department}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                                                    <Mail size={18} className="text-emerald-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Email Address</p>
                                                    <p className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                        {employee.email}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-100'}`}>
                                                    <Phone size={18} className="text-emerald-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Phone Number</p>
                                                    <p className={`font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                                                        {employee.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default EmployeePortal;
