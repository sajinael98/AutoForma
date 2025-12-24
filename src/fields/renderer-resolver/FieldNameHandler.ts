import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";

export class FieldNameHandler implements RendererHandler {
  constructor(private renderers: Record<string, React.ComponentType<any>>) {}

  canHandle(field: FieldSchema) {
    return !!this.renderers[field.name.replace(/\.\d+\./g, ".")];
  }

  resolve(field: FieldSchema) {
    return this.renderers[field.name.replace(/\.\d+\./g, ".")] ?? null;
  }
}
