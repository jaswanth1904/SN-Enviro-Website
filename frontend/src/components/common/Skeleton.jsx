import React from 'react';

export const SkeletonBox = ({ className = '', isDarkMode = false }) => (
    <div
        className={`animate-pulse rounded-xl ${
            isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
        } ${className}`}
    />
);

export const SkeletonText = ({ lines = 3, className = '', isDarkMode = false }) => (
    <div className={`space-y-2.5 ${className}`}>
        {Array.from({ length: lines }).map((_, idx) => (
            <div
                key={idx}
                className={`h-3.5 rounded-lg animate-pulse ${
                    isDarkMode ? 'bg-slate-800/80' : 'bg-slate-200'
                } ${idx === lines - 1 ? 'w-2/3' : 'w-full'}`}
            />
        ))}
    </div>
);

export const SkeletonCard = ({ isDarkMode = false }) => (
    <div
        className={`p-6 rounded-2xl border transition-all duration-300 animate-pulse ${
            isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200/80'
        }`}
    >
        <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
            <div className="flex-1 space-y-2">
                <div className={`h-4 w-3/4 rounded ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
                <div className={`h-3 w-1/2 rounded ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
            </div>
        </div>
        <div className={`h-32 w-full rounded-xl mb-4 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
        <SkeletonText lines={2} isDarkMode={isDarkMode} />
    </div>
);

export const SkeletonTable = ({ rows = 5, cols = 4, isDarkMode = false }) => (
    <div
        className={`w-full rounded-2xl border overflow-hidden animate-pulse ${
            isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
        }`}
    >
        <div className={`h-12 border-b flex items-center px-4 gap-4 ${isDarkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'}`}>
            {Array.from({ length: cols }).map((_, idx) => (
                <div key={idx} className={`h-4 rounded flex-1 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`} />
            ))}
        </div>
        <div className="divide-y divide-slate-800/50">
            {Array.from({ length: rows }).map((_, rIdx) => (
                <div key={rIdx} className="h-14 flex items-center px-4 gap-4">
                    {Array.from({ length: cols }).map((_, cIdx) => (
                        <div key={cIdx} className={`h-3.5 rounded flex-1 ${isDarkMode ? 'bg-slate-800/60' : 'bg-slate-100'}`} />
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default {
    SkeletonBox,
    SkeletonText,
    SkeletonCard,
    SkeletonTable
};
