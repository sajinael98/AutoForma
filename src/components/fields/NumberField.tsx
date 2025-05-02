import React from 'react';
import { NumberInput } from '@mantine/core';


interface NumberFieldProps {
  name: string;
  value: number;
  onChange: (name: string, value: number | string) => void;
  readOnly?: true;
}

const NumberField: React.FC<NumberFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <NumberInput
      name={name}
      onChange={(value) => onChange(name, value)}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default NumberField;