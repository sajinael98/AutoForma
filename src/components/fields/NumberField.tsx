import React from 'react';
import { NumberInput } from '@mantine/core';
import { BaseFieldProps } from '@/types/field';

interface NumberFieldProps extends BaseFieldProps<number> {}

const NumberField: React.FC<NumberFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <NumberInput
      name={name}
      onChange={(value) => onChange(name, value as number)}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default NumberField;
