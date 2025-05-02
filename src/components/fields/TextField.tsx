import React from 'react';
import { TextInput } from '@mantine/core';
import { BaseFieldProps } from '@/types/field';

interface TextFieldProps extends BaseFieldProps<string> {}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <TextInput
      name={name}
      onChange={(value) => onChange(name, value.target.value)}
      value={value}
      readOnly={readOnly}
    />
  );
};

export default TextField;
