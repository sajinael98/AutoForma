import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "./types";

export type FieldRendererResolverProps<
  TValues extends Record<string, any> = Record<string, any>
> = CustomRenderersConfig<TValues> & {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout?: "vertical" | "horizontal" | "grid";
};

export type CustomRenderersConfig<
  TValues extends Record<string, any> = Record<string, any>
> = {
  customFieldRenderers?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
  customTypeRenderers?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
  customFieldTypes?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
};
