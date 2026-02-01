import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TechGrid } from "./components/TechGrid";
import { Trainers } from "./components/Trainers";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="bg-carbon min-h-screen text-white selection:bg-acidGreen selection:text-black">
      {/* Fixed Background Noise/Grain if needed globally */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navigation />

      <Hero />

      <div className="relative z-10 bg-carbon">
        <TechGrid />

        {/* Divider Section */}
        <div className="w-full h-32 flex items-center justify-center overflow-hidden bg-carbon relative border-y border-white/5">
          <div className="absolute inset-0 bg-neonBlue/5 blur-3xl"></div>
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {Array(10)
              .fill("FITNESS&SPA")
              .map((text, i) => (
                <span
                  key={i}
                  className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/5"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>

        <Trainers />
        <Footer />
      </div>
    </main>
  );
}

export default App;
