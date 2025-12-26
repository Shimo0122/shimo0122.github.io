import React from 'react';

export const CornerBrackets: React.FC<{ className?: string }> = ({ className = "" }) => (
  <>
    {/* Top Left */}
    <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan ${className}`} />
    {/* Top Right */}
    <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan ${className}`} />
    {/* Bottom Left */}
    <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyber-cyan ${className}`} />
    {/* Bottom Right */}
    <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan ${className}`} />
  </>
);

export const TechDivider: React.FC = () => (
    <div className="flex items-center gap-2 w-full my-4 opacity-50">
        <div className="h-[1px] bg-cyber-cyan flex-grow"></div>
        <div className="text-[10px] font-mono text-cyber-cyan">///</div>
        <div className="h-[1px] bg-cyber-cyan w-12"></div>
    </div>
)
