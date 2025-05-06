import React, { useMemo } from 'react';
import { Fieldset, Text } from '@mantine/core';
import { FieldRenderCustomRender } from '@/types/custom-render';
import { ArrayFieldOptions, FieldSchema } from '@/types/field';
import ArrayField from './fields/ArrayField';
import CheckField from './fields/CheckField';
import DateField from './fields/DateField';
import DateTimeField from './fields/DateTimeField';
import NumberField from './fields/NumberField';
import ObjectField from './fields/ObjectField';
import SelectField from './fields/SelectField';
import TextAreaField from './fields/TextAreaField';
import TextField from './fields/TextField';
import TimeField from './fields/TimeField';

interface FieldRenderProps {
  field: FieldSchema;
  value: any;
  error?: React.ReactNode | Record<string, React.ReactNode>;
  onChange: (name: string, value: any) => void;
  formValues: Record<string, any>;
  fieldContainer?: (field: React.ReactNode, fieldSchema: FieldSchema) => React.ReactNode;
  customRender?: FieldRenderCustomRender;
  readOnly?: true;
}

export function getArrayOptions(
  name: string,
  onChange: (name: string, value: any) => void,
  value: Record<string, any>[]
): ArrayFieldOptions {
  return {
    addElement: (val) => {
      onChange(name, [...value, val]);
    },
    replaceElement: (index, val) => {
      const newValue = value.map((row, i) => (i === index ? val : row));
      onChange(name, newValue);
    },
    removeElement: (index) => {
      onChange(
        name,
        value.filter((_, i) => i !== index)
      );
    },
  };
}

const FieldRender: React.FC<FieldRenderProps> = ({
  field,
  value,
  error,
  onChange,
  formValues,
  fieldContainer = (field) => <>{field}</>,
  customRender,
  readOnly,
}) => {
  const isVisible = useMemo(() => {
    return typeof field.visible === 'function'
      ? field.visible(formValues)
      : field.visible !== false;
  }, [field.visible, formValues]);

  const isDisabled = useMemo(() => {
    return typeof field.disabled === 'function'
      ? field.disabled(formValues)
      : field.disabled === true;
  }, [field.disabled, formValues]);

  const arrayOptions = useMemo(() => {
    if (field.type !== 'array') {
      return undefined;
    }
    return getArrayOptions(field.name, onChange, value);
  }, [field.type, field.name, onChange, value]);

  const customField = useMemo(() => {
    return customRender?.(
      field,
      value,
      error,
      onChange,
      formValues,
      arrayOptions,
      readOnly || field.readOnly
    );
  }, [
    customRender,
    field,
    value,
    error,
    onChange,
    formValues,
    arrayOptions,
    readOnly,
    field.readOnly,
  ]);

  if (!isVisible) {
    return null;
  }

  if (customField) {
    return customField;
  }

  const renderField = () => {
    switch (field.type) {
      case 'text':
        return (
          <TextField
            name={field.name}
            value={value as string}
            onChange={onChange}
            readOnly={readOnly}
          />
        );
      case 'number':
        return (
          <NumberField
            name={field.name}
            value={value as number}
            onChange={onChange}
            readOnly={readOnly}
          />
        );
      case 'object':
        return (
          <ObjectField
            name={field.name}
            onChange={onChange}
            value={value}
            fields={field.fields ?? []}
            formValues={formValues}
            error={error as Record<string, React.ReactNode>}
            readOnly={readOnly}
          />
        );
      case 'array':
        return (
          <ArrayField
            name={field.name}
            onChange={onChange}
            value={value}
            fields={field.fields as FieldSchema[]}
            options={arrayOptions!}
            error={error as Record<string, React.ReactNode>}
            readOnly={readOnly}
          />
        );
      case 'check':
        return (
          <CheckField
            name={field.name}
            value={value as boolean}
            onChange={onChange}
            readOnly={readOnly}
            label={field.label}
          />
        );
      case 'select':
        return (
          <SelectField
            name={field.name}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            data={field.data as { label: string; value: string }[]}
          />
        );
      case 'textarea':
        return (
          <TextAreaField name={field.name} value={value} onChange={onChange} readOnly={readOnly} />
        );
      case 'date':
        return (
          <DateField name={field.name} value={value} onChange={onChange} readOnly={readOnly} />
        );
      case 'datetime':
        return (
          <DateTimeField name={field.name} value={value} onChange={onChange} readOnly={readOnly} />
        );
      case 'time':
        return (
          <TimeField name={field.name} value={value} onChange={onChange} readOnly={readOnly} />
        );

      default:
        return null;
    }
  };

  const content = (
    <Fieldset
      legend={field.type === 'check' ? undefined : field.label}
      variant="unstyled"
      disabled={isDisabled || readOnly}
      styles={{
        legend: {
          fontWeight: 500,
        },
      }}
    >
      {renderField()}
      {!['object', 'array'].includes(field.type) && typeof error === 'string' && (
        <Text c="red" fz="sm" fw={500}>
          {error}
        </Text>
      )}
    </Fieldset>
  );

  return fieldContainer(content, field);
};

export default FieldRender;