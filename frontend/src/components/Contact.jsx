import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle, X } from 'lucide-react';

const Contact = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [serverErrorMessage, setServerErrorMessage] = useState('');
    const [settings, setSettings] = useState({});

    React.useEffect(() => {
        setSettings({});
    }, []);

    // Validation rules
    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email.trim())) {
            errors.email = 'Please provide a valid corporate or personal email';
        }

        const phoneRegex = /^(\+?\d{1,4}[\s-]?)?\(?\d{3,5}\)?[\s-]?\d{3,5}[\s-]?\d{3,5}$/;
        if (formData.phone && !phoneRegex.test(formData.phone.trim().replace(/\s+/g, ''))) {
            errors.phone = 'Please provide a valid 10-12 digit phone number';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 3) {
            errors.subject = 'Subject must be at least 3 characters';
        }

        if (!formData.message.trim()) {
            errors.message = 'Inquiry message is required';
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Please provide at least 10 characters describing your inquiry';
        }

        return errors;
    };

    const errors = validate();
    const isFormValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, phone: true, subject: true, message: true });

        if (!isFormValid) {
            setServerErrorMessage('Please correct the highlighted fields before submitting.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setServerErrorMessage('');

        try {
            const response = await fetch((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTouched({});
            } else {
                setServerErrorMessage(data.msg || data.message || 'Submission failed. Please try again later.');
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setServerErrorMessage('Network connection lost. Please check your internet or try again shortly.');
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    return (
        <section id="contact" className={`relative py-12 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {/* Success Popup */}
            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 100, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.5, y: 100, opacity: 0 }}
                            className={`relative w-full max-w-sm p-10 rounded-[3rem] shadow-2xl text-center border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}
                        >
                            <button
                                onClick={() => setStatus('idle')}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                            >
                                <X size={20} className={isDarkMode ? 'text-slate-400' : 'text-slate-500'} />
                            </button>

                            <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-emerald-500/20 rotate-12">
                                <CheckCircle size={40} />
                            </div>

                            <h3 className={`text-2xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Success!</h3>
                            <p className={`mb-8 font-medium leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Thanks for reaching out! We will be in touch shortly. Please check your email for a confirmation.
                            </p>

                            <button
                                onClick={() => setStatus('idle')}
                                className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-3 block">Get In touch</span>
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Contact <span className="text-emerald-500">Us</span>
                    </h2>
                    <p className={`max-w-xl mx-auto text-sm md:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Have a project in mind or need technical support? Our experts are ready to assist you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-4"
                    >
                        <div className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 h-full ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-lg shadow-slate-200/40'}`}>
                            <h3 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Office Info</h3>

                            <div className="space-y-5">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold mb-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Address</h4>
                                        <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {settings.contact_address || 'Eden Amsri Square, 7th floor, Back side Vivah Bojanam Beside Apollo Hospital, St. John’s Road, Secunderabad, Telangana - 500025.'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold mb-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Phone</h4>
                                        <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{settings.contact_phone || '+91 73309 33306'}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold mb-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Email</h4>
                                        <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{settings.contact_email || 'mail.snenviro@gmail.com'}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-bold mb-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Working Hours</h4>
                                        <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Mon - Sat: 9:00 AM - 7:00 PM</p>
                                        <p className="text-[10px] text-emerald-500 font-bold mt-0.5 uppercase tracking-wide">Support available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-lg shadow-slate-200/40'}`}>
                            <h3 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Send a Message</h3>

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Full Name *</label>
                                        {touched.name && errors.name && (
                                            <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={status === 'loading'}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                                            touched.name && errors.name
                                                ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/40 bg-red-500/5'
                                                : touched.name && !errors.name
                                                ? 'border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/40'
                                                : isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500/50'
                                        }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email Address *</label>
                                        {touched.email && errors.email && (
                                            <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>
                                        )}
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={status === 'loading'}
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                                            touched.email && errors.email
                                                ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/40 bg-red-500/5'
                                                : touched.email && !errors.email
                                                ? 'border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/40'
                                                : isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500/50'
                                        }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Phone Number</label>
                                        {touched.phone && errors.phone && (
                                            <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>
                                        )}
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={status === 'loading'}
                                        placeholder="+91 98765 43210"
                                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                                            touched.phone && errors.phone
                                                ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/40 bg-red-500/5'
                                                : touched.phone && formData.phone && !errors.phone
                                                ? 'border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/40'
                                                : isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500/50'
                                        }`}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Subject *</label>
                                        {touched.subject && errors.subject && (
                                            <span className="text-[10px] text-red-500 font-medium">{errors.subject}</span>
                                        )}
                                    </div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={status === 'loading'}
                                        placeholder="Inquiry about CAAQMS or CEMS"
                                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${
                                            touched.subject && errors.subject
                                                ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/40 bg-red-500/5'
                                                : touched.subject && !errors.subject
                                                ? 'border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/40'
                                                : isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500/50'
                                        }`}
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-1">
                                    <div className="flex justify-between items-center">
                                        <label className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Inquiry Message *</label>
                                        {touched.message && errors.message && (
                                            <span className="text-[10px] text-red-500 font-medium">{errors.message}</span>
                                        )}
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={status === 'loading'}
                                        placeholder="Please describe your facility location, monitoring parameters required, and timeline..."
                                        rows="4"
                                        className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all resize-none ${
                                            touched.message && errors.message
                                                ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/40 bg-red-500/5'
                                                : touched.message && !errors.message
                                                ? 'border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/40'
                                                : isDarkMode ? 'bg-slate-900 border-slate-700 text-white focus:ring-2 focus:ring-emerald-500/50' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-2 focus:ring-emerald-500/50'
                                        }`}
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2 pt-2">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full px-6 py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold uppercase tracking-wider hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md shadow-emerald-500/30 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 cursor-pointer"
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <Send size={16} />
                                        )}
                                        {status === 'loading' ? 'Transmitting Inquiry...' : 'Submit Inquiry'}
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <div className="md:col-span-2 p-3 text-sm bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-center font-semibold">
                                        {serverErrorMessage || 'Unable to submit your message. Please verify all inputs and try again.'}
                                    </div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
