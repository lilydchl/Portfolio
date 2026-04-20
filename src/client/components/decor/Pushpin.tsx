import type { CSSProperties } from 'react';

type PushpinProps = {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
};

export function Pushpin({ className = '', color = '#E8469E', size = 28, style = {} }: PushpinProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.3}
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden
    >
      <ellipse cx="14" cy="34" rx="6" ry="2" fill="black" opacity="0.1" />
      <line x1="14" y1="18" x2="14" y2="33" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="12" r="10" fill={color} />
      <circle cx="14" cy="12" r="8" fill={color} opacity="0.9" />
      <ellipse cx="11" cy="9" rx="3.5" ry="2.5" fill="white" opacity="0.4" />
      <circle cx="14" cy="12" r="9.5" stroke="black" strokeWidth="0.3" opacity="0.15" />
    </svg>
  );
}

export const pushpinColors = {
  rose: '#E8469E',
  roseClaire: '#F0A0C0',
  rouge: '#D94040',
  corail: '#E87461',
  jaune: '#F0C040',
  bleu: '#6BA3D6',
  vert: '#7BBF7B',
  blanc: '#F5F0EA',
  or: '#D4A545',
};
