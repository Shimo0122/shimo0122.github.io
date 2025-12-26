export interface Stat {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Character {
  id: string;
  name: string;
  classType: 'ASSAULT' | 'RECON' | 'HEAVY' | 'SUPPORT';
  serialNumber: string;
  description: string;
  image: string;
  stats: Stat[];
  loadout: string[];
}
