import React from 'react';
import FieldLayout from '../layouts/FieldLayout';
import { Schema } from '../types';

interface SchemaRendererProps<TCustom extends string = never> {
  schema: Schema<TCustom>;
}

const SchemaRenderer = React.memo(
  <TCustom extends string = never>(props: SchemaRendererProps<TCustom>) => {
    const { schema } = props;
    
    return schema.map((fieldSchema) => (
      <FieldLayout key={fieldSchema.name} fieldSchema={fieldSchema} />
    ));
  }
);

export default SchemaRenderer;
