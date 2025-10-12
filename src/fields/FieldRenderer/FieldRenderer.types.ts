import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";
import { UseCustomRendererFieldReturnType } from "../renderer.types";

export interface FieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout: "vertical" | "horizontal" | "grid";
  readOnly?: boolean;
  customRenderers?: UseCustomRendererFieldReturnType<TValues>;
  fieldOverrides?: Record<
    string,
    (
      schema: FieldSchema<TValues>,
      value: any,
      onChange: (v: any) => void
    ) => React.ReactNode
  >;
}
