import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "../types";

export interface DefaultFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout?: "vertical" | "horizontal" | "grid";
}
