import React, { Fragment } from 'react';
import { Button } from '@mantine/core';
import { FieldSchema } from '@/types/field';
import FieldRender from '../FieldRender';

interface ArrayFieldProps {
  name: string;
  value: Record<string, any>[];
  onChange: (name: string, value: string) => void;
  fields: FieldSchema[];
  options: {
    addElement: (val: Record<string, any>) => void;
    replaceElement: (index: number, val: Record<string, any>) => void;
    removeElement: (index: number) => void;
  };
  error?: Record<string, React.ReactNode>;
  readOnly?: true;
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
            error={error[`${parentName}.${rowIndex}.${field.name}`]}
            readOnly={readOnly}
          />
          {!readOnly && <Button onClick={() => options.removeElement(rowIndex)}>Remove</Button>}
        </Fragment>
      );
    });
  });

  return (
    <>
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
