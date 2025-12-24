import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";
import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import React from "react";

export class FieldFieldTypeHandler implements RendererHandler {
  constructor(
    private renderers: Record<
      string,
      React.ComponentType<FieldRendererProps>
    >
  ) {}

  canHandle(field: FieldSchema) {
    return !!this.renderers[`${field.type}`];
  }

  resolve(field: FieldSchema) {
    return this.renderers[`${field.type}`] ?? null;
  }
}
