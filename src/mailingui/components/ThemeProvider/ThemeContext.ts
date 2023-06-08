import { createContext } from "react";
import { theme } from "@mailingui/components";
import { type Theme } from "@mailingui/types";

export const ThemeContext = createContext<Theme>(theme);
