import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { lifeImages, categories } from '../data/lifeImages';

const LifeAtSnEnviro = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

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
                                className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-sm hover:shadow-2xl transition-shadow cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img 
                                    src={image.url} 
                                    alt={image.title} 
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="absolute top-4 right-4 bg-emerald-500/90 p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <ZoomIn size={20} className="text-white" />
                                    </div>
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white text-lg font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        {image.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </button>
                        <motion.div 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage.url} 
                                alt={selectedImage.title} 
                                className="w-full h-full object-contain rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                                <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-2 block">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-white text-2xl font-bold">
                                    {selectedImage.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LifeAtSnEnviro;
