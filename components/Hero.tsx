import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, ChevronDown, ScanLine } from 'lucide-react';
import { CornerBrackets } from './ui/TechDecorations';
import SciFiBackground from './SciFiBackground';
import { ASSETS } from '../constants'; // Import asset config

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target Date: January 1, 2026
    const targetDate = new Date('2026-01-01T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Stop timer if date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run immediately to avoid initial delay
    updateTimer();
    
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const handleScroll = () => {
    const archives = document.getElementById('archives');
    if (archives) {
      archives.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-black">
      {/* Dynamic Code-Generated Background */}
      <SciFiBackground />

      {/* Header/Nav - ENLARGED */}
      <div className="absolute top-0 w-full p-8 md:p-10 flex justify-between items-center z-20 border-b border-cyber-dim/20 backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-4 text-cyber-cyan">
          <Cpu className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
          <span className="font-mono text-xl md:text-2xl tracking-[0.2em] font-bold shadow-cyan-500/50 drop-shadow-md">
            PROJECT: ARCHIVE
          </span>
        </div>
        <div className="hidden md:flex gap-12 font-mono text-sm md:text-base text-cyber-dim font-bold tracking-wider">
            <span className="hover:text-cyber-cyan cursor-pointer transition-colors hover:scale-110 transform duration-200">DATABASE</span>
            <span className="hover:text-cyber-cyan cursor-pointer transition-colors hover:scale-110 transform duration-200">FACTIONS</span>
            <span className="hover:text-cyber-cyan cursor-pointer transition-colors hover:scale-110 transform duration-200">SYSTEMS</span>
            <span className="text-cyber-amber animate-pulse cursor-pointer border border-cyber-amber/50 px-4 py-1 rounded-sm hover:bg-cyber-amber/10 transition-colors">
              PRE-REGISTER
            </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center relative max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block border border-cyber-cyan/30 px-4 py-1 mb-6 rounded-sm bg-cyber-cyanDim backdrop-blur-md">
            <span className="font-mono text-sm text-cyber-cyan tracking-[0.3em]">SYSTEM VERSION 2.0.4 - ONLINE</span>
          </div>

          <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-bold text-white tracking-tighter relative glitch-hover cursor-default leading-none">
            <span className="relative z-10">ARCHIVE</span>
            <span className="absolute top-0 left-0 -ml-[2px] text-cyber-cyan opacity-50 w-full h-full animate-[glitch_2s_infinite] mix-blend-screen" aria-hidden="true">ARCHIVE</span>
            <span className="absolute top-0 left-0 ml-[2px] text-cyber-amber opacity-50 w-full h-full animate-[glitch_3s_infinite] mix-blend-screen" aria-hidden="true">ARCHIVE</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-cyber-dim font-mono tracking-widest uppercase">
            Humanity is Obsolete. Upload your consciousness.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           className="relative inline-flex gap-4 md:gap-10 p-8 md:p-10 border border-cyber-dim/30 bg-cyber-panel/50 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
            <CornerBrackets />
            <CountdownUnit value={formatTime(timeLeft.days)} label="DAYS" />
            <CountdownUnit value={formatTime(timeLeft.hours)} label="HRS" />
            <CountdownUnit value={formatTime(timeLeft.minutes)} label="MIN" />
            <CountdownUnit value={formatTime(timeLeft.seconds)} label="SEC" />
        </motion.div>
      </div>

       {/* === BOTTOM LEFT: AGE RATING & SYSTEM INFO === */}
       <div className="absolute bottom-8 left-8 hidden md:flex items-end gap-6 z-20">
          {/* Age Rating Image */}
          <div className="relative group">
            <img 
              src={ASSETS.ageRating} 
              alt="Age Rating" 
              className="w-16 h-20 md:w-20 md:h-24 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
            />
          </div>

          <div className="flex flex-col gap-2 font-mono text-[10px] text-cyber-dim border-l border-cyber-dim/30 pl-4 mb-2">
              <div className="flex items-center gap-2">
                  <Terminal size={12} />
                  <span>CONNECTING TO SECURE SERVER...</span>
              </div>
              <div>LATENCY: 12ms</div>
              <div>ENCRYPTION: AES-4096</div>
          </div>
       </div>

       {/* === BOTTOM RIGHT: QR CODE & PRE-REG === */}
       <div className="absolute bottom-8 right-8 hidden md:flex items-end gap-4 z-20">
          <div className="text-right">
             <div className="text-cyber-amber font-bold font-mono text-sm tracking-wider mb-1">JOIN THE NETWORK</div>
             <div className="text-cyber-dim text-[10px] font-mono">SCAN TO INITIALIZE</div>
          </div>
          <div className="p-2 bg-white rounded-sm border-2 border-cyber-dim hover:border-cyber-cyan transition-colors duration-300 relative group cursor-pointer">
              <img 
                src={ASSETS.qrCode} 
                alt="Scan to Pre-register" 
                className="w-20 h-20 object-contain"
              />
              {/* Scanline overlay for QR */}
              <div className="absolute inset-0 bg-cyber-cyan/10 pointer-events-none group-hover:bg-transparent transition-colors" />
              <ScanLine className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyber-black opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
       </div>

       {/* Scroll Indicator */}
       <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={handleScroll}
       >
          <span className="text-[10px] font-mono text-cyber-cyan tracking-[0.2em] mb-1 group-hover:text-white transition-colors bg-black/50 px-2 rounded-sm">
            INITIALIZE_SYSTEM
          </span>
          <ChevronDown className="w-6 h-6 text-cyber-cyan group-hover:text-white transition-colors" />
       </motion.div>

    </section>
  );
};

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl md:text-5xl font-mono font-bold text-cyber-cyan tabular-nums tracking-widest shadow-cyber-cyan drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
      {value}
    </div>
    <div className="text-[10px] md:text-xs text-cyber-dim font-bold tracking-[0.2em] mt-2">{label}</div>
  </div>
);

export default Hero;