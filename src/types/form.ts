import { FieldSchema } from './field';

export interface FormSchema {
  fields: FieldSchema[];
  onSubmit?: (values: Record<string, any>) => void;
  formData?: Record<string, any>;
  initialValues?: Record<string, any>;
}
