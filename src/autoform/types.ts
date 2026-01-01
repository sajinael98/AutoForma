import { Resolver, UseFormRegisterReturn } from "react-hook-form";

export type FormValues = Record<string, any>;

export type FieldType =
  | "text"
  | "number"
  | "checkbox"
  | "select"
  | "date"
  | "datetime-local"
  | "time"
  | "array"
  | "object";

export interface BaseFieldSchema {
  type: FieldType;
  name: string;
  label: string;
  dependsOn?: string[];
  initialValue?: any;
  visible?: boolean;
  disabled?: boolean;
  meta?: Record<string, any>;
}

export interface HasFields extends BaseFieldSchema {
  fields: FieldSchema[];
}

export interface ArrayFieldSchema extends HasFields {
  type: "array";
}

export interface ObjectFieldSchema extends HasFields {
  type: "object";
}

export type FieldSchema = BaseFieldSchema | HasFields;

export type Schema = FieldSchema[];

export type UpdateFieldSchema = {
  [key: string]: (
    path: string,
    fieldSchema: FieldSchema,
    values: FormValues
  ) => FieldSchema | Promise<FieldSchema>;
};

export type CustomFieldRendererProps = {
  fieldSchema: FieldSchema;
  register: UseFormRegisterReturn<string>;
};

export type CustomRender = Record<
  string,
  React.ComponentType<CustomFieldRendererProps>
>;

export interface UiConfig {
  renderersByName?: CustomRender;
  renderersByType?: CustomRender;
}

export type Layout = "vertical" | "horizontal" | "custom";

export interface FormProps {
  schema: Schema;
  onSubmit: (values: FormValues) => void;
  layout?: Layout;
  uiConfig?: UiConfig;
  updateFieldSchema?: UpdateFieldSchema;
  values?: () => FormValues | Promise<FormValues>;
  hideSubmit?: boolean;
  onDirtyChange?: (isDirty: boolean) => void;
  onValuesChange?: (values: FormValues) => void;
  resolver?: Resolver<FormValues, any, FormValues>;
  readonly?: boolean
}

export interface FormRef {
  submit: VoidFunction;
  setValue: (name: string, value: any) => void;
  getValues: () => FormValues;
  reset: (values: FormValues) => void;
}

export interface FieldProps {
  fieldSchema: FieldSchema;
}
