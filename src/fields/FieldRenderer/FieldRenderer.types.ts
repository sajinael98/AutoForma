import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";

export interface FieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout: "vertical" | "horizontal" | "grid";
  readOnly?: boolean;
  customFieldRenderers?: (
    field: FieldSchema<TValues>,
    form: UseFormReturnType<TValues>
  ) => React.ReactNode;
  customFieldTypes?: CustomFieldTypes<TValues>;
}

export interface CustomFieldTypes<TValues extends Record<string, any>> {
  [key: string]: (
    field: FieldSchema<TValues>,
    form: UseFormReturnType<TValues>
  ) => React.ReactNode;
}
