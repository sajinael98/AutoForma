import { default as React } from '../../../node_modules/react';
import { FieldSchema } from '../types';
type FieldLayoutWrapperProps = {
    field: FieldSchema;
    layout: "vertical" | "horizontal" | "grid";
    children: React.ReactNode;
};
export declare function FieldLayoutWrapper({ field, layout, children, }: FieldLayoutWrapperProps): import("react/jsx-runtime").JSX.Element;
export default FieldLayoutWrapper;
