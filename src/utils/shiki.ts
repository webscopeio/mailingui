import {
  getHighlighter as getHighlighterShiki,
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
  lang: Lang
) {
  return highlighter.codeToHtml(code, { lang, theme });
}

/**
 * Transforms HTML to be consumed by Nextra components
 * @param input Shiki syntax-highlighted HTML
 * @returns Nextra-ready HTML
 */
export function transformHtmlCode(input: string) {
  return input
    .replaceAll("</code>", "")
    .replaceAll("<code>", "")
    .replace(/<pre [^>]*>/gi, "")
    .replace("</pre>", "")
    .replaceAll('<span class="line"></span>', '<span class="line"> </span>');
}
