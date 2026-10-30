import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  isFormulaBlock?: boolean;
}

/**
 * Renders LaTeX math with KaTeX, falling back to clean text if rendering encounters errors.
 */
function renderKaTeX(rawMath: string, displayMode: boolean): string {
  try {
    return katex.renderToString(rawMath, {
      displayMode,
      throwOnError: false,
      output: 'htmlAndMathml',
      strict: false,
    });
  } catch (err) {
    return rawMath;
  }
}

export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  isFormulaBlock = false,
}) => {
  if (isFormulaBlock) {
    // If the whole string is meant as a formula block, strip outer $ if present and render display math
    const trimmed = text.trim();
    const formula =
      trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length >= 2
        ? trimmed.slice(1, -1)
        : trimmed;

    const html = renderKaTeX(formula, true);
    return (
      <span
        className={`katex-formula-block inline-block ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Split by $...$ segments for inline text
  const parts = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          const inner = part.slice(1, -1);
          const html = renderKaTeX(inner, false);
          return (
            <span
              key={idx}
              className="inline-block px-1 py-0.5 mx-0.5 rounded bg-slate-900/5 text-slate-900 border border-slate-300/50 align-baseline"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }
        return <span key={idx}>{part}</span>;
      })}
    </span>
  );
};
