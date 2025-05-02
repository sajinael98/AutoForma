import { TextInput } from '@mantine/core';
import React from 'react';

interface TextFieldProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { name, onChange, value } = props;

  return (
    <TextInput name={name} onChange={(value) => onChange(name, value.target.value)} value={value} />
  );
};

export default TextField;
