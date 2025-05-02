import React, { useMemo } from 'react';
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
  readOnly?: true;
}

type ArrayFieldOptions = {
  addElement: (value: Record<string, any>) => void;
  replaceElement: (index: number, val: Record<string, any>) => void;
  removeElement: (index: number) => void;
};

function getArrayOptions(
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

  const renderField = () => {
    if (customField) {
      return customField;
    }

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
      default:
        return null;
    }
  };

  const content = (
    <Fieldset
      legend={field.label || undefined}
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
