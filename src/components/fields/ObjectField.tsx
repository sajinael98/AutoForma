import React from 'react';
import { FieldSchema } from '@/types/field';
import FieldRender from '../FieldRender';


interface ObjectFieldProps {
  name: string;
  value: Record<string, any>;
  onChange: (name: string, value: Record<string, any>) => void;
  fields: FieldSchema[];
  formValues: Record<string, any>;
  error?: Record<string, React.ReactNode>;
  readOnly?: true;
}

const ObjectField: React.FC<ObjectFieldProps> = (props) => {
  const {
    fields,
    name: parentName,
    onChange: onParentChange,
    value,
    formValues,
    error = {},
    readOnly
  } = props;

  const onChange = (name: string, value: any) => {
    onParentChange(`${parentName}.${name}`, value);
  };

  const content = fields.map((field, index) => (
    <FieldRender
      key={index}
      field={field}
      formValues={formValues}
      onChange={onChange}
      value={value[field.name]}
      error={error[`${parentName}.${field.name}`]}
      readOnly={readOnly}
    />
  ));
  return content;
};

export default ObjectField;