import { CustomRenderersMap } from "@/fields/renderer.types";
import { FieldSchema } from "@/fields/types";
import { AutoFormHandle } from "@/types/AutoFormHandle";
import { FormValidateInput } from "@mantine/form";

export interface AutoFormProps<
  TValues extends Record<string, any> = Record<string, any>
> {
  values?: TValues;
  schema: FieldSchema<TValues>[];
  mode?: "create" | "edit" | "view";
  layout?: "vertical" | "horizontal" | "grid";
  columns?: number;
  validate?: FormValidateInput<TValues>;

  onSubmit: (values: TValues) => void | Promise<void>;
  onChange?: (values: TValues) => void;
  onFieldChange?: (
    name: keyof TValues,
    oldValue: any,
    newValue: any,
    values: TValues
  ) => TValues | Promise<TValues>;

  container?: (
    Form: React.ReactNode,
    onSubmit: VoidFunction,
    context?: { readOnly?: boolean; mode?: string }
  ) => React.ReactNode;
  fieldContainer?: (
    field: React.ReactNode,
    fieldSchema: FieldSchema<TValues>
  ) => React.ReactNode;

  fieldOverrides?: Record<
    string,
    (
      schema: FieldSchema<TValues>,
      value: any,
      onChange: (v: any) => void
    ) => React.ReactNode
  >;

  transformBeforeSubmit?: (values: TValues) => TValues;

  submitButton?: boolean | React.ReactNode;
  actions?: React.ReactNode;
  formRef?: React.RefObject<AutoFormHandle>;
  readOnly?: boolean;
  customRenderers?: CustomRenderersMap<TValues>;
  updateFieldSchema?: {
    [key: string]: (
      schema: FieldSchema<TValues>,
      values: TValues
    ) => FieldSchema<TValues>;
  };
}