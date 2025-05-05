import React, { useCallback, useEffect, useMemo } from 'react';
import { createFormContext, FormValidateInput } from '@mantine/form';
import { useDebouncedCallback } from '@mantine/hooks';
import { FieldRenderCustomRender } from '@/types/custom-render';
import { FieldSchema, FieldType } from '@/types/field';
import FieldRender from './FieldRender';


interface AutoFormProps {
  values?: Record<string, any>;
  schema: FieldSchema[];
  onSubmit: (values: Record<string, any>) => void;
  container: (Form: React.ReactNode, onSubmit: VoidFunction, readOnly?: true) => React.ReactNode;
  fieldContainer?: (field: React.ReactNode, fieldSchema: FieldSchema) => React.ReactNode;
  customRender?: FieldRenderCustomRender;
  validate?: FormValidateInput<Record<string, any>>;
  readOnly?: true;
  onFieldChange?: (name: string, value: any, values: Record<string, any>) => Record<string, any>;
}

const [FormProvider, _, useForm] = createFormContext<Record<string, any>>();

const getDefaultValueForField = (type: FieldType): any => {
  switch (type) {
    case 'number':
      return 0;
    case 'array':
      return [];
    case 'check':
      return false;
    case 'object':
      return {};
    case 'select':
    case 'date':
    case 'datetime':
      return null;
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
    const fieldValue = values?.[field.name];

    if (field.type === 'object') {
      Object.assign(errors, validateRequiredFields(field.fields, fieldValue || {}, fullName));
    } else if (field.type === 'array') {
      if (field.required && (!Array.isArray(fieldValue) || fieldValue.length === 0)) {
        errors[fullName] = field.name + ' is required';
        continue;
      }

      if (Array.isArray(fieldValue)) {
        fieldValue.forEach((item, index) => {
          Object.assign(errors, validateRequiredFields(field.fields, item, `${fullName}.${index}`));
        });
      }
    } else if (field.required && isValueEmpty(fieldValue)) {
      errors[fullName] = field.name + ' is required';
    }
  }

  return errors;
};

function buildErrorObject(flatErrors) {
  const error = {};

  Object.entries(flatErrors).forEach(([key, value]) => {
    const keys = key.split('.');
    let curr: Record<string, string> = error;

    keys.forEach((subKey, index) => {
      const isLast = index === keys.length - 1;
      const nextKey = keys[index + 1];

      if (isLast) {
        curr[subKey] = value;
      } else {
        if (!(subKey in curr)) {
          curr[subKey] = {};
        }
        curr = curr[subKey];
      }
    });
  });

  return error;
}

const AutoForm: React.FC<AutoFormProps> = ({
  onSubmit,
  schema,
  container,
  fieldContainer,
  customRender,
  validate,
  readOnly,
  values,
  onFieldChange,
}) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: generateInitialValues(schema),
    validate,
  });

  const formValues = useMemo(() => form.getValues(), [form.getValues()]);

  const onChange = useDebouncedCallback((name: string, value: any) => {
    form.setFieldValue(name, value);
    if (onFieldChange) {
      const updates = onFieldChange(name, value, formValues);
      form.setValues(updates);
    }
  }, 0);

  const getFieldError = useCallback(
    (type: FieldType, name: string) => {
      const errors = form.errors;

      if (type === 'object' || type === 'array') {
        return buildErrorObject(errors)[name];
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

  useEffect(() => {
    if (values) {
      form.initialize(values);
    }
  }, [values]);

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
