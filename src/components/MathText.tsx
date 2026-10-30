import React from 'react';

interface MathTextProps {
  text: string;
  className?: string;
  isFormulaBlock?: boolean;
}

/**
 * Formats LaTeX-style inline math ($...$) into clean, textbook-grade typography
 * without external heavy font dependencies, ensuring 100% offline PWA reliability.
 */
function formatMathSegment(rawMath: string): React.ReactNode {
  const cleaned = rawMath
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
    .replace(/\\implies/g, '⇒')
    .replace(/\\quad/g, '  ')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\dots/g, '…')
    .replace(/\\cdots/g, '⋯')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\cdot/g, '·')
    .replace(/\\neq/g, '≠')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\pm/g, '±');

  // Tokenize letters vs numbers/operators so variables get classic italic math serif styling
  const tokens = cleaned.split(/([a-zA-Z]+)/g);

  return (
    <span className="font-mono font-bold tracking-wide inline-flex items-baseline">
      {tokens.map((tok, i) => {
        if (/^[a-zA-Z]+$/.test(tok)) {
          return (
            <span key={i} className="font-serif italic font-bold px-[1px]">
              {tok}
            </span>
          );
        }
        return <span key={i}>{tok}</span>;
      })}
    </span>
  );
}

export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  isFormulaBlock = false,
}) => {
  // Split by $...$ segments
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          const inner = part.slice(1, -1);
          if (isFormulaBlock) {
            return <React.Fragment key={idx}>{formatMathSegment(inner)}</React.Fragment>;
          }
          return (
            <span
              key={idx}
              className="inline-block px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-900/5 text-slate-900 border border-slate-300/60 leading-none"
            >
              {formatMathSegment(inner)}
            </span>
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </span>
  );
};
