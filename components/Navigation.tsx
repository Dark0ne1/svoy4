import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, Square } from "lucide-react";
import { NAV_ITEMS } from "../constants";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/0 ${
          isScrolled
            ? "bg-carbon/80 backdrop-blur-md border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Square className="w-8 h-8 text-acidGreen stroke-[1.5] group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-display font-bold text-2xl tracking-tighter text-white">
              S<span className="text-red-500">V</span>OY FINTESS & SPA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs font-bold tracking-widest text-gray-400 hover:text-acidGreen transition-colors relative group"
              >
                <span className="group-hover:opacity-0 transition-opacity duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 top-0 text-acidGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </a>
            ))}
            <button className="bg-white/10 hover:bg-acidGreen hover:text-carbon text-white px-6 py-2 font-display text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-acidGreen transition-all duration-300 clip-path-slant">
              Гостевой визит
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-acidGreen transition-colors"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-carbon flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-acidGreen"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="font-display text-3xl font-bold text-white hover:text-acidGreen tracking-tighter"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
