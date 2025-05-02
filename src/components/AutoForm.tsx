import React from 'react';
import { createFormContext, FormValidateInput } from '@mantine/form';
import { useDebouncedCallback } from '@mantine/hooks';
import { FieldRenderCustomRender } from '@/types/custom-render';
import { FieldSchema, FieldType } from '@/types/field';
import FieldRender from './FieldRender';

interface AutoFormProps {
  schema: FieldSchema[];
  onSubmit: (values: Record<string, any>) => void;
  container: (Form: React.ReactNode, onSubmit: VoidFunction) => React.ReactNode;
  fieldContainer?: (field: React.ReactNode, fieldSchema: FieldSchema) => React.ReactNode;
  customRender?: FieldRenderCustomRender;
  validate?: FormValidateInput<Record<string, any>>;
}

const [FormProvider, _, useForm] = createFormContext<Record<string, any>>();

const getDefaultValueForField = (type: string): any => {
  switch (type) {
    case 'text':
      return '';
    case 'number':
      return 0;
    case 'array':
      return [];
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
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
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
      const nestedErrors = validateRequiredFields(field.fields, values, fullName);
      Object.assign(errors, nestedErrors);
    } else if (field.required) {
      if (isValueEmpty(value)) {
        errors[fullName] = `${field.label ?? field.name} is required`;
      }
    }
  }

  return errors;
};

const AutoForm: React.FC<AutoFormProps> = (props) => {
  const { onSubmit, schema, container, fieldContainer, customRender, validate } = props;

  const form = useForm({
    mode: 'uncontrolled',
    onValuesChange(values, previous) {
      
    },
    initialValues: generateInitialValues(schema),
    validate,
  });

  const onChange = useDebouncedCallback((name: string, value: any) => {
    form.setFieldValue(name, value);
  }, 0);

  const getFieldError = (type: FieldType, name: string) => {
    const errors = form.errors;
    if (type === 'object' || type === "array") {
      const matchingKey = Object.entries(errors).reduce<Record<string, React.ReactNode>>(
        (err, [key, value]) => {
          if (key.startsWith(`${name}.`)) {
            err[key] = value;
          }
          return err;
        },
        {}
      );
      return matchingKey;
    }

    return errors[name];
  };

  const content = (
    <FormProvider form={form}>
      {schema.map((field, index) => (
        <FieldRender
          key={index}
          field={field}
          formValues={form.getValues()}
          error={getFieldError(field.type, field.name)}
          onChange={onChange}
          value={form.getValues()[field.name]}
          fieldContainer={fieldContainer}
          customRender={customRender}
        />
      ))}
    </FormProvider>
  );
  const handleSubmit = () => {
    const errors = validateRequiredFields(schema, form.getValues());
    if (Object.keys(errors).length > 0) {
      form.setErrors(errors);
      return;
    }

    form.onSubmit(onSubmit)();
  };
  return container(content, handleSubmit);
};

export default AutoForm;
