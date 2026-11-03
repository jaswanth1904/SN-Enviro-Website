import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, Eye, Mail, Server, Database, CheckCircle, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: Eye,
            title: '1. Information We Collect',
            content: `When you interact with the SN Enviro Solutions platform, we may collect:
            • Contact Inquiries: Name, company name, corporate email address, telephone number, and specific environmental compliance requirements submitted via our inquiry form.
            • Telemetry & Visit Metrics: Non-personally identifiable technical telemetry including IP address (anonymized), device type, browser specifications, and referral pathways to optimize system responsiveness.
            • Partner & Employee Credentials: Encrypted authentication credentials for authorized industrial partners and internal field service engineers.`
        },
        {
            icon: Server,
            title: '2. Purpose and Use of Collected Data',
            content: `We process collected information solely for legitimate operational purposes:
            • Providing customized technical quotations, site feasibility assessments, and CEMS/CAAQMS regulatory compliance guidance.
            • Coordinating field service technicians, equipment dispatch, and sensor calibration schedules.
            • Enhancing website performance, system security, and defending against automated abuse through rate-limiting.
            • We do NOT sell, lease, or monetize your corporate or personal information under any circumstances.`
        },
        {
            icon: Database,
            title: '3. Data Storage, Security & Retention',
            content: `• Cryptographic Protection: Sensitive transmissions are protected using TLS 1.3 encryption. Passwords and internal credentials are cryptographically hashed using industry-standard bcrypt algorithms.
            • Infrastructure Isolation: All databases are housed in secure, isolated data centers with continuous intrusion monitoring and firewall controls.
            • Retention Policies: Contact inquiries and quotation requests are retained for the duration of the commercial relationship or as mandated by statutory Indian environmental record-keeping regulations.`
        },
        {
            icon: Lock,
            title: '4. Third-Party Services & Integrations',
            content: `We collaborate exclusively with trusted enterprise vendors to support platform operations:
            • Cloud Storage: Secure digital asset storage (such as equipment certification documents and technical datasheets) hosted via Cloudinary.
            • Communication Relays: Automated acknowledgment emails and inquiry dispatches routed securely via standard SMTP relays.
            • Mapping & Telemetry: Interactive geographic mapping via Leaflet / OpenStreetMap for displaying regional office nodes without persistent tracking.`
        },
        {
            icon: ShieldCheck,
            title: '5. Regulatory Compliance & Your Rights',
            content: `In compliance with the Digital Personal Data Protection (DPDP) Act and global privacy standards, you hold the right to:
            • Request inspection or copies of any personal or corporate information held in our records.
            • Request rectification of outdated or inaccurate contact records.
            • Request complete deletion of inquiry records, subject to ongoing statutory compliance or warranty agreements.
            • Revoke consent for non-essential communications at any time.`
        },
        {
            icon: Mail,
            title: '6. Contact Our Data Protection Officer',
            content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data protection measures, please contact our compliance desk:
            • Company: SN Enviro Solutions Pvt. Ltd.
            • Address: Eden Amsri Square, 7th Floor, Beside Apollo Hospital, St. John’s Road, Secunderabad, Telangana - 500025, India.
            • Email: mail@snenviro.com | Phone: +91 73309 33306`
        }
    ];

    return (
        <div className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative ${
            isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
        }`}>
            {/* Header Hero */}
            <div className="max-w-4xl mx-auto pt-6 pb-12">
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors ${
                        isDarkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'
                    }`}
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck size={14} />
                    Data Governance & Privacy
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
                    Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Policy</span>
                </h1>

                <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Effective Date: November 2026 • Last Reviewed: Q4 2026. This Privacy Policy outlines the standards and procedures by which SN Enviro Solutions Pvt. Ltd. safeguards commercial, technical, and personal information across our digital platforms.
                </p>
            </div>

            {/* Sections Grid */}
            <div className="max-w-4xl mx-auto space-y-8 pb-16">
                {sections.map((section, idx) => {
                    const Icon = section.icon;
                    return (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 shadow-sm ${
                                isDarkMode
                                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-slate-100'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                                    isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                }`}>
                                    <Icon size={20} />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                                    {section.title}
                                </h2>
                            </div>
                            <div className={`text-sm leading-relaxed whitespace-pre-line pl-0 sm:pl-13 ${
                                isDarkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                                {section.content}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Footer Assurance Banner */}
                <div className={`p-6 rounded-2xl border text-center ${
                    isDarkMode ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300' : 'bg-emerald-50/80 border-emerald-200 text-emerald-800'
                }`}>
                    <div className="flex items-center justify-center gap-2 font-semibold text-sm mb-1">
                        <CheckCircle size={18} />
                        Enterprise Environmental Data Integrity Commitment
                    </div>
                    <p className="text-xs opacity-90">
                        SN Enviro adheres strictly to industry best practices in data minimization, confidentiality, and statutory environmental reporting integrity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
