import React from "react";
import { RendererHandler } from "./RendererHandler";
import { FieldSchema } from "../types";
import { UseFormReturnType } from "@mantine/form";

export class FieldTypeHandler<
  TValues extends Record<string, any>
> extends RendererHandler<TValues> {
  constructor(
    private typeRenderers: Record<
      string,
      (field: any, form: any) => React.ReactNode
    >
  ) {
    super();
  }

  canHandle(field: FieldSchema<TValues>) {
    return !!this.typeRenderers[field.type];
  }

  render(field: FieldSchema<TValues>, form: UseFormReturnType<TValues>) {
    return this.typeRenderers[field.type](field, form);
  }
}
