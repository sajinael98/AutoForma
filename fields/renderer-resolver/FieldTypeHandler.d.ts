import { FieldSchema } from '../types';
import { RendererHandler } from './RendererHandler';
export declare class FieldTypeHandler implements RendererHandler {
    private renderers;
    constructor(renderers: Record<string, React.ComponentType<any>>);
    canHandle(field: FieldSchema): boolean;
    resolve(field: FieldSchema): import('../../../node_modules/react').ComponentType<any>;
}
