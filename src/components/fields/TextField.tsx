import React from 'react';
import { TextInput } from '@mantine/core';


interface TextFieldProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  readOnly?: true;
}

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