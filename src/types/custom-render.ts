// types/custom-render.ts
import { ArrayFieldOptions, FieldSchema } from './field';

export type FieldRenderCustomRender = (
  field: FieldSchema,
  value: any,
  error: React.ReactNode | Record<string, React.ReactNode>,
  onChange: (name: string, value: any) => void,
  formValues: Record<string, any>,
  options?: ArrayFieldOptions,
  readOnly?: true
) => React.ReactNode;

export interface CustomFieldRender {
  field: FieldSchema;
  value: any;
  error: React.ReactNode | Record<string, React.ReactNode>;
  onChange: (name: string, value: any) => void;
  formValues: Record<string, any>;
  options?: ArrayFieldOptions;
  readOnly?: true;
}
