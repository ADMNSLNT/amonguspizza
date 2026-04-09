import { MapPin, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

function HexLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-3"
    >
      {/* Hexagon vertices */}
      {(() => {
        const points = [
          [50, 5],   // top
          [90, 25],
          [90, 75],
          [50, 95],
          [10, 75],
          [10, 25],
        ];

        const edges = [];

        // Generate full graph (K6)
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            edges.push(
              <line
                key={`${i}-${j}`}
                x1={points[i][0]}
                y1={points[i][1]}
                x2={points[j][0]}
                y2={points[j][1]}
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
            );
          }
        }

        return edges;
      })()}

      {/* Outer hexagon (for structure) */}
      <path
        d="M50 5L90 25L90 75L50 95L10 75L10 25Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />

      {/* Nodes */}
      <circle cx="50" cy="5" r="3" fill="currentColor" />
      <circle cx="90" cy="25" r="3" fill="currentColor" />
      <circle cx="90" cy="75" r="3" fill="currentColor" />
      <circle cx="50" cy="95" r="3" fill="currentColor" />
      <circle cx="10" cy="75" r="3" fill="currentColor" />
      <circle cx="10" cy="25" r="3" fill="currentColor" />
    </svg>
  );
}

function CrewmateIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 318 410" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M272.238 141.651C272.238 63.4214 208.817 0 130.587 0C52.3579 0 0 63.4214 0 141.651V322.254C0 370.73 39.2937 410.024 87.7701 410.024C136.247 410.024 141.651 370.73 141.651 370.73V322.254H180.945V370.73C180.945 370.73 186.349 410.024 234.826 410.024C283.302 410.024 272.238 370.73 272.238 322.254V141.651Z" fill="#C51111"/>
      <path d="M317.43 141.651V282.961C317.43 310.428 295.165 332.693 267.698 332.693H252.174V91.9208H267.698C295.165 91.9208 317.43 114.186 317.43 141.651Z" fill="#9E1111"/>
      <path d="M234.825 80.5238H93.1746C65.7081 80.5238 43.4444 102.787 43.4444 130.254V180.016C43.4444 207.482 65.7081 229.746 93.1746 229.746H234.825C262.292 229.746 284.555 207.482 284.555 180.016V130.254C284.555 102.787 262.292 80.5238 234.825 80.5238Z" fill="#93C5D6" stroke="#FFFFFF" strokeWidth="15"/>
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="starfield"></div>
      
      {/* Header / Hero */}
      <header className="pt-24 pb-16 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-crewmate-red/20 border border-crewmate-red/50 mb-6 shadow-[0_0_15px_rgba(197,17,17,0.5)]">
            <CrewmateIcon className="w-12 h-12" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Among Us Pizza
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-display max-w-2xl mx-auto">
            La mejor pizza de la galaxia. Aquí no hay impostores.
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 relative z-10 flex flex-col gap-12">
        
        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          <motion.a 
            href="https://maps.app.goo.gl/u3j2CPC3Qxsaxp9R6"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover:bg-space-800/80 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full bg-crewmate-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="text-crewmate-cyan w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-semibold mb-2">Ubicación</h2>
            <p className="text-gray-400">Encuéntranos en el mapa</p>
            <p className="text-sm text-crewmate-cyan mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              Navegar a la pizzería →
            </p>
          </motion.a>

          <motion.div 
            className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-full bg-crewmate-yellow/20 flex items-center justify-center mb-4">
              <Clock className="text-crewmate-yellow w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-semibold mb-2">Horario</h2>
            <p className="text-gray-400">Todos los días</p>
            <p className="text-xl font-mono mt-2 text-white">13:00 - 20:00</p>
          </motion.div>
        </div>

        {/* Menu Section */}
        <section className="max-w-4xl mx-auto w-full glass-panel rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <Star className="text-crewmate-yellow w-8 h-8" />
            Nuestro Menú
            <Star className="text-crewmate-yellow w-8 h-8" />
          </h2>
          
          <div className="bg-space-900/50 border border-white/10 rounded-2xl p-4 md:p-8 flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
            {/* Using a placeholder for the menu image. The user can replace this with their actual uploaded image. */}
            <img 
              src="https://maps.app.goo.gl/uUzm69ecccXrrzds8" 
              alt="Menú de Among Us Pizza" 
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-space-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <a 
            href="https://www.instagram.com/hex_laboratories/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center group hover:text-crewmate-cyan transition-colors"
          >
            <HexLogo />
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 group-hover:text-crewmate-cyan/70 transition-colors">Creado por</span>
              <span className="font-display text-3xl font-bold tracking-wider">HexLabs</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
