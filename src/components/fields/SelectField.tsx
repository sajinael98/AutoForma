import React from 'react';
import { Select } from '@mantine/core';
import { BaseFieldProps } from '@/types/field';

interface SelectFieldProps extends BaseFieldProps<string> {
  data: { label: string; value: string }[];
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { data, name, onChange, value, readOnly } = props;
  return (
    <Select
      name={name}
      data={data}
      value={value}
      onChange={(value) => onChange(name, value)}
      readOnly={readOnly}
      clearable
    />
  );
};

export default SelectField;
