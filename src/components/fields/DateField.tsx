import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';
import { DateInput } from '@mantine/dates';
import { BaseFieldProps } from '@/types/field';

dayjs.extend(customParseFormat);

interface DateFieldProps extends BaseFieldProps<Date> {}

const DateField: React.FC<DateFieldProps> = (props) => {
  const { name, onChange, value, readOnly } = props;

  return (
    <DateInput
      name={name}
      onChange={(value) => onChange(name, value)}
      value={value}
      readOnly={readOnly}
      valueFormat="YYYY-MM-DD"
      clearable
    />
  );
};

export default DateField;
