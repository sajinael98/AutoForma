export type FieldType = 'text' | 'number' | 'object' | 'array' | 'check';

export interface FieldSchema {
  name: string;
  type: FieldType;
  label: string;
  description?: string;
  placeholder?: string;
  extra?: Record<string, any>;
  disabled?: (values: Record<string, any>) => boolean | boolean;
  visible?: (values: Record<string, any>) => boolean | boolean;
  initialValue?: any;
  required?: true;
  readOnly?: true;
  // for object type only
  fields?: FieldSchema[];
}

export interface BaseFieldProps<T> {
  name: string;
  value: T;
  onChange: (name: string, value: T) => void;
  readOnly?: true;
}
