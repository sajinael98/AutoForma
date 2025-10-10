import { CustomRenderersMap } from "@/fields/renderer.types";
import { FieldSchema } from "@/fields/types";
import { FormValidateInput, UseFormReturnType } from "@mantine/form";

export interface AutoFormProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  schema: FieldSchema<TValues>[];
  values?: Partial<TValues>;

  onSubmit: (values: TValues) => void | Promise<void>;
  transformBeforeSubmit?: (values: TValues) => TValues;

  validate?: FormValidateInput<TValues>;
  mode?: "create" | "edit" | "view";
  readOnly?: boolean;

  onFieldChange?: OnFieldChangeMap<TValues>;

  layout?: "vertical" | "horizontal" | "grid";
  columns?: number;

  customRenderers?: CustomRenderersMap<TValues>;
  updateFieldSchema?: UpdateFieldSchemaMap<TValues>;

  submitButton?: boolean | React.ReactNode;
  actions?: React.ReactNode;
}

export type UpdateFieldSchemaMap<
  TValues extends Record<string, any> = Record<string, any>
> = {
  [K in keyof TValues]?: (
    schema: FieldSchema<TValues>,
    values: TValues
  ) => FieldSchema<TValues>;
};

export type OnFieldChangeMap<
  TValues extends Record<string, any> = Record<string, any>
> = {
  [K in keyof TValues]?: (
    value: TValues[K],
    form: UseFormReturnType<TValues>
  ) => void | Promise<void>;
};
