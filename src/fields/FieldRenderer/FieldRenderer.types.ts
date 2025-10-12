import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";
import { FieldRendererProps as RendererProps } from "../renderer.types";

export interface FieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout: "vertical" | "horizontal" | "grid";
  readOnly?: boolean;
  customRenderers?: RendererProps<TValues>;
}
