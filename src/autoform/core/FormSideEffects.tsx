import { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormProps, FormValues } from '../types';
import { normalizeFieldPath } from '../utils';

function getValue(path: string, data: FormValues) {
  const isNumberString = (str: string) => /^\d+$/.test(str);
  const parts = path.split('.');

  let current = data;

  for (const part of parts) {
    if (current == null) return undefined;

    const key = isNumberString(part) ? Number(part) : part;
    current = current[key];
  }

  return current;
}

const useFormSideEffects = (props: {
  onValuesChange: (values: FormValues) => void;
  onDirtyChange: (isDirty: boolean) => void;
  onFieldChange: FormProps['onFieldChange'];
}) => {
  const { onDirtyChange, onValuesChange, onFieldChange } = props;
  const { formState, watch } = useFormContext<FormValues>();

  const firstRun = useRef(true);

  useEffect(() => {
    const subscription = watch((values, { name = '' }) => {
      onValuesChange(values as FormValues);
      const path = normalizeFieldPath(name);
      const value = getValue(name, values);
      onFieldChange?.[path]?.(name, value, values);
    });

    return () => subscription.unsubscribe();
  }, [watch, onValuesChange]);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    onDirtyChange(formState.isDirty);
  }, [formState.isDirty, onDirtyChange]);

  return null;
};

const FormSideEffects = ({
  onValuesChange,
  onDirtyChange,
  onFieldChange,
}: {
  onValuesChange: (values: FormValues) => void;
  onDirtyChange: (isDirty: boolean) => void;
  onFieldChange: FormProps['onFieldChange'];
}) => {
  useFormSideEffects({
    onDirtyChange,
    onValuesChange,
    onFieldChange,
  });

  return null;
};

export default FormSideEffects;
