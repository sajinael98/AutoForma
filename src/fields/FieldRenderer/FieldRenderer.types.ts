import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";
import { FieldRenderCustomRender } from "@/types/custom-render";

export interface FieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout: "vertical" | "horizontal" | "grid";
  columns?: number;
  mode?: "create" | "edit" | "view";
  readOnly?: boolean;
  renderField?: FieldRenderCustomRender;
  fieldOverrides?: Record<
    string,
    (
      schema: FieldSchema<TValues>,
      value: any,
      onChange: (v: any) => void
    ) => React.ReactNode
  >;
}
