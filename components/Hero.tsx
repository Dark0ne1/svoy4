import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import videoBGAsset from "../assets/video.mp4";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-carbon"
    >
      {/* Background Video Layer */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-carbon/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/60 z-10" />

        {/* Abstract Dark Tech Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        >
          <source src={videoBGAsset} type="video/mp4" />
        </video>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tight leading-none mb-8">
            S<span className="text-red-500">V</span>OY
          </h1>

          <p className="max-w-xl mx-auto font-sans text-gray-400 text-sm md:text-lg leading-relaxed mb-10">
            FITNESS & SPA
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-display font-bold tracking-wider hover:bg-acidGreen hover:text-carbon hover:border-acidGreen transition-all duration-300"
          >
            <span>Узнать стоимость карты</span>
            <div className="w-2 h-2 bg-acidGreen rounded-full group-hover:bg-carbon animate-ping" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-gray-500 tracking-widest">
            Листайте вниз
          </span>
          <ArrowDown className="w-5 h-5 text-acidGreen" />
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};
