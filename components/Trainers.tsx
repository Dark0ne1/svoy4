import React from "react";
import { motion } from "framer-motion";
import { TRAINERS } from "../constants";

export const Trainers: React.FC = () => {
  return (
    <section
      id="trainers"
      className="py-24 bg-carbon overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          НАША КОМАНДА
        </h2>
        <p className="font-mono text-neonBlue text-sm tracking-widest">
          Элитные тренеры и инструкторы
        </p>
      </div>

      <div className="relative w-full overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className="flex gap-8 w-max px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] pb-12">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative w-[280px] md:w-[350px] h-[450px] flex-shrink-0 bg-gunmetal overflow-hidden border border-white/5 hover:border-neonBlue/50 transition-all duration-500 snap-center"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent opacity-90" />
              </div>

              {/* Info Layer */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>

                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="font-mono text-xs text-gray-400 mb-4">
                  {trainer.role} <span className="text-white/20 mx-2">|</span>{" "}
                  {trainer.specialty}
                </p>

                <button className="w-full py-3 bg-white/5 backdrop-blur border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-neonBlue hover:text-black transition-colors">
                  Записаться на тренировку
                </button>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
