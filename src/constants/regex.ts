export const regex = {
  preferColorScheme:
    /@media\s*\(prefers-color-scheme:\s*dark\)\s*{([\s\S]*?{[\s\S]*?})\s*}/g,
  colorScheme: /color-scheme:\s*(light\s*dark)\s*;/g,
  supportedColorScheme: /supported-color-schemes:\s*(light\s*dark)\s*;/g,
};
