import React from 'react';
import { Fieldset, Text } from '@mantine/core';
import { FieldRenderCustomRender } from '@/types/custom-render';
import { FieldSchema } from '@/types/field';
import ArrayField from './fields/ArrayField';
import NumberField from './fields/NumberField';
import ObjectField from './fields/ObjectField';
import TextField from './fields/TextField';

interface FieldRenderProps {
  field: FieldSchema;
  value: any;
  error?: React.ReactNode | Record<string, React.ReactNode>;
  onChange: (name: string, value: any) => void;
  formValues: Record<string, any>;
  fieldContainer?: (field: React.ReactNode, fieldSchema: FieldSchema) => React.ReactNode;
  customRender?: FieldRenderCustomRender;
}

const FieldRender: React.FC<FieldRenderProps> = (props) => {
  const {
    field,
    formValues,
    onChange,
    value,
    fieldContainer = (field) => <>{field}</>,
    customRender,
    error,
  } = props;

  const isVisible =
    typeof field.visible === 'function' ? field.visible(formValues) : field.visible !== false;

  const isDisabled =
    typeof field.disabled === 'function' ? field.disabled(formValues) : field.disabled === true;

  if (!isVisible) {
    return null;
  }

  const renderField = () => {
    const options =
      field.type === 'array'
        ? {
            addElement: (val: Record<string, any>) => {
              const newValue = [...value, val];
              onChange(field.name, newValue);
            },
            replaceElement: (index: number, val: Record<string, any>) => {
              const newValue = value.map((row: Record<string, any>, i: number) => {
                return i === index ? val : row;
              });
              onChange(field.name, newValue);
            },

            removeElement: (index: number) => {
              const newValue = value.filter((_: Record<string, any>, i: number) => i !== index);
              onChange(field.name, newValue);
            },
          }
        : undefined;

    if (customRender) {
      const custom = customRender(field, value, error, onChange, formValues);
      if (custom) {
        return custom;
      }
    }

    switch (field.type) {
      case 'text':
        return <TextField name={field.name} value={value as string} onChange={onChange} />;
      case 'number':
        return <NumberField name={field.name} value={value as number} onChange={onChange} />;
      case 'object':
        return (
          <ObjectField
            name={field.name}
            onChange={onChange}
            value={value}
            fields={field.fields ?? []}
            formValues={formValues}
            error={error as Record<string, React.ReactNode>}
          />
        );
      case 'array':
        return (
          <ArrayField
            name={field.name}
            onChange={onChange}
            value={value}
            fields={field.fields as FieldSchema[]}
            options={
              options as {
                addElement: (value: Record<string, any>) => void;
                replaceElement: (index: number, val: Record<string, any>) => void;
                removeElement: (index: number) => void;
              }
            }
            error={error as Record<string, React.ReactNode>}
          />
        );
      default:
        return null;
    }
  };

  const content = (
    <Fieldset
      legend={field.label ?? undefined}
      variant="unstyled"
      disabled={isDisabled}
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
