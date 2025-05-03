import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';
import { DateTimePicker } from '@mantine/dates';
import { BaseFieldProps } from '@/types/field';

dayjs.extend(customParseFormat);

interface DateTimeFieldProps extends BaseFieldProps<Date> {}

const DateTimeField: React.FC<DateTimeFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <DateTimePicker
      name={name}
      onChange={(value) => onChange(name, value)}
      value={value}
      readOnly={readOnly}
      valueFormat="YYYY-MM-DD HH:mm:ss"
      clearable
    />
  );
};

export default DateTimeField;
