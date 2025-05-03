import React, { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { BaseFieldProps } from '@/types/field';

interface TimeFieldProps extends BaseFieldProps<string> {}

const TimeField: React.FC<TimeFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;
  
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      &#x1F55B;
    </ActionIcon>
  );

  return (
    <TimeInput
      name={name}
      onChange={(e) => onChange(name, e.target.value)}
      value={value}
      readOnly={readOnly}
      ref={ref}
      rightSection={pickerControl}
      withSeconds
    />
  );
};

export default TimeField;
