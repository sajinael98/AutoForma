import { useMemo } from 'react';
import SchemaRenderer from '../render/SchemaRenderer';
import { ObjectFieldSchema } from '../types';

const ObjectLayout = (props: { fieldSchema: ObjectFieldSchema }) => {
  const { fieldSchema } = props;

  let fields = useMemo(
    () =>
      fieldSchema.fields.map((innerFieldSchema) => ({
        ...innerFieldSchema,
        name: `${fieldSchema.name}.${innerFieldSchema.name}`,
      })),
    [fieldSchema.fields]
  );

  return <SchemaRenderer schema={fields} />;
};

export default ObjectLayout;
