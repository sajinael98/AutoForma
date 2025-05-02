export type FieldType = 'text' | 'number' | 'object' | 'array';

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
