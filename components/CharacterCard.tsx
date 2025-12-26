import React from 'react';
import { motion } from 'framer-motion';
import { Character } from '../types';
import { Scan } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
  index: number;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(character)}
      className="group relative h-[400px] w-full cursor-pointer overflow-hidden bg-cyber-panel border border-cyber-dim/20 hover:border-cyber-cyan/60 transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={character.image}
          alt={character.name}
          className="h-full w-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
        {/* Hover decorative elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyber-cyan">
             <Scan size={20} />
        </div>

        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-mono px-2 py-0.5 border ${
                    character.classType === 'ASSAULT' ? 'border-red-500 text-red-500' :
                    character.classType === 'HEAVY' ? 'border-orange-500 text-orange-500' :
                    character.classType === 'RECON' ? 'border-green-500 text-green-500' :
                    'border-blue-500 text-blue-500'
                }`}>
                    {character.classType}
                </span>
                <span className="text-[10px] font-mono text-cyber-dim">{character.serialNumber}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 tracking-wide group-hover:text-cyber-cyan transition-colors">{character.name}</h3>
            <div className="w-0 group-hover:w-full h-[2px] bg-cyber-cyan transition-all duration-300 ease-out"></div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-dim/30 group-hover:border-cyber-cyan transition-colors duration-300" />
    </motion.div>
  );
};

export default CharacterCard;
