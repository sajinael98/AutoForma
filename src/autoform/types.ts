import React from 'react';
import { Control, Resolver, UseFormRegisterReturn } from 'react-hook-form';

/* ===============================
   Core
================================ */

export type FormValues = Record<string, any>;

/* ===============================
   Built-in Field Types
================================ */

export type BuiltInFieldType =
  | 'text'
  | 'number'
  | 'checkbox'
  | 'select'
  | 'date'
  | 'datetime-local'
  | 'time'
  | 'array'
  | 'object';

export type FieldType<TCustom extends string = never> =
  | BuiltInFieldType
  | TCustom;

/* ===============================
   Base Schemas
================================ */

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

/* ===============================
   Composite Schemas
================================ */

export interface HasFields<TCustom extends string = never>
  extends BaseFieldSchema<TCustom> {
  fields: FieldSchema<TCustom>[];
}

export interface ArrayFieldSchema<TCustom extends string = never>
  extends HasFields<TCustom> {
  type: 'array';
}

export interface ObjectFieldSchema<TCustom extends string = never>
  extends HasFields<TCustom> {
  type: 'object';
}

export interface SelectFieldSchema<TCustom extends string = never>
  extends BaseFieldSchema<TCustom> {
  type: 'select';
  options: { label: string; value: string }[];
}

/* ===============================
   🔥 Extensible Registry
================================ */

export interface FieldSchemaRegistry<TCustom extends string = never> {
  base: BaseFieldSchema<TCustom>;
  select: SelectFieldSchema<TCustom>;
  hasFields: HasFields<TCustom>;
  array: ArrayFieldSchema<TCustom>;
  object: ObjectFieldSchema<TCustom>;
}

/* ===============================
   Public Schema Type
================================ */

export type FieldSchema<TCustom extends string = never> =
  FieldSchemaRegistry<TCustom>[keyof FieldSchemaRegistry<TCustom>];

export type Schema<TCustom extends string = never> =
  FieldSchema<TCustom>[];

/* ===============================
   Update Hooks
================================ */

export type UpdateFieldSchema<TCustom extends string = never> = {
  [key: string]: (
    path: string,
    fieldSchema: FieldSchema<TCustom>,
    values: FormValues
  ) => FieldSchema<TCustom> | Promise<FieldSchema<TCustom>>;
};

/* ===============================
   Custom Renderers
================================ */

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

/* ===============================
   Layout
================================ */

export type Layout = 'vertical' | 'horizontal' | 'custom';

/* ===============================
   Form Props
================================ */

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

  onFieldChange?: Record<
    string,
    (path: string, value: any, values: FormValues) => void
  >;

  loadingComponent?: React.ReactNode;
}

/* ===============================
   Form Ref
================================ */

export interface FormRef {
  submit: VoidFunction;
  setValue: (name: string, value: any) => void;
  getValues: () => FormValues;
  reset: (values: FormValues) => void;
}

/* ===============================
   Field Props
================================ */

export interface FieldProps<TCustom extends string = never> {
  fieldSchema: FieldSchema<TCustom>;
}
