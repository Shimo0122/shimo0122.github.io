import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Stat } from '../types';

interface RadarStatsProps {
  data: Stat[];
}

const RadarStats: React.FC<RadarStatsProps> = ({ data }) => {
  return (
    <div className="w-full h-64 relative">
       {/* Tech overlay behind chart */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
         <div className="w-48 h-48 border border-cyber-cyan rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: '#00f0ff', fontSize: 12, fontFamily: 'JetBrains Mono' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Stats"
            dataKey="A"
            stroke="#00f0ff"
            strokeWidth={2}
            fill="#00f0ff"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarStats;
