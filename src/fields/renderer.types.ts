import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "./types";

export type FieldRendererProps<
TValues extends Record<string, any> = Record<string, any>
> = {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
};

export type CustomRenderersMap<TValues extends Record<string, any>> = {
  [K in keyof TValues]?: (
    form: UseFormReturnType<TValues>,
    field: FieldSchema<TValues>
  ) => React.ReactNode;
};