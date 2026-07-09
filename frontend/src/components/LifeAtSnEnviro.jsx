import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lifeImages, categories } from '../data/lifeImages';

const LifeAtSnEnviro = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredImages = activeCategory === 'All' 
        ? lifeImages 
        : lifeImages.filter(img => img.category === activeCategory);

    return (
        <section id="life-at-sn" className={`py-20 lg:py-32 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-[#f8f9fa] border-t border-slate-100'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Inside SN Enviro</span>
                    <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        Life at <span className="text-emerald-500">SN Enviro</span>
                    </h2>
                    
                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                        : `${isDarkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm'}`
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry-style Grid */}
                <motion.div 
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                key={image.id}
                                className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-shadow"
                            >
                                <img 
                                    src={image.url} 
                                    alt={image.title} 
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default LifeAtSnEnviro;
