import { FieldSchema } from "@/fields/types";
import { UseFormReturnType } from "@mantine/form";
import React from "react";

export abstract class RendererHandler<TValues extends Record<string, any>> {
  private next?: RendererHandler<TValues>;

  setNext(handler: RendererHandler<TValues>) {
    this.next = handler;
    return handler;
  }

  handle(
    field: FieldSchema<TValues>,
    form: UseFormReturnType<TValues>
  ): React.ReactNode {
    if (this.canHandle(field)) {
      return this.render(field, form);
    }
    return this.next?.handle(field, form) ?? null;
  }

  abstract canHandle(field: FieldSchema<TValues>): boolean;
  abstract render(
    field: FieldSchema<TValues>,
    form: UseFormReturnType<TValues>
  ): React.ReactNode;
}
