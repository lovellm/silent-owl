import { useContext } from "react";
import { AppStateContext } from "./AppState";

export default function useAppState() {
  return useContext(AppStateContext);
}
