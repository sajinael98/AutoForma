import React from 'react';
import { BaseFieldProps, FieldSchema } from '@/types/field';
import FieldRender from '../FieldRender';

interface ObjectFieldProps extends BaseFieldProps<Record<string, any>> {
  fields: FieldSchema[];
  formValues: Record<string, any>;
  error?: Record<string, React.ReactNode>;
}

const ObjectField: React.FC<ObjectFieldProps> = (props) => {
  const {
    fields,
    name: parentName,
    onChange: onParentChange,
    value,
    formValues,
    error = {},
    readOnly,
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
