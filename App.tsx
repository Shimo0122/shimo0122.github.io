import React, { useState } from 'react';
import Hero from './components/Hero';
import CharacterCard from './components/CharacterCard';
import DetailModal from './components/DetailModal';
import { CHARACTERS } from './constants';
import { Character } from './types';
import { Database } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterSelect = (char: Character) => {
    setSelectedCharacter(char);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen bg-cyber-black text-cyber-text font-sans selection:bg-cyber-cyan selection:text-black">
      <Hero />

      <section id="archives" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="flex items-end justify-between mb-12 border-b border-cyber-dim/20 pb-4">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-4">
                    <Database className="text-cyber-cyan" />
                    OPERATIVE ARCHIVES
                </h2>
                <p className="font-mono text-cyber-dim text-sm tracking-widest">
                    // SELECT UNIT FOR DETAILED ANALYSIS
                </p>
            </div>
            <div className="hidden md:block text-right font-mono text-xs text-cyber-dim opacity-50">
                TOTAL RECORDS: {CHARACTERS.length} <br />
                LAST UPDATE: 2077.10.24
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHARACTERS.map((char, index) => (
            <CharacterCard
              key={char.id}
              character={char}
              index={index}
              onClick={handleCharacterSelect}
            />
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-cyber-dim/20 bg-cyber-panel/30 text-center relative z-10">
         <div className="font-mono text-xs text-cyber-dim">
            <p className="mb-2">PROJECT: ARCHIVE © 2077 // CLASSIFIED MATERIAL</p>
            <p>UNAUTHORIZED ACCESS WILL RESULT IN NEURAL TERMINATION</p>
         </div>
      </footer>

      <DetailModal
        character={selectedCharacter}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default App;