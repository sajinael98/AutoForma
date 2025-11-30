import { CustomRenderersConfig } from "@/fields/renderer.types";
import { FieldSchema } from "@/fields/types";
import { FormValidateInput, UseFormReturnType } from "@mantine/form";

type ValueProvider<TValues> = () =>
  | Partial<TValues>
  | Promise<Partial<TValues>>;

export type AutoFormProps<
  TValues extends Record<string, any> = Record<string, any>
> = CustomRenderersConfig<TValues> & {
  schema: (FieldSchema<TValues> & Record<string, any>)[];

  initialValues?: ValueProvider<TValues>;
  currentValues?: ValueProvider<TValues>;

  preFill?: (values: TValues) => TValues | Promise<TValues>;
  preSubmit?: (values: TValues) => TValues | Promise<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
  postSubmit?: (values: TValues) => void | Promise<void>;

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
    path: string,
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
  isLoading: () => boolean;
}
