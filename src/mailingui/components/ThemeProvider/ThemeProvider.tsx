import React, { createContext, FC, useContext, useState } from "react";
import { type Theme } from "@mailingui/themes";

const ThemeContext = createContext<Partial<Theme>>({});

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme: themeProp,
  children,
}) => {
  const [theme, _setTheme] = useState<Theme>(themeProp);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

function useTheme(): Partial<Theme> {
  return useContext(ThemeContext);
}

export { ThemeProvider, type Theme, ThemeContext, useTheme };
