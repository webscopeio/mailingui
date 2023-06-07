import { createContext } from "react";
import { Theme } from "./ThemeProvider";

export const ThemeContext = createContext<Theme>({
  primaryColor: "#2563EB",
});
