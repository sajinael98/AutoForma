import { PropsWithChildren } from '../../../node_modules/react';
import { Layout, UiConfig, UpdateFieldSchema } from '../types';
export interface AutoFormRenderContextProps<TCustom extends string = never> {
    layout?: Layout;
    uiConfig?: UiConfig<TCustom>;
    updateFieldSchema?: UpdateFieldSchema<TCustom>;
}
export declare const AutoFormRenderContext: import('../../../node_modules/react').Context<AutoFormRenderContextProps<any> | null>;
export declare const AutoFormRenderContextProvider: <TCustom extends string = never>({ children, layout, uiConfig, updateFieldSchema, }: PropsWithChildren<AutoFormRenderContextProps<TCustom>>) => import("react/jsx-runtime").JSX.Element;
