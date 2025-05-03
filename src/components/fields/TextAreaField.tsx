import React from 'react';
import { Textarea } from '@mantine/core';
import { BaseFieldProps } from '@/types/field';

interface TextAreaFieldProps extends BaseFieldProps<string> {}

const TextAreaField: React.FC<TextAreaFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <Textarea
      name={name}
      onChange={(e) => onChange(name, e.target.value)}
      value={value}
      readOnly={readOnly}
      styles={{
        input: {
            height: 200
        }
      }}
    />
  );
};

export default TextAreaField;
