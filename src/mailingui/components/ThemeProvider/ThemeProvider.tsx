import React, { FC } from "react";
import { Theme } from "@mailingui/types";
import { ThemeContext } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

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
