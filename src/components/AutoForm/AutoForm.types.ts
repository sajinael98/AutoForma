import { FieldSchema } from "@/fields/types";
import { FormValidateInput, UseFormReturnType } from "@mantine/form";

type FormValues = Record<string, any>;

export type UpdateFieldSchema = {
  [key: string]: (
    path: string,
    fieldSchema: FieldSchema,
    values: FormValues
  ) => FieldSchema | Promise<FieldSchema>;
};

export interface FieldRendererProps<TValues = any> {
  field: FieldSchema;
  form: UseFormReturnType<TValues>;
}

export type OnFieldChangeMap<
  TValues extends Record<string, any> = Record<string, any>
> = {
  [K in keyof TValues]?: (
    path: string,
    value: TValues[K],
    form: UseFormReturnType<TValues>
  ) => void | Promise<void>;
};

export interface AutoFormProps<
  FormValues extends Record<string, any> = Record<string, any>
> {
  schema: FieldSchema<any, any>[];

  readOnly?: boolean;

  layout?: "vertical" | "horizontal" | "grid";

  primaryAction?: boolean;
  submitLabel?: string;

  loading?: boolean;

  values?: () => FormValues | Promise<FormValues>;
  initialValues?: () => FormValues | Promise<FormValues>;

  onFieldChange?: OnFieldChangeMap<FormValues>;

  updateFieldSchema?: UpdateFieldSchema;

  validate?: FormValidateInput<FormValues>;

  preSubmit?: (values: FormValues) => FormValues | Promise<FormValues>;
  onSubmit: (values: FormValues) => void | Promise<void>;
  postSubmit?: (values: FormValues) => void | Promise<void>;

  onValuesChange?: (values: FormValues) => void;

  uiConfig?: {
    customTypeRenderers?: Record<
      string,
      React.ComponentType<FieldRendererProps<FormValues>>
    >;

    customFieldNameRenderers?: Record<
      string,
      React.ComponentType<FieldRendererProps<FormValues>>
    >;

    customFieldTypeRenderers?: Record<
      string,
      React.ComponentType<FieldRendererProps<FormValues>>
    >;
  };
}

export interface AutoFormRef {
  submit: () => void;
  reset: (values?: Partial<FormValues>) => void;
  validate: () => boolean;
  getValues: () => FormValues;
  setValues: (values: Partial<FormValues>) => void;

  getFieldValue: (path: string) => any;
  setFieldValue: (path: string, value: any) => void;

  isValid: () => boolean;
  isDirty: () => boolean;
  isLoading: () => boolean;
}
