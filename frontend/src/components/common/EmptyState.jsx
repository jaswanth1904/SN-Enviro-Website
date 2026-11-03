import React from 'react';
import { motion } from 'framer-motion';
import { Inbox, Plus, RefreshCw } from 'lucide-react';

const EmptyState = ({
    icon: Icon = Inbox,
    title = 'No records found',
    description = 'There is currently no data to display matching your criteria.',
    actionLabel,
    onAction,
    isDarkMode = false
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`w-full py-12 px-6 flex flex-col items-center justify-center text-center rounded-2xl border ${
                isDarkMode
                    ? 'bg-slate-900/40 border-slate-800 text-slate-300'
                    : 'bg-slate-50/80 border-slate-200 text-slate-600'
            }`}
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-inner ${
                isDarkMode
                    ? 'bg-slate-800 text-slate-400 border border-slate-700'
                    : 'bg-white text-slate-400 border border-slate-200 shadow-slate-100'
            }`}>
                <Icon size={28} />
            </div>

            <h3 className={`text-base sm:text-lg font-bold mb-1.5 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
                {title}
            </h3>

            <p className="text-xs sm:text-sm max-w-sm mb-6 leading-relaxed opacity-80">
                {description}
            </p>

            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                >
                    <Plus size={16} />
                    {actionLabel}
                </button>
            )}
        </motion.div>
    );
};

export default EmptyState;
