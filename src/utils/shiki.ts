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
