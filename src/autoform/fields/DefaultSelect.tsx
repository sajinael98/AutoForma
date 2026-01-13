import { useFormContext } from 'react-hook-form';
import { FieldProps, SelectFieldSchema } from '../types';

const DefaultSelect = <TCustom extends string = never>(props: FieldProps<TCustom>) => {
  const { fieldSchema } = props;
  const { register } = useFormContext();

  const registerProps = register(fieldSchema.name);

  const options = (fieldSchema as SelectFieldSchema).options;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>{fieldSchema.label}</label>
      <select {...registerProps} disabled={fieldSchema.readonly}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefaultSelect;
