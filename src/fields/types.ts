// src/fields/types.ts

export type FieldType =
  | "text"
  | "number"
  | "select"
  | "checkbox"
  | "textarea"
  | "date"
  | "datetime"
  | "time"
  | "object"
  | "array";

export interface BaseFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> {
  name: keyof TValues & string;
  label: string;
  type: FieldType;
  description?: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  visible?: boolean;
  meta?: Record<string, any>;
  initialValue?: any;
}

export interface TextFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "text" | "textarea" | "number";
  extra?: {
    maxLength?: number;
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface SelectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "select";
  data: { label: string; value: string }[];
  extra?: {
    searchable?: boolean;
    clearable?: boolean;
    multiple?: boolean;
  };
}

export interface CheckboxFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "checkbox";
  extra?: {
    color?: string;
  };
}

export interface DateFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "date" | "datetime" | "time";
  extra?: {
    format?: string;
  };
}

export interface ObjectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TInner extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "object";
  fields: FieldSchema<TInner>[];
}

export interface ArrayFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "array";
  of: FieldSchema<TValues>;
}

export type FieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> =
  | TextFieldSchema<TValues>
  | SelectFieldSchema<TValues>
  | CheckboxFieldSchema<TValues>
  | DateFieldSchema<TValues>
  | ObjectFieldSchema<TValues>
  | ArrayFieldSchema<TValues>;
