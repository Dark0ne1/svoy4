import React from "react";
import { motion } from "framer-motion";
import { TECH_ITEMS } from "../constants";
import { ArrowUpRight } from "lucide-react";

export const TechGrid: React.FC = () => {
  return (
    <section id="tech" className="relative py-24 bg-carbon overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-acidGreen/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
              НАПРАВЛЕНИЯ
            </h2>
            <p className="font-mono text-acidGreen text-sm tracking-widest">
              Все в одном месте
            </p>
          </div>
          <div className="mt-4 md:mt-0 max-w-sm text-right">
            <p className="text-gray-400 text-sm">
              Присоединяйтесь к нам и начните свой путь к здоровому образу
              жизни!
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
          {TECH_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-gunmetal border border-white/5 hover:border-acidGreen/50 transition-colors duration-500 ${
                item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-md p-2 rounded border border-white/10 group-hover:border-acidGreen/30 transition-colors">
                    <item.icon className="w-6 h-6 text-white group-hover:text-acidGreen transition-colors" />
                  </div>
                  <span className="font-mono text-xs text-white/50 border border-white/10 px-2 py-1 rounded">
                    {item.id}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 group-hover:text-acidGreen transition-colors">
                    {item.title}
                  </h3>
                  <div className="h-px w-12 bg-white/20 mb-4 group-hover:w-full group-hover:bg-acidGreen transition-all duration-500" />
                  <p className="font-sans text-gray-300 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Stats Row */}
                  <div className="flex gap-4">
                    {item.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-mono text-[10px] text-gray-500 uppercase">
                          {stat.label}
                        </div>
                        <div className="font-display text-white">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Reveal Icon */}
                <div className="absolute top-8 right-8 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-acidGreen" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
