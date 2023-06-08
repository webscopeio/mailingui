import React, { FC } from "react";
import { Theme } from "@mailingui/types";
import { theme as defaultTheme, ThemeContext } from "@mailingui/components";

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  if (!theme) {
    theme = defaultTheme;
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, type Theme };
