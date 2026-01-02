import { FormValues, HasFields, Schema } from "../types";
import { getDefaultValueForField } from "./getDefaultValueForField";

export function generateInitialValues<
  TValues extends FormValues = Record<string, any>,
  TCustom extends string = never
>(schema: Schema<TCustom>, initialValues: Partial<TValues> = {}): TValues {
  const result: Record<string, any> = {};

  for (const field of schema) {
    if (field.type === "object") {
      const fields = (field as HasFields).fields;
      result[field.name] = generateInitialValues(
        fields,
        initialValues?.[field.name]
      );
    } else {
      result[field.name] =
        initialValues?.[field.name] ??
        field.initialValue ??
        getDefaultValueForField(field.type);
    }
  }

  return result as TValues;
}
