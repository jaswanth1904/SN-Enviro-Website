import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronLeft, 
    ChevronRight, 
    X, 
    Sparkles, 
    Play, 
    Pause, 
    Maximize2, 
    Building2,
    Compass,
    Eye
} from 'lucide-react';
import { lifeImages, categories } from '../data/lifeImages';

const LifeAtSnEnviro = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const scrollContainerRef = useRef(null);
    const animFrameId = useRef(null);
    
    // Mouse drag-to-scroll state
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    const hasMoved = useRef(false);

    const filteredImages = activeCategory === 'All' 
        ? lifeImages 
        : lifeImages.filter(img => img.category === activeCategory);

    // Smooth continuous auto-scroll loop
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollSpeed = 0.75; // pixels per frame

        const step = () => {
            if (isAutoScrolling && !isHovered && !isDragging.current && container) {
                container.scrollLeft += scrollSpeed;
                // If reached near the end, loop smoothly back to beginning
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 5) {
                    container.scrollLeft = 0;
                }
            }
            animFrameId.current = requestAnimationFrame(step);
        };

        animFrameId.current = requestAnimationFrame(step);

        return () => {
            if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
        };
    }, [isAutoScrolling, isHovered, filteredImages]);

    // Manual scroll step via custom buttons
    const handleScroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = direction === 'left' ? -380 : 380;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Mouse drag handlers for smooth desktop panning
    const handleMouseDown = (e) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        isDragging.current = true;
        hasMoved.current = false;
        startX.current = e.pageX - container.offsetLeft;
        scrollLeftStart.current = container.scrollLeft;
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        setIsHovered(false);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const container = scrollContainerRef.current;
        if (!container) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        if (Math.abs(walk) > 5) {
            hasMoved.current = true;
        }
        container.scrollLeft = scrollLeftStart.current - walk;
    };

    // Keyboard support for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') setSelectedImageIndex(null);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, filteredImages]);

    const nextImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const prevImage = () => {
        if (selectedImageIndex === null) return;
        setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    return (
        <section 
            id="life-at-sn" 
            className={`py-16 md:py-24 lg:py-32 transition-colors duration-500 overflow-hidden ${
                isDarkMode ? 'bg-slate-950 border-t border-slate-900' : 'bg-slate-50/70 border-t border-slate-100'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles size={14} className="animate-pulse" /> Corporate Headquarters Expansion & Culture
                    </div>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                        Life at <span className="text-emerald-500">SN Enviro</span>
                    </h2>
                    <p className={`text-sm sm:text-lg leading-relaxed ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                        Explore our new corporate office opening, advanced technology labs, leadership milestones, and the passionate team powering sustainable engineering across India.
                    </p>

                    {/* Category Filter Pills (Mobile Scrollable) */}
                    <div className="mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-2 no-scrollbar">
                        {categories.map((cat) => {
                            const count = cat === 'All' 
                                ? lifeImages.length 
                                : lifeImages.filter(img => img.category === cat).length;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        if (scrollContainerRef.current) {
                                            scrollContainerRef.current.scrollLeft = 0;
                                        }
                                    }}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                                        activeCategory === cat
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105 ring-2 ring-emerald-500/50'
                                            : `${isDarkMode ? 'bg-slate-900 text-slate-400 hover:bg-slate-800' : 'bg-white text-slate-600 hover:bg-slate-100'} border border-slate-200 dark:border-slate-800 shadow-sm`
                                    }`}
                                >
                                    {cat === 'New Office' ? '🏢 New Office' : cat}
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                                        activeCategory === cat ? 'bg-white/25 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                    }`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Carousel Container with Custom Navigation Controls */}
                <div 
                    className="relative group/carousel my-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                >
                    {/* Floating Custom Left Arrow Button */}
                    <button
                        onClick={() => handleScroll('left')}
                        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md border ${
                            isDarkMode 
                                ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white' 
                                : 'bg-white/95 border-slate-300/90 text-slate-800 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                        } hover:scale-110 active:scale-95 group/btn`}
                        aria-label="Scroll left (Previous photos)"
                        title="Click to scroll left (Previous photos)"
                    >
                        <ChevronLeft size={28} className="sm:w-8 sm:h-8 transition-transform group-hover/btn:-translate-x-0.5" />
                    </button>

                    {/* Floating Custom Right Arrow Button */}
                    <button
                        onClick={() => handleScroll('right')}
                        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md border ${
                            isDarkMode 
                                ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white' 
                                : 'bg-white/95 border-slate-300/90 text-slate-800 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                        } hover:scale-110 active:scale-95 group/btn`}
                        aria-label="Scroll right (Next photos)"
                        title="Click to scroll right (Next photos)"
                    >
                        <ChevronRight size={28} className="sm:w-8 sm:h-8 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>

                    {/* Auto-scrolling Row of Cards with Dribbble Arched Top Styling */}
                    <div
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth py-4 px-4 sm:px-8 no-scrollbar cursor-grab active:cursor-grabbing select-none"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id || index}
                                onClick={() => {
                                    if (!hasMoved.current) {
                                        setSelectedImageIndex(index);
                                    }
                                }}
                                className={`w-[260px] sm:w-[310px] lg:w-[350px] h-[390px] sm:h-[450px] lg:h-[490px] shrink-0 rounded-t-[3rem] sm:rounded-t-[3.75rem] rounded-b-2xl sm:rounded-b-3xl overflow-hidden relative group/card cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                                    isDarkMode 
                                        ? 'border-slate-800 bg-slate-900 hover:border-emerald-500/60' 
                                        : 'border-slate-200/80 bg-white hover:border-emerald-500/60'
                                }`}
                            >
                                {/* Card Image */}
                                <img
                                    src={image.url}
                                    alt={image.title || 'SN Enviro Life & Office'}
                                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-out pointer-events-none"
                                    loading="lazy"
                                />

                                {/* Gradient Overlay for Title Legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                                {/* Top Category Tag */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-black/50 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Top Right Zoom Icon */}
                                <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 shadow-md">
                                    <Maximize2 size={16} />
                                </div>

                                {/* Bottom Info Card (Dribbble Reference Design) */}
                                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white flex flex-col justify-end pointer-events-none">
                                    <h3 className="text-base sm:text-xl font-bold leading-snug mb-1 group-hover/card:text-emerald-300 transition-colors">
                                        {image.title}
                                    </h3>
                                    {image.subtitle && (
                                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed opacity-90 font-normal">
                                            {image.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Controls / Status Bar with Direct Left/Right Click Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 sm:px-6">
                    {/* Left & Right Custom Click Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleScroll('left')}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-sm ${
                                isDarkMode 
                                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500' 
                                    : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                            }`}
                            title="Scroll left to view previous images"
                        >
                            <ChevronLeft size={16} /> Previous
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-sm ${
                                isDarkMode 
                                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500' 
                                    : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500'
                            }`}
                            title="Scroll right to view next images"
                        >
                            Next <ChevronRight size={16} />
                        </button>

                        {/* Auto-scroll Play / Pause Toggle */}
                        <button
                            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors border ml-2 ${
                                isDarkMode 
                                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' 
                                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
                            }`}
                            title={isAutoScrolling ? 'Pause automatic scrolling' : 'Resume automatic scrolling'}
                        >
                            {isAutoScrolling ? (
                                <>
                                    <Pause size={14} className="text-emerald-500" /> Auto-Scroll Active
                                </>
                            ) : (
                                <>
                                    <Play size={14} className="text-emerald-500" /> Resume Auto-Scroll
                                </>
                            )}
                        </button>
                    </div>

                    {/* Counter & Hint */}
                    <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Showing <span className="font-bold text-emerald-500">{filteredImages.length}</span> Moments • Use buttons, drag, or swipe to explore
                    </div>
                </div>
            </div>

            {/* Fullscreen Interactive Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImageIndex(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                            aria-label="Close modal"
                            title="Close (Esc)"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Counter & Category */}
                        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 z-20">
                            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold backdrop-blur-sm">
                                {selectedImageIndex + 1} / {filteredImages.length}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                {filteredImages[selectedImageIndex].category}
                            </span>
                        </div>

                        {/* Modal Left / Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3.5 sm:p-5 rounded-full bg-white/10 hover:bg-emerald-500 text-white transition-all z-20 hover:scale-110 active:scale-95 shadow-2xl"
                            aria-label="Previous photo"
                            title="Previous photo (Left Arrow)"
                        >
                            <ChevronLeft size={30} />
                        </button>

                        {/* Modal Right / Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3.5 sm:p-5 rounded-full bg-white/10 hover:bg-emerald-500 text-white transition-all z-20 hover:scale-110 active:scale-95 shadow-2xl"
                            aria-label="Next photo"
                            title="Next photo (Right Arrow)"
                        >
                            <ChevronRight size={30} />
                        </button>

                        {/* Lightbox Content Container */}
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center p-2"
                        >
                            <img
                                src={filteredImages[selectedImageIndex].url}
                                alt={filteredImages[selectedImageIndex].title}
                                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl mb-4 border border-white/10"
                            />
                            <div className="text-center text-white max-w-xl">
                                <h4 className="text-lg sm:text-2xl font-bold mb-1">
                                    {filteredImages[selectedImageIndex].title}
                                </h4>
                                {filteredImages[selectedImageIndex].subtitle && (
                                    <p className="text-xs sm:text-sm text-slate-300">
                                        {filteredImages[selectedImageIndex].subtitle}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LifeAtSnEnviro;
