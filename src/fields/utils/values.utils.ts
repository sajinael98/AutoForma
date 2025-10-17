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

export function validateRequiredFields<
  TValues extends Record<string, any> = Record<string, any>
>(schema: FieldSchema<TValues>[], values: TValues): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const field of schema) {
    const value = values?.[field.name] ?? getDefaultValueForField(field.type);

    if (!field.required) continue;

    if (field.type === "object") {
      if (!Object.values(value).length) {
        errors[field.name] = `${field.label || field.name} is required`;
      }
      const innerErrors = validateRequiredFields(field.fields, value);
      for (const [key, msg] of Object.entries(innerErrors)) {
        errors[`${field.name}.${key}`] = msg;
      }
    } else if (field.type === "array") {
      if (!value.length) {
        errors[field.name] = `${field.label || field.name} is required`;
      }
      value.forEach((row: any, index: number) => {
        const innerErrors = validateRequiredFields(field.fields, row);
        for (const [key, msg] of Object.entries(innerErrors)) {
          errors[`${field.name}.${index}.${key}`] = msg;
        }
      });
    } else {
      if (value === getDefaultValueForField(field.type)) {
        errors[field.name] = `${field.label || field.name} is required`;
      }
    }
  }

  return errors;
}
