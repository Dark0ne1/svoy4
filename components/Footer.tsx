import React from "react";
import { Hexagon, Instagram, Twitter, Mail, Square } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-carbon pt-20 pb-10 border-t border-white/10 relative overflow-hidden"
    >
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h1 className="text-[15vw] font-display font-black text-white/5 leading-none whitespace-nowrap translate-y-[20%]">
          SVOY SVOY
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Square className="w-8 h-8 text-acidGreen stroke-[1.5]" />
              <span className="font-display font-bold text-2xl tracking-tighter text-white">
                S<span className="text-red-500">V</span>OY
              </span>
            </div>
            <p className="font-sans text-gray-500 max-w-sm mb-8">
              Премиальное пространство для тех, кто не согласен на среднее.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-acidGreen hover:border-acidGreen transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
              Мы находимся
            </h4>
            <p className="text-gray-400 font-sans text-sm leading-loose">
              Воронеж
              <br />
              Ул. Космонавтов, 17Б
              <br />
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest mb-6">
              Часы работы
            </h4>
            <p className="text-gray-400 font-sans text-sm leading-loose">
              Пнд - Птн: 06:00 - 23:00
              <br />
              Сбт - Вскр: 08:00 - 22:00
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="font-mono text-[10px] text-gray-600 uppercase">
            © 2025 SVOY FITNESS&SPA.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="font-mono text-[10px] text-gray-600 hover:text-white uppercase"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-[10px] text-gray-600 hover:text-white uppercase"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
