import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { Layout, UiConfig, UpdateFieldSchema } from "../types";

export interface AutoFormRenderContextProps<TCustom extends string = never> {
  layout?: Layout;
  uiConfig?: UiConfig<TCustom>;
  updateFieldSchema?: UpdateFieldSchema<TCustom>;
}

export const AutoFormRenderContext =
  createContext<AutoFormRenderContextProps<any> | null>(null);

export const AutoFormRenderContextProvider = <TCustom extends string = never>({
  children,
  layout = "vertical",
  uiConfig,
  updateFieldSchema,
}: PropsWithChildren<AutoFormRenderContextProps<TCustom>>) => {
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
