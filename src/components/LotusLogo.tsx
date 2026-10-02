import React from 'react';

interface LotusLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold' | 'monochrome';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function LotusLogo({
  className = '',
  variant = 'gold',
  showSubtitle = true,
  size = 'md'
}: LotusLogoProps) {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  const primaryColor = isLight ? '#FFFFFF' : isDark ? '#0B3D46' : '#0B3D46';
  const goldColor = isLight ? '#D8A95D' : '#D8A95D';
  const subtextColor = isLight ? 'rgba(255, 255, 255, 0.6)' : isDark ? '#6B7E8C' : '#6B7E8C';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const titleSizes = {
    sm: 'text-base tracking-wide',
    md: 'text-lg tracking-wide',
    lg: 'text-2xl sm:text-3xl tracking-wide'
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.28em]'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Lotus & PR Monogram Vector Emblem */}
      <svg
        className={`${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Lotus Petals */}
        <g stroke={goldColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Central Petal */}
          <path
            d="M40 8 C40 8, 48 24, 40 38 C32 24, 40 8, 40 8 Z"
            fill={goldColor}
            fillOpacity="0.2"
          />
          {/* Left Petal */}
          <path
            d="M40 38 C33 28, 22 20, 20 28 C18 36, 32 40, 40 38 Z"
            fill={goldColor}
            fillOpacity="0.15"
          />
          {/* Right Petal */}
          <path
            d="M40 38 C47 28, 58 20, 60 28 C62 36, 48 40, 40 38 Z"
            fill={goldColor}
            fillOpacity="0.15"
          />
          {/* Lower Outer Left */}
          <path
            d="M40 38 C28 36, 12 36, 14 46 C16 52, 32 44, 40 38 Z"
            fill={goldColor}
            fillOpacity="0.1"
          />
          {/* Lower Outer Right */}
          <path
            d="M40 38 C52 36, 68 36, 66 46 C64 52, 48 44, 40 38 Z"
            fill={goldColor}
            fillOpacity="0.1"
          />
        </g>

        {/* PR Monogram */}
        <text
          x="40"
          y="68"
          textAnchor="middle"
          fill={goldColor}
          fontFamily="serif"
          fontWeight="bold"
          fontSize="26"
          letterSpacing="1"
        >
          PR
        </text>

        {/* Subtle Decorative Underline Arch */}
        <path
          d="M20 74 Q40 78 60 74"
          stroke={goldColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-heading font-semibold uppercase transition-colors ${titleSizes[size]}`}
          style={{ color: primaryColor }}
        >
          Roza Grand
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-semibold uppercase mt-0.5 ${subtitleSizes[size]}`}
            style={{ color: subtextColor }}
          >
            Guest House · Auroville
          </span>
        )}
      </div>
    </div>
  );
}
