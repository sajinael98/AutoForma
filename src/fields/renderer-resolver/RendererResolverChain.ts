import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";

export class RendererResolverChain {
  constructor(private handlers: RendererHandler[]) {}

  resolve(field: FieldSchema) {
    for (const handler of this.handlers) {
      if (handler.canHandle(field)) {
        const renderer = handler.resolve(field);
        if (renderer) return renderer;
      }
    }
    return null;
  }
}
