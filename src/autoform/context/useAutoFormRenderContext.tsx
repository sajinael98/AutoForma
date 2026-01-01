import { useContext } from "react";
import {
  AutoFormRenderContext,
  AutoFormRenderContextProps,
} from "./AutoFormRenderContext";

export const useAutoFormRenderContext = (): AutoFormRenderContextProps => {
  const ctx = useContext(AutoFormRenderContext);
  if (!ctx) {
    throw new Error(
      "useAutoFormRenderContext must be used within AutoFormRenderContextProvider"
    );
  }
  return ctx;
};
