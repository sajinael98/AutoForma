import { DateInput } from '@mantine/dates'
import { FieldRendererProps } from '../FieldRenderer/FieldRenderer.types'
import dayjs from 'dayjs'

type DateFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>

export function DateFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form }: DateFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name)

  const isReadOnly = field.readOnly === true
  const isDisabled = field.disabled === true

  const handleChange = (value: Date | null) => {
    inputProps.onFieldChange(dayjs(value, 'YYYY-MM-DD').toDate());
  }

  return (
    <DateInput
      value={inputProps.value ?? null}
      onChange={isReadOnly || isDisabled ? undefined : handleChange}
      readOnly={isReadOnly}
      disabled={isDisabled}
      required={field.required}
      placeholder={field.placeholder}
      valueFormat="YYYY-MM-DD"
      error={undefined}
    />
  )
}

export default DateFieldRenderer
