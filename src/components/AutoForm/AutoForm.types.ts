import { CustomRenderersConfig } from "@/fields/renderer.types";
import { FieldSchema } from "@/fields/types";
import { FormValidateInput, UseFormReturnType } from "@mantine/form";

export type AutoFormProps<
  TValues extends Record<string, any> = Record<string, any>
> = CustomRenderersConfig<TValues> & {
  schema: FieldSchema<TValues>[];
  values?: Partial<TValues>;
  getInitialValues?: () => Partial<TValues> | Promise<Partial<TValues>>;

  onSubmit: (values: TValues) => void | Promise<void>;
  transformBeforeSubmit?: (values: TValues) => TValues | Promise<TValues>;
  transformAfterSubmit?: (values: TValues) => void | Promise<void>;

  validate?: FormValidateInput<TValues>;
  readOnly?: boolean;

  onFieldChange?: OnFieldChangeMap<TValues>;

  layout?: "vertical" | "horizontal" | "grid";

  updateFieldSchema?: UpdateFieldSchemaMap<TValues>;

  submitButton?: boolean | React.ReactNode;

  loading?: boolean;
};

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

export interface AutoFormRef<
  TValues extends Record<string, any> = Record<string, any>
> {
  submit: () => void;
  reset: (values?: Partial<TValues>) => void;
  validate: () => boolean;
  getValues: () => TValues;
  setValues: (values: Partial<TValues>) => void;

  getFieldValue: (path: string) => any;
  setFieldValue: (path: string, value: any) => void;

  isValid: () => boolean;
  isDirty: () => boolean;
}
