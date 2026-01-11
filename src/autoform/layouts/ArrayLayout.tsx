import React from 'react';
import { FieldValues, useFormContext, useWatch } from 'react-hook-form';
import SchemaRenderer from '../render/SchemaRenderer';
import { ArrayFieldSchema } from '../types';
import { generateInitialValues } from '../utils';

interface ArrayRowProps {
  baseName: string;
  index: number;
  fields: ArrayFieldSchema['fields'];
}

const ArrayRow = React.memo((props: ArrayRowProps) => {
  const { baseName, index, fields } = props;

  const innerFields = React.useMemo(
    () =>
      fields.map((f) => ({
        ...f,
        name: `${baseName}.${index}.${f.name}`,
      })),
    [baseName, index, fields]
  );

  return (
    <div>
      <div>row {index}</div>
      <SchemaRenderer schema={innerFields} />
    </div>
  );
});

const ArrayLayout = (props: { fieldSchema: ArrayFieldSchema }) => {
  const { fieldSchema } = props;
  const { control, getValues, setValue } = useFormContext();

  const rows = useWatch({
    control,
    name: fieldSchema.name,
  }) as any[] | undefined;

  const safeRows = rows ?? [];

  const handleAddRow = () => {
    const current = getValues(fieldSchema.name) || [];
    setValue(fieldSchema.name, [...current, generateInitialValues(fieldSchema.fields)]);
  };

  const handleRemoveRow = (index: number) => {
    const current = (getValues(fieldSchema.name) || []) as FieldValues[];
    const next = current.filter((_, i) => i !== index);
    setValue(fieldSchema.name, next);
  };

  return (
    <div>
      {safeRows.map((_, index) => (
        <div key={index}>
          <ArrayRow baseName={fieldSchema.name} index={index} fields={fieldSchema.fields} />

          {!fieldSchema.readonly && (
            <button type="button" onClick={() => handleRemoveRow(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      {!fieldSchema.readonly && (
        <button type="button" onClick={handleAddRow}>
          Add Row
        </button>
      )}
    </div>
  );
};

export default React.memo(ArrayLayout);
