import { FieldSchema } from '../types';
import { RendererHandler } from './RendererHandler';
export declare class RendererResolverChain {
    private handlers;
    constructor(handlers: RendererHandler[]);
    resolve(field: FieldSchema): import('../../../node_modules/react').ComponentType<import('../..').FieldRendererProps<any>> | null;
}
