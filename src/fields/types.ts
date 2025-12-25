export type FieldType<TCustom extends string = never> =
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
  | "texteditor"
  | "tags"
  | TCustom

export interface BaseFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TCustom extends string = never
> {
  name: keyof TValues & string
  label: string
  type: FieldType<TCustom>
  description?: string
  placeholder?: string
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  visible?: boolean
  initialValue?: any
  column?: number
  meta?: Record<string, any>
}

export interface TextFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "text"
}

export interface SelectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "select"
  data: { label: string; value: string }[]
}

export interface CheckboxFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "checkbox"
}

export interface DateFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "date"
}

export interface ObjectFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TInner extends Record<string, any> = Record<string, any>,
  TCustom extends string = never
> extends BaseFieldSchema<TValues, TCustom> {
  type: "object"
  fields: FieldSchema<TInner, TCustom>[]
}

export interface ArrayFieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TInner extends Record<string, any> = Record<string, any>,
  TCustom extends string = never
> extends BaseFieldSchema<TValues, TCustom> {
  type: "array"
  fields: FieldSchema<TInner, TCustom>[]
}

export interface SwitchFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "switch"
}

export interface TimeFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "time"
}

export interface NumberFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "number"
}

export interface DateTimeFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "datetime"
}

export interface TagsFieldSchema<
  TValues extends Record<string, any> = Record<string, any>
> extends BaseFieldSchema<TValues> {
  type: "tags"
}

export type FieldSchema<
  TValues extends Record<string, any> = Record<string, any>,
  TCustom extends string = never
> =
  | TextFieldSchema<TValues>
  | SelectFieldSchema<TValues>
  | CheckboxFieldSchema<TValues>
  | DateFieldSchema<TValues>
  | ObjectFieldSchema<TValues, any, TCustom>
  | ArrayFieldSchema<TValues, any, TCustom>
  | SwitchFieldSchema<TValues>
  | TimeFieldSchema<TValues>
  | NumberFieldSchema<TValues>
  | DateTimeFieldSchema<TValues>
  | TagsFieldSchema<TValues>
  | (BaseFieldSchema<TValues, TCustom>)
