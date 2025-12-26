import { Character } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'c1',
    name: 'SPECTRE-01',
    classType: 'ASSAULT',
    serialNumber: 'SYS-A-992',
    description: 'High-mobility tactical unit designed for urban warfare. Equipped with experimental optical camouflage prototypes.',
    image: 'https://picsum.photos/seed/cyber1/800/1000',
    stats: [
      { subject: 'ATK', A: 90, fullMark: 100 },
      { subject: 'DEF', A: 50, fullMark: 100 },
      { subject: 'SPD', A: 95, fullMark: 100 },
      { subject: 'TECH', A: 70, fullMark: 100 },
      { subject: 'RNG', A: 40, fullMark: 100 },
    ],
    loadout: ['Plasma Cutter', 'Stealth Cloak', 'Frag. Grenades'],
  },
  {
    id: 'c2',
    name: 'BASTION-X',
    classType: 'HEAVY',
    serialNumber: 'SYS-H-004',
    description: 'Heavy weapons platform with reinforced plating. Serves as a mobile cover unit for squad advances.',
    image: 'https://picsum.photos/seed/cyber2/800/1000',
    stats: [
      { subject: 'ATK', A: 75, fullMark: 100 },
      { subject: 'DEF', A: 100, fullMark: 100 },
      { subject: 'SPD', A: 30, fullMark: 100 },
      { subject: 'TECH', A: 40, fullMark: 100 },
      { subject: 'RNG', A: 60, fullMark: 100 },
    ],
    loadout: ['Rotary Cannon', 'Aegis Shield', 'Mortar'],
  },
  {
    id: 'c3',
    name: 'WRAITH-7',
    classType: 'RECON',
    serialNumber: 'SYS-R-771',
    description: 'Long-range surveillance and elimination specialist. Neural link capable of processing multiple drone feeds.',
    image: 'https://picsum.photos/seed/cyber3/800/1000',
    stats: [
      { subject: 'ATK', A: 85, fullMark: 100 },
      { subject: 'DEF', A: 30, fullMark: 100 },
      { subject: 'SPD', A: 80, fullMark: 100 },
      { subject: 'TECH', A: 90, fullMark: 100 },
      { subject: 'RNG', A: 100, fullMark: 100 },
    ],
    loadout: ['Sniper Rifle', 'Spotter Drone', 'EMP Mine'],
  },
  {
    id: 'c4',
    name: 'AEON-PULSE',
    classType: 'SUPPORT',
    serialNumber: 'SYS-S-102',
    description: 'Field repair and medical synth. Generates localized energy fields to boost squad performance.',
    image: 'https://picsum.photos/seed/cyber4/800/1000',
    stats: [
      { subject: 'ATK', A: 40, fullMark: 100 },
      { subject: 'DEF', A: 60, fullMark: 100 },
      { subject: 'SPD', A: 65, fullMark: 100 },
      { subject: 'TECH', A: 100, fullMark: 100 },
      { subject: 'RNG', A: 50, fullMark: 100 },
    ],
    loadout: ['Nano-Injector', 'Force Field', 'Data Hack'],
  },
  {
    id: 'c5',
    name: 'VALKYRIE',
    classType: 'ASSAULT',
    serialNumber: 'SYS-A-205',
    description: 'Airborne assault unit. Jump-jets allow for verticality and rapid repositioning.',
    image: 'https://picsum.photos/seed/cyber5/800/1000',
    stats: [
      { subject: 'ATK', A: 88, fullMark: 100 },
      { subject: 'DEF', A: 45, fullMark: 100 },
      { subject: 'SPD', A: 92, fullMark: 100 },
      { subject: 'TECH', A: 60, fullMark: 100 },
      { subject: 'RNG', A: 55, fullMark: 100 },
    ],
    loadout: ['Thermal Lance', 'Jump Jets', 'Flashbang'],
  },
    {
    id: 'c6',
    name: 'TITAN-CORE',
    classType: 'HEAVY',
    serialNumber: 'SYS-H-880',
    description: 'Experimental siege unit fueled by an unstable reactor core. High risk, high yield.',
    image: 'https://picsum.photos/seed/cyber6/800/1000',
    stats: [
      { subject: 'ATK', A: 95, fullMark: 100 },
      { subject: 'DEF', A: 85, fullMark: 100 },
      { subject: 'SPD', A: 20, fullMark: 100 },
      { subject: 'TECH', A: 50, fullMark: 100 },
      { subject: 'RNG', A: 30, fullMark: 100 },
    ],
    loadout: ['Core Beam', 'Heavy Plating', 'Rad. Aura'],
  }
];

// === RESOURCE FOLDER / ASSET CONFIGURATION ===
// Replace these URLs with your local images or hosted assets
export const ASSETS = {
    // Top Left Logo Icon (Optional if you want to replace the lucide icon)
    logo: '', 
    
    // QR Code for Pre-registration/Official Account (Bottom Right)
    qrCode: 'https://s2.loli.net/2025/12/08/bcKA83FISJGWfQ7.png',
    
    // Age Rating / Advisory Image (Bottom Left - e.g., CADPA 12+ or 16+)
    // Using a placeholder that looks like a generic age rating badge. 
    // Replace with actual CADPA image: e.g. 'assets/cadpa_16.png'
    ageRating: 'https://s2.loli.net/2025/12/08/IpAi8M9BbDoYmg4.png',
};