import React from "react";
import { RendererHandler } from "./RendererHandler";
import { FieldSchema } from "../types";
import { UseFormReturnType } from "@mantine/form";

export class CustomTypeRendererResolver<
  TValues extends Record<string, any>
> extends RendererHandler<TValues> {
  constructor(
    private customFieldTypes: Record<
      string,
      (
        field: FieldSchema<TValues>,
        form: UseFormReturnType<TValues>
      ) => React.ReactNode
    >
  ) {
    super();
  }

  canHandle(field: FieldSchema<TValues>) {
    return !!this.customFieldTypes[field.type];
  }

  render(field: FieldSchema<TValues>, form: UseFormReturnType<TValues>) {
    return this.customFieldTypes[field.type](field, form);
  }
}
