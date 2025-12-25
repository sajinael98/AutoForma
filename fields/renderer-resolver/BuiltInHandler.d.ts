import { FieldSchema } from '../types';
import { RendererHandler } from './RendererHandler';
import { default as FieldRenderer } from '../FieldRenderer/DefaultFieldRender';
export declare class BuiltInHandler implements RendererHandler {
    private layout;
    constructor(layout: "vertical" | "horizontal" | "grid");
    canHandle(): boolean;
    resolve(field: FieldSchema): typeof FieldRenderer;
}
