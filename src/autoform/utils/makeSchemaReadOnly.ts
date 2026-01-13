import { HasFields, Schema } from '../types';

export function makeSchemaReadOnly<TCustom extends string = never>(
  schema: Schema<TCustom>
): Schema<TCustom> {
  return schema.map((fieldSchema) => {
    if (['object', 'array'].includes(fieldSchema.type)) {
      const fields = (fieldSchema as HasFields).fields;

      return {
        ...fieldSchema,
        readonly: true,
        fields: makeSchemaReadOnly(fields),
      };
    }
    return {
      ...fieldSchema,
      readonly: true,
    };
  });
}
