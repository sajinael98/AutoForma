import { createContext, useContext } from "react";
import { CustomRenderersConfig } from "@/fields/renderer.types";

export const RenderersContext = createContext<CustomRenderersConfig<any> | null>(null);

export const RenderersProvider = <
  TValues extends Record<string, any> = Record<string, any>
>({
  children,
  value,
}: {
  children: React.ReactNode;
  value: CustomRenderersConfig<TValues>;
}) => {
  return (
    <RenderersContext.Provider value={value}>
      {children}
    </RenderersContext.Provider>
  );
};

export const useRenderers = <
  TValues extends Record<string, any> = Record<string, any>
>() => {
  const context = useContext(RenderersContext) as CustomRenderersConfig<TValues> | null;
  if (!context) {
    throw new Error("useRenderers must be used inside <RenderersProvider>");
  }
  return context;
};
