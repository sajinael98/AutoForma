import { Control, Resolver, UseFormRegisterReturn } from 'react-hook-form';

export type FormValues = Record<string, any>;

export const BUILT_IN_FIELD_TYPES = [
  'text',
  'number',
  'checkbox',
  'select',
  'date',
  'datetime-local',
  'time',
  'array',
  'object',
] as const;

export type BuiltInFieldType = (typeof BUILT_IN_FIELD_TYPES)[number];

export type FieldType<TCustom extends string = never> = BuiltInFieldType | TCustom;

export interface BaseFieldSchema<TCustom extends string = never> {
  type: FieldType<TCustom>;
  name: string;
  label: string;
  dependsOn?: string[];
  initialValue?: any;
  visible?: boolean;
  readonly?: boolean;
  meta?: Record<string, any>;
}

export interface HasFields<TCustom extends string = never> extends BaseFieldSchema<TCustom> {
  fields: FieldSchema<TCustom>[];
}

export interface ArrayFieldSchema<TCustom extends string = never> extends HasFields<TCustom> {
  type: 'array';
}

export interface ObjectFieldSchema<TCustom extends string = never> extends HasFields<TCustom> {
  type: 'object';
}

export interface SelectFieldSchema<
  TCustom extends string = never,
> extends BaseFieldSchema<TCustom> {
  type: 'select';
  options: { label: string; value: string }[];
}

export type FieldSchema<TCustom extends string = never> =
  | BaseFieldSchema<TCustom>
  | SelectFieldSchema<TCustom>
  | HasFields<TCustom>;

export type Schema<TCustom extends string = never> = FieldSchema<TCustom>[];

export type UpdateFieldSchema<TCustom extends string = never> = {
  [key: string]: (
    path: string,
    fieldSchema: FieldSchema<TCustom>,
    values: FormValues
  ) => FieldSchema<TCustom> | Promise<FieldSchema<TCustom>>;
};

export type CustomFieldRendererProps<TCustom extends string = never> = {
  fieldSchema: FieldSchema<TCustom>;
  register: UseFormRegisterReturn<string>;
  control: Control<FormValues>;
};

export type CustomRender<TCustom extends string = never> = Record<
  string,
  React.ComponentType<CustomFieldRendererProps<TCustom>>
>;

export type UiConfig<TCustom extends string = never> = {
  renderersByName?: CustomRender<TCustom>;
  renderersByType?: CustomRender<TCustom>;
};

export type Layout = 'vertical' | 'horizontal' | 'custom';

export interface FormProps<TCustom extends string = never> {
  schema: Schema<TCustom>;
  onSubmit: (values: FormValues) => void;
  layout?: Layout;
  uiConfig?: UiConfig<TCustom>;
  updateFieldSchema?: UpdateFieldSchema<TCustom>;
  values?: () => FormValues | Promise<FormValues>;
  hideSubmit?: boolean;
  onDirtyChange?: (isDirty: boolean) => void;
  onValuesChange?: (values: FormValues) => void;
  resolver?: Resolver<FormValues, any, FormValues>;
  readonly?: boolean;
  onFieldChange?: Record<string, (path: string, value: any, values: FormValues) => void>;
  loadingComponent?: React.ReactNode
}

export interface FormRef {
  submit: VoidFunction;
  setValue: (name: string, value: any) => void;
  getValues: () => FormValues;
  reset: (values: FormValues) => void;
}

export interface FieldProps<TCustom extends string = never> {
  fieldSchema: FieldSchema<TCustom>;
}
