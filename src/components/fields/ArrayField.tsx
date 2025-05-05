import React, { Fragment } from 'react';
import { Button, Text } from '@mantine/core';
import { BaseFieldProps, FieldSchema } from '@/types/field';
import FieldRender from '../FieldRender';


interface ArrayFieldProps extends BaseFieldProps<Record<string, any>[]> {
  fields: FieldSchema[];
  options: {
    addElement: (val: Record<string, any>) => void;
    replaceElement: (index: number, val: Record<string, any>) => void;
    removeElement: (index: number) => void;
  };
  error?: Record<string, React.ReactNode>;
}

const ArrayField: React.FC<ArrayFieldProps> = (props) => {
  const { fields, options, value, error = {}, name: parentName, readOnly } = props;

  const content = value.map((row, rowIndex) => {
    const onChange = (name: string, value: any) => {
      row[name] = value;
      options.replaceElement(rowIndex, row);
    };
    return fields.map((field, index) => {
      return (
        <Fragment key={index}>
          <FieldRender
            field={field}
            formValues={row}
            onChange={onChange}
            value={row[field.name]}
            error={field.name in (error[rowIndex] ?? {}) ? error[rowIndex][field.name] : undefined}
            readOnly={readOnly}
          />
          {!readOnly && <Button onClick={() => options.removeElement(rowIndex)}>Remove</Button>}
        </Fragment>
      );
    });
  });

  return (
    <>
      {typeof error === 'string' && (
        <Text c="red" fz="sm" fw={500}>
          {error}
        </Text>
      )}
      {content}
      {!readOnly && (
        <Button display="block" onClick={() => options.addElement({})}>
          Add
        </Button>
      )}
    </>
  );
};

export default ArrayField;