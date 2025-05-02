import React from 'react';
import { Checkbox } from '@mantine/core';
import { BaseFieldProps } from '@/types/field';

interface CheckFieldProps extends BaseFieldProps<boolean> {
  label: string;
}

const CheckField: React.FC<CheckFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;
  return (
    <Checkbox
      name={name}
      checked={value}
      readOnly={readOnly}
      onChange={(e) => onChange(name, e.target.checked)}
    />
  );
};

export default CheckField;
