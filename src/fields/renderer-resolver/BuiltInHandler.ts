import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";
import FieldRenderer from "../FieldRenderer/DefaultFieldRender";

export class BuiltInHandler implements RendererHandler {
  private layout: "vertical" | "horizontal" | "grid";
  constructor(layout: "vertical" | "horizontal" | "grid") {
    this.layout = layout;
  }

  canHandle() {
    return true;
  }

  resolve(field: FieldSchema) {
    return FieldRenderer;
  }
}
