import React, { useCallback, useMemo } from 'react';
import { createFormContext, FormValidateInput } from '@mantine/form';
import { useDebouncedCallback } from '@mantine/hooks';
import { FieldRenderCustomRender } from '@/types/custom-render';
import { FieldSchema, FieldType } from '@/types/field';
import FieldRender from './FieldRender';

interface AutoFormProps {
  schema: FieldSchema[];
  onSubmit: (values: Record<string, any>) => void;
  container: (Form: React.ReactNode, onSubmit: VoidFunction, readOnly?: true) => React.ReactNode;
  fieldContainer?: (field: React.ReactNode, fieldSchema: FieldSchema) => React.ReactNode;
  customRender?: FieldRenderCustomRender;
  validate?: FormValidateInput<Record<string, any>>;
  readOnly?: true;
}

const [FormProvider, _, useForm] = createFormContext<Record<string, any>>();

const getDefaultValueForField = (type: FieldType): any => {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    case 'array':
      return [];
    case 'check':
      return false;
    case 'object':
      return {};
    default:
      return '';
  }
};

const generateInitialValues = (schema: FieldSchema[]): Record<string, any> => {
  const result: Record<string, any> = {};

  for (const field of schema) {
    if (field.type === 'object' && field.fields) {
      result[field.name] = generateInitialValues(field.fields);
    } else {
      result[field.name] = field.initialValue ?? getDefaultValueForField(field.type);
    }
  }

  return result;
};

const isValueEmpty = (value: any): boolean => {
  return (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '') ||
    (Array.isArray(value) && value.length === 0)
  );
};

export const validateRequiredFields = (
  schema: FieldSchema[],
  values: Record<string, any>,
  parentPath = ''
): Record<string, string> => {
  const errors: Record<string, string> = {};

  for (const field of schema) {
    const fullName = parentPath ? `${parentPath}.${field.name}` : field.name;
    const value = fullName.split('.').reduce((acc, key) => acc?.[key], values);

    if (field.type === 'object' && field.fields) {
      Object.assign(errors, validateRequiredFields(field.fields, values, fullName));
    } else if (field.required && isValueEmpty(value)) {
      errors[fullName] = `${field.label ?? field.name} is required`;
    }
  }

  return errors;
};

const AutoForm: React.FC<AutoFormProps> = ({
  onSubmit,
  schema,
  container,
  fieldContainer,
  customRender,
  validate,
  readOnly,
}) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: generateInitialValues(schema),
    validate,
  });

  const onChange = useDebouncedCallback((name: string, value: any) => {
    form.setFieldValue(name, value);
  }, 0);

  const formValues = useMemo(() => form.getValues(), [form.getValues()]);

  const getFieldError = useCallback(
    (type: FieldType, name: string) => {
      const errors = form.errors;

      if (type === 'object' || type === 'array') {
        return Object.entries(errors).reduce<Record<string, React.ReactNode>>((acc, [key, val]) => {
          if (key.startsWith(`${name}.`)) {
            acc[key] = val;
          }
          return acc;
        }, {});
      }

      return errors[name];
    },
    [form.errors]
  );

  const handleSubmit = useCallback(() => {
    const currentValues = form.getValues();
    const errors = validateRequiredFields(schema, currentValues);

    if (Object.keys(errors).length > 0) {
      form.setErrors(errors);
      return;
    }

    form.onSubmit(onSubmit)();
  }, [form, onSubmit, schema]);

  const content = (
    <FormProvider form={form}>
      {schema.map((field, index) => (
        <FieldRender
          key={index}
          field={field}
          formValues={formValues}
          value={formValues[field.name]}
          error={getFieldError(field.type, field.name)}
          onChange={onChange}
          fieldContainer={fieldContainer}
          customRender={customRender}
          readOnly={field.readOnly || readOnly}
        />
      ))}
    </FormProvider>
  );

  return container(content, handleSubmit, readOnly);
};

export default AutoForm;