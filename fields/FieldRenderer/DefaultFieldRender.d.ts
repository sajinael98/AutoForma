import { default as React } from '../../../node_modules/react';
import { FieldSchema } from '../types';
import { DefaultFieldRendererProps } from './FieldRenderer.types';
interface DefaultFieldRenderWrapperProps {
    field: FieldSchema;
    children: React.ReactNode;
    layout?: "vertical" | "horizontal" | "grid";
}
export declare const DefaultFieldRenderWrapper: ({ field, children, }: DefaultFieldRenderWrapperProps) => import("react/jsx-runtime").JSX.Element;
export declare function FieldRenderer<TValues extends Record<string, any> = Record<string, any>>(props: DefaultFieldRendererProps<TValues>): import("react/jsx-runtime").JSX.Element;
export default FieldRenderer;
