import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Crosshair, Shield, Activity } from 'lucide-react';
import { Character } from '../types';
import RadarStats from './RadarStats';
import { CornerBrackets, TechDivider } from './ui/TechDecorations';

interface DetailModalProps {
  character: Character | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ character, onClose }) => {
  return (
    <AnimatePresence>
      {character && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-cyber-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] bg-cyber-panel border border-cyber-dim/30 flex flex-col md:flex-row overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <CornerBrackets className="border-cyber-amber" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 text-cyber-dim hover:text-cyber-amber hover:bg-white/5 transition-colors border border-transparent hover:border-cyber-amber/50 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Left: Image Viewer */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-black group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80 z-10" />
                 <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute bottom-8 left-8 z-20">
                     <h2 className="text-6xl md:text-8xl font-bold text-white/10 select-none pointer-events-none absolute -top-16 -left-4 whitespace-nowrap">
                        {character.classType}
                    </h2>
                </div>
            </div>

            {/* Right: Info Panel */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col overflow-y-auto scrollbar-hide bg-cyber-panel relative">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                         <span className="px-2 py-1 bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan text-xs font-mono font-bold">
                            STATUS: ACTIVE
                         </span>
                         <span className="text-cyber-dim font-mono text-sm tracking-wider">
                            ID: {character.serialNumber}
                         </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                        {character.name}
                    </h2>
                    <p className="text-cyber-dim text-sm md:text-base leading-relaxed font-mono border-l-2 border-cyber-dim/30 pl-4">
                        {character.description}
                    </p>
                </div>

                <TechDivider />

                {/* Stats & Radar */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="w-full md:w-1/2">
                         <h3 className="text-cyber-cyan font-mono text-sm mb-4 flex items-center gap-2">
                            <Activity size={16} /> PERFORMANCE METRICS
                         </h3>
                         <RadarStats data={character.stats} />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                         {character.stats.map(s => (
                             <div key={s.subject} className="flex items-center gap-4">
                                 <span className="w-12 text-xs font-mono text-cyber-dim">{s.subject}</span>
                                 <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden">
                                     <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${s.A}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-cyber-cyan shadow-[0_0_8px_rgba(0,240,255,0.5)]"
                                     />
                                 </div>
                                 <span className="w-8 text-right text-xs font-mono text-white">{s.A}</span>
                             </div>
                         ))}
                    </div>
                </div>

                <TechDivider />

                {/* Loadout */}
                <div className="mt-auto">
                    <h3 className="text-cyber-amber font-mono text-sm mb-4 flex items-center gap-2">
                        <Crosshair size={16} /> TACTICAL LOADOUT
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        {character.loadout.map((item, i) => (
                            <div key={i} className="group/item relative p-4 border border-cyber-dim/20 bg-white/5 hover:bg-white/10 hover:border-cyber-amber/50 transition-all cursor-default">
                                <div className="absolute top-0 right-0 p-1 opacity-20">
                                    <Shield size={12} />
                                </div>
                                <div className="text-xs font-mono text-cyber-dim group-hover/item:text-white transition-colors">
                                    SLOT_0{i+1}
                                </div>
                                <div className="text-sm font-bold text-white mt-1">
                                    {item}
                                </div>
                                {/* Corner tick */}
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-transparent group-hover/item:border-cyber-amber transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
