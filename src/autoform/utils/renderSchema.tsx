import ArrayLayout from "../layouts/ArrayLayout";
import FieldLayout from "../layouts/FieldLayout";
import ObjectLayout from "../layouts/ObjectLayout";
import {
  ArrayFieldSchema,
  HasFields,
  ObjectFieldSchema,
  Schema,
} from "../types";

export function renderSchema(schema: Schema) {
  return schema.map((fieldSchema) => {
    switch (fieldSchema.type) {
      case "array":
        return (
          <ArrayLayout
            key={fieldSchema.name}
            fieldSchema={fieldSchema as ArrayFieldSchema}
          />
        );
      case "object":
        return (
          <ObjectLayout
            key={fieldSchema.name}
            fieldSchema={fieldSchema as ObjectFieldSchema}
          />
        );
      default:
        return <FieldLayout key={fieldSchema.name} fieldSchema={fieldSchema} />;
    }
  });
}
