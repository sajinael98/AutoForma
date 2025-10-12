// src/fields/types.ts

export type FieldType =
  | "text"
  | "number"
  | "select"
  | "checkbox"
  | "date"
  | "datetime"
  | "time"
  | "object"
  | "array"
  | "switch"
  | "texteditor";

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
  column?: number;
}

export interface TextFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "text";
}

export interface SelectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "select";
  data: { label: string; value: string }[];
}

export interface CheckboxFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "checkbox";
}

export interface DateFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "date";
}

export interface ObjectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TInner extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "object";
  fields: FieldSchema<TInner>[];
}

export interface ArrayFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TInner extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "array";
  fields: FieldSchema<TInner>[];
}

export interface SwitchFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "switch";
}

export interface RichTextEditorFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "texteditor";
}

export interface RichTextEditorFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "texteditor";
}

export interface TimeFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "time";
}

export interface NumberFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "number";
}

export interface DateTimeFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "datetime";
}


export type FieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> =
  | TextFieldSchema<TValues>
  | SelectFieldSchema<TValues>
  | CheckboxFieldSchema<TValues>
  | DateFieldSchema<TValues>
  | ObjectFieldSchema<TValues>
  | ArrayFieldSchema<TValues>
  | SwitchFieldSchema<TValues>
  | RichTextEditorFieldSchema
  | TimeFieldSchema
  | NumberFieldSchema
  | DateTimeFieldSchema;
