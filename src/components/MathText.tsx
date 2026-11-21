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
  } catch {
    return rawMath;
  }
}

/**
 * Renders simple inline markdown (**bold**, *italic*) inside plain text fragments.
 */
function renderInlineText(plain: string, keyPrefix: string): React.ReactNode[] {
  const tokens = plain.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-bold text-slate-900">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
      return (
        <em key={`${keyPrefix}-i-${i}`} className="italic text-slate-800">
          {token.slice(1, -1)}
        </em>
      );
    }
    return <React.Fragment key={`${keyPrefix}-t-${i}`}>{token}</React.Fragment>;
  });
}

/**
 * Renders a single non-display-math line that may contain inline $...$ LaTeX and **bold** / *italic*.
 */
function renderInlineLine(line: string, lineKey: string): React.ReactNode {
  const parts = line.split(/(\$[^$]+\$)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
      const inner = part.slice(1, -1);
      const html = renderKaTeX(inner, false);
      return (
        <span
          key={`${lineKey}-m-${idx}`}
          className="inline-block px-1 py-0.5 mx-0.5 rounded bg-slate-900/5 text-slate-900 border border-slate-300/50 align-baseline"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }
    return <React.Fragment key={`${lineKey}-p-${idx}`}>{renderInlineText(part, `${lineKey}-${idx}`)}</React.Fragment>;
  });
}

export const MathText: React.FC<MathTextProps> = ({
  text,
  className = '',
  isFormulaBlock = false,
}) => {
  if (isFormulaBlock) {
    const trimmed = text.trim();
    const formula =
      trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4
        ? trimmed.slice(2, -2)
        : trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length >= 2
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

  // First split by display math blocks $$...$$ (supports multiline environments like \begin{aligned})
  const blocks = text.split(/(\$\$[\s\S]+?\$\$)/g);

  return (
    <span className={className}>
      {blocks.map((block, bIdx) => {
        if (block.startsWith('$$') && block.endsWith('$$') && block.length >= 4) {
          const inner = block.slice(2, -2).trim();
          const html = renderKaTeX(inner, true);
          return (
            <span
              key={`dm-${bIdx}`}
              className="block my-3 px-4 py-3 rounded-2xl bg-slate-900/[0.03] border border-slate-200/80 overflow-x-auto text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        // Split remaining text by newlines to preserve multi-line problems / numbered lists
        const lines = block.split('\n');
        return (
          <React.Fragment key={`tb-${bIdx}`}>
            {lines.map((line, lIdx) => {
              const isLastLine = lIdx === lines.length - 1;
              // Skip empty leading/trailing line adjacent to display math
              if (line.trim() === '' && (lIdx === 0 || isLastLine) && blocks.length > 1) {
                return null;
              }
              return (
                <React.Fragment key={`ln-${bIdx}-${lIdx}`}>
                  {renderInlineLine(line, `${bIdx}-${lIdx}`)}
                  {!isLastLine && <br />}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
};
