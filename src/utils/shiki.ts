import {
  getHighlighter as getHighlighterShiki,
  renderToHtml,
  type Highlighter,
  type Lang,
  type Theme,
} from "shiki";

/** ✅ Config */
const theme: Theme = "css-variables";
const langs: Lang[] = ["html", "tsx"];

const highlighterCache = new Map<string, Promise<Highlighter>>();

export async function getHighlighter() {
  const key = [theme, ...langs].join("-");
  const highlighter = highlighterCache.get(key);
  if (highlighter) return await highlighter;

  const highlighterPromise = getHighlighterShiki({
    theme,
    langs,
  });

  highlighterCache.set(key, highlighterPromise);
  return await highlighterPromise;
}

export async function highlight(
  highlighter: Highlighter,
  code: string,
  lang: Lang,
) {
  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
    includeExplanation: false,
  });
  /* ⚠️ Optional: Custom rendering of code blocks */
  return renderToHtml(tokens, {
    elements: {
      pre({ children }) {
        return `<pre class="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-font-medium nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4" data-theme="default" data-language="${lang}">${children}</pre>`;
      },
      code({ children }) {
        return `<code class="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10" data-theme="default" data-language="${lang}">${children}</code>`;
      },
    },
  });
}
