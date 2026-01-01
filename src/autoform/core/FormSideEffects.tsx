import { useFormContext, useWatch } from "react-hook-form";
import { FormValues } from "../types";
import { useEffect } from "react";

const useFormSideEffects = (props: {
  onValuesChange: (values: FormValues) => void;
  onDirtyChange: (isDirty: boolean) => void;
}) => {
  const { onDirtyChange, onValuesChange } = props;
  const { formState, control } = useFormContext();
  const watchedValues = useWatch({
    control,
  });

  useEffect(() => {
    onValuesChange(watchedValues);
  }, [watchedValues]);

  useEffect(() => {
    onDirtyChange(formState.isDirty);
  }, [formState.isDirty]);

  return null;
};

const FormSideEffects = ({
  onValuesChange,
  onDirtyChange,
}: {
  onValuesChange: (values: FormValues) => void;
  onDirtyChange: (isDirty: boolean) => void;
}) => {
  useFormSideEffects({
    onDirtyChange,
    onValuesChange,
  });

  return null;
};

export default FormSideEffects;
