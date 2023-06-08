import { useContext } from "react";
import { Theme } from "../types";
import { ThemeContext } from "@mailingui/components";

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
