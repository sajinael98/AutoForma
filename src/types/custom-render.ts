// types/custom-render.ts
import { FieldSchema } from './field';

export type FieldRenderCustomRender = (
  field: FieldSchema,
  value: any,
  error: React.ReactNode | Record<string, React.ReactNode>,
  onChange: (name: string, value: any) => void,
  formValues: Record<string, any>,
  options?: {
    addElement?: (val: Record<string, any>) => void;
    removeElement?: (index: number) => void;
  },
  readOnly?: true
) => React.ReactNode;
