import React from "react";
import { RendererHandler } from "./RendererHandler";
import { FieldSchema } from "../types";
import { UseFormReturnType } from "@mantine/form";

export class FieldNameHandler<
  TValues extends Record<string, any>
> extends RendererHandler<TValues> {
  constructor(
    private fieldRenderers: Record<
      string,
      (field: any, form: any) => React.ReactNode
    >
  ) {
    super();
  }

  canHandle(field: FieldSchema<TValues>) {
    return !!this.fieldRenderers[field.name];
  }

  render(field: FieldSchema<TValues>, form: UseFormReturnType<TValues>) {
    return this.fieldRenderers[field.name](field, form);
  }
}
