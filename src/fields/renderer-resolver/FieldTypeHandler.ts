import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";

export class FieldTypeHandler implements RendererHandler {
  constructor(private renderers: Record<string, React.ComponentType<any>>) {}

  canHandle(field: FieldSchema) {
    return !!this.renderers[field.type];
  }

  resolve(field: FieldSchema) {
    return this.renderers[field.type] ?? null;
  }
}
