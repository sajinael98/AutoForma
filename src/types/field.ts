export type FieldType =
  | "text"
  | "number"
  | "object"
  | "array"
  | "check"
  | "select"
  | "textarea"
  | "date"
  | "datetime"
  | "time";

export interface FieldSchema<TValues extends Record<string, any> = Record<string, any>> {
  name: keyof TValues & string;
  type: FieldType;
  label: string;
  description?: string;
  placeholder?: string;
  extra?: Record<string, any>;
  disabled?: ((values: TValues) => boolean) | boolean;
  visible?: ((values: TValues) => boolean) | boolean;
  initialValue?: any;
  required?: boolean;
  readOnly?: boolean;
  fields?: FieldSchema<TValues>[];
  data?: { label: string; value: string }[];
  meta?: Record<string, any>;
}

export interface BaseFieldProps<T> {
  name: string;
  value: T;
  onChange: (name: string, value: T | null) => void;
  readOnly?: true;
}

export type ArrayFieldOptions = {
  addElement: (value: Record<string, any>) => void;
  replaceElement: (index: number, val: Record<string, any>) => void;
  removeElement: (index: number) => void;
};
