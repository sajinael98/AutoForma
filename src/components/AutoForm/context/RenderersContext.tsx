import { createContext, useContext } from "react";
import { RendererResolverChain } from "../../../fields/renderer-resolver/RendererResolverChain";

export const RendererContext = createContext<RendererResolverChain | null>(
  null
);

export const RendererProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: RendererResolverChain;
}) => {
  return (
    <RendererContext.Provider value={value}>
      {children}
    </RendererContext.Provider>
  );
};

export const useRenderers = <
  TValues extends Record<string, any> = Record<string, any>
>() => {
  const context = useContext(RendererContext);
  if (!context) {
    throw new Error("useRenderers must be used inside <RendererProvider>");
  }
  return context;
};
