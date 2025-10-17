import { FieldSchema, FieldType } from "../types";

export const getDefaultValueForField = (type: FieldType): any => {
  switch (type) {
    case "number":
      return 0;
    case "array":
      return [];
    case "checkbox":
      return false;
    case "object":
      return {};
    case "select":
    case "date":
    case "datetime":
      return null;
    default:
      return "";
  }
};

export function generateInitialValues<
  TValues extends Record<string, any> = Record<string, any>
>(
  schema: FieldSchema<TValues>[],
  initialValues: Partial<TValues> = {}
): TValues {
  const result: Record<string, any> = {};

  for (const field of schema) {
    if (field.type === "object" && field.fields) {
      result[field.name] = generateInitialValues(
        field.fields,
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
