import { HasFields, Schema } from "../types";

export function disableFields(schema: Schema): Schema {
  return schema.map((fieldSchema) => {
    if (["array", "object"].includes(fieldSchema.type)) {
      const fields = (fieldSchema as HasFields).fields;

      return {
        ...fieldSchema,
        disabled: true,
        fields: disableFields(fields),
      };
    }
    return {
      ...fieldSchema,
      disabled: true,
    };
  });
}
