import { default as React } from '../../../node_modules/react';
import { Schema } from '../types';
interface SchemaRendererProps<TCustom extends string = never> {
    schema: Schema<TCustom>;
}
declare const SchemaRenderer: React.MemoExoticComponent<(<TCustom extends string = never>(props: SchemaRendererProps<TCustom>) => import("react/jsx-runtime").JSX.Element[])>;
export default SchemaRenderer;
