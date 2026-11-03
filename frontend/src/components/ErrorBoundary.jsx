import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, reported: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary captured runtime crash:', error, errorInfo);

        // Report error telemetry to backend observer
        try {
            const apiUrl = (import.meta.env?.VITE_API_URL || 'http://localhost:5000') + '/api/visits/client-error';
            fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: error?.message || 'Unknown runtime error',
                    stack: error?.stack || '',
                    componentStack: errorInfo?.componentStack || '',
                    url: window?.location?.href || ''
                })
            }).then(() => {
                this.setState({ reported: true });
            }).catch(err => {
                console.warn('Could not dispatch client error telemetry:', err.message);
            });
        } catch (e) {
            // Silently fallback if reporting fails
        }
    }

    render() {
        if (this.state.hasError) {
            const isDark = document.documentElement.classList.contains('dark');

            return (
                <div className={`min-h-screen w-full flex flex-col items-center justify-center p-6 text-center transition-colors duration-500 ${
                    isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
                }`}>
                    <div className="max-w-md w-full p-8 rounded-3xl border shadow-2xl backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-black mb-2 tracking-tight">System Recalibration Required</h2>
                        <p className="text-sm opacity-80 mb-6 leading-relaxed">
                            An unexpected client-side exception occurred. Our telemetry observer has automatically logged this incident for immediate engineering review.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                            >
                                Reload Station
                            </button>
                            <a
                                href="/"
                                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all no-underline text-inherit"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
