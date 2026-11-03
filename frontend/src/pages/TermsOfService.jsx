import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Cpu, CheckCircle2, AlertTriangle, Building2, Wrench, ShieldAlert, ArrowLeft } from 'lucide-react';

const TermsOfService = ({ isDarkMode }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            icon: Scale,
            title: '1. Acceptance of Terms',
            content: `By accessing, browsing, or utilizing the digital platform, product catalog, customer portals, or services of SN Enviro Solutions Pvt. Ltd. ("SN Enviro", "we", "us", or "our"), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must refrain from using the platform.`
        },
        {
            icon: Cpu,
            title: '2. Equipment Specifications & Environmental Solutions',
            content: `• Continuous Ambient Air Quality Monitoring Systems (CAAQMS), Continuous Emission Monitoring Systems (CEMS), Effluent Quality Monitoring Systems (EQMS), and Weather Monitoring Systems (WMS) supplied or integrated by SN Enviro are engineered to adhere to applicable regulatory benchmarks.
            • Technical documentation, parametric measurement ranges, sensor accuracy ratings, and sample flow diagrams are provided for engineering assessment. Actual installation performance may vary depending on stack temperatures, flue gas composition, ambient weather extremes, and customer maintenance adherence.`
        },
        {
            icon: Wrench,
            title: '3. Installation, Commissioning & Field Maintenance',
            content: `• Site Readiness: Customers are responsible for providing secure electrical power, stabilized voltage, clean instrument air supply, sample tap ports, and safe platform access conforming to factory guidelines prior to installation.
            • Calibration & Certification: Regular calibration using certified span gases and zero-air standards must be maintained in accordance with standard operating procedures (SOPs) to ensure uninterrupted regulatory compliance.
            • Annual Maintenance Contracts (AMC): Preventive inspections, sensor replacements, and firmware patches are executed pursuant to specific bilateral service level agreements.`
        },
        {
            icon: Building2,
            title: '4. Portal Access & Administrative Credentials',
            content: `• Access to internal dashboards, partner portals, and telemetry data loggers is restricted strictly to authorized corporate personnel.
            • Account holders are solely responsible for maintaining credential secrecy. Any unauthorized activity originating from compromised credentials must be reported immediately to our security desk.`
        },
        {
            icon: ShieldAlert,
            title: '5. Intellectual Property Rights',
            content: `All design architectures, CAD schematics, software algorithms, analyzer user manuals, logos, and visual assets displayed on this website are the proprietary intellectual property of SN Enviro Solutions Pvt. Ltd. or its accredited manufacturing partners. No portion may be reproduced, reverse-engineered, or redistributed without prior written authorization.`
        },
        {
            icon: AlertTriangle,
            title: '6. Limitation of Liability & Force Majeure',
            content: `• While our systems are built for high industrial reliability, SN Enviro shall not be liable for incidental, indirect, or consequential damages resulting from site power outages, extreme natural catastrophes, stack explosions, unauthorized sensor modifications, or network disruptions from telecom carriers.
            • Total liability under any commercial claim shall not exceed the amount actually paid by the client for the specific equipment or service under dispute.`
        },
        {
            icon: CheckCircle2,
            title: '7. Governing Law & Dispute Resolution',
            content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising in connection with these Terms or commercial transactions shall fall under the exclusive jurisdiction of the competent courts in Secunderabad / Hyderabad, Telangana.`
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
                    <Scale size={14} />
                    Commercial & Regulatory Terms
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
                    Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Service</span>
                </h1>

                <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Effective Date: November 2026 • SN Enviro Solutions Pvt. Ltd. These terms govern the procurement, advisory, and technical usage of our environmental monitoring systems and digital platforms.
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

                {/* Statutory Contact Note */}
                <div className={`p-6 rounded-2xl border ${
                    isDarkMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-slate-100/70 border-slate-200 text-slate-700'
                }`}>
                    <h3 className="font-bold text-sm mb-2 text-emerald-500">Commercial & Legal Inquiries</h3>
                    <p className="text-xs leading-relaxed">
                        For questions regarding custom service level agreements, industrial warranties, or distributor partnerships, please contact us at <span className="font-semibold text-emerald-400">mail@snenviro.com</span> or write to our registered corporate office in Secunderabad, Telangana.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
