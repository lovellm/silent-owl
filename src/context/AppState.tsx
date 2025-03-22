import { createContext } from "react";

// get dark mode based on saved preference or system preference
const defaultIsDark =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
document.documentElement.classList.toggle("dark", defaultIsDark);

export interface AppState {
  isDark?: boolean;
  isMenuOpen?: boolean;
}
export const defaultAppState: AppState = {
  isDark: defaultIsDark,
};

export type AppStateAction =
  | { type: "setIsDark"; payload: boolean }
  | { type: "setIsMenuOpen"; payload?: boolean };

export function appStateReducer(state: AppState, action: AppStateAction): AppState {
  const { type, payload } = action;
  switch (type) {
    case "setIsDark": {
      localStorage.theme = payload ? "dark" : "light";
      document.documentElement.classList.toggle("dark", payload);
      return { ...state, isDark: payload };
    }
    case "setIsMenuOpen":
      return { ...state, isMenuOpen: payload };
    default:
      return state;
  }
}

export type AppStateContextValue = [AppState, React.ActionDispatch<[action: AppStateAction]>];
const defaultContext: AppStateContextValue = [{}, () => undefined];
export const AppStateContext = createContext<AppStateContextValue>(defaultContext);
