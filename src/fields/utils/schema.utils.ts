import { ArrayFieldSchema, FieldSchema, ObjectFieldSchema } from "../types";

export function makeSchemaReadOnly(schema: FieldSchema[]): FieldSchema[] {
  return schema.map((field) => {
    const next = {
      ...field,
      readOnly: true,
    };

    if (field.type === "object" || field.type === "array") {
      return {
        ...next,
        fields: makeSchemaReadOnly(
          (field as ObjectFieldSchema | ArrayFieldSchema).fields
        ),
      };
    }

    return next;
  });
}
