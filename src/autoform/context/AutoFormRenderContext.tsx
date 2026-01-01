import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { Layout, UiConfig, UpdateFieldSchema } from "../types";

export interface AutoFormRenderContextProps {
  layout?: Layout;
  uiConfig?: UiConfig;
  updateFieldSchema?: UpdateFieldSchema;
}

export const AutoFormRenderContext = createContext<AutoFormRenderContextProps | null>(
  null
);



export const AutoFormRenderContextProvider = ({
  children,
  layout = "vertical",
  uiConfig,
  updateFieldSchema,
}: PropsWithChildren<AutoFormRenderContextProps>) => {
  const value = useMemo(
    () => ({
      layout,
      uiConfig,
      updateFieldSchema,
    }),
    [layout, uiConfig, updateFieldSchema]
  );

  return (
    <AutoFormRenderContext.Provider value={value}>
      {children}
    </AutoFormRenderContext.Provider>
  );
};
