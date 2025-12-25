import { FieldSchema } from '../types';
import { RendererHandler } from './RendererHandler';
import { FieldRendererProps } from '../../components/AutoForm/AutoForm.types';
import { default as React } from '../../../node_modules/react';
export declare class FieldFieldTypeHandler implements RendererHandler {
    private renderers;
    constructor(renderers: Record<string, React.ComponentType<FieldRendererProps>>);
    canHandle(field: FieldSchema): boolean;
    resolve(field: FieldSchema): React.ComponentType<FieldRendererProps<any>>;
}
