import { RendererResolverChain } from '../../../fields/renderer-resolver/RendererResolverChain';
export declare const RendererContext: import('../../../../node_modules/react').Context<RendererResolverChain | null>;
export declare const RendererProvider: ({ children, value, }: {
    children: React.ReactNode;
    value: RendererResolverChain;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useRenderers: <TValues extends Record<string, any> = Record<string, any>>() => RendererResolverChain;
