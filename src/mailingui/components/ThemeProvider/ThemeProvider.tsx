import React, { FC, CSSProperties } from "react";
import { ThemeContext } from "./ThemeContext";

type Theme = {
  primaryColor: CSSProperties["color"];
};

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  if (!theme) {
    theme = { primaryColor: "#2563EB" };
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, type Theme };
