import { Button, Group, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import { RenderersProvider } from "@/fields/context/RenderersContext";
import FieldLayoutWrapper from "@/fields/FieldRenderer/FieldLayoutWrapper";
import FieldRendererResolver from "@/fields/resolver/FieldRendererResolver";
import { layoutStrategies } from "@/fields/utils/layout.utils";
import {
  generateInitialValues,
  validateRequiredFields,
} from "@/fields/utils/values.utils";
import { AutoFormProps, AutoFormRef } from "./AutoForm.types";

export const AutoForm = forwardRef(function AutoForm<
  TValues extends Record<string, any> = Record<string, any>
>(
  {
    schema,
    currentValues,
    initialValues,
    layout = "vertical",
    readOnly,
    validate,
    onSubmit,
    onFieldChange,
    updateFieldSchema,
    prepareValues = (v) => v,
    afterSubmit = () => {},
    submitButton = true,
    customFieldRenderers,
    customFieldTypes,
    customTypeRenderers,
    loading,
  }: AutoFormProps<TValues>,
  ref: React.Ref<AutoFormRef<TValues>>
) {
  const [isFormLoading, setIsFormLoading] = useState(false);

  const form = useForm<TValues>({
    validate,
    enhanceGetInputProps(payload) {
      return {
        onFieldChange: async (value: any) => {
          payload.inputProps.onChange(value);
          await onFieldChange?.[payload.field]?.(value, form);
        },
      };
    },
  });

  const Layout = layoutStrategies[layout];

  const resolveSchema = (
    schema: any[],
    values: any,
    updaters?: Record<string, any>
  ): any[] => {
    return schema.map((field) => {
      if (field.type === "object" || field.type === "array") {
        const innerUpdaters = updaters?.[field.name];
        return {
          ...field,
          fields: resolveSchema(field.fields, values || {}, innerUpdaters),
        };
      }
      const updater = updaters?.[field.name];
      return updater ? updater(field, values) : field;
    });
  };

  const resolvedSchema = useMemo(() => {
    if (!updateFieldSchema) return schema;
    const values = form.getValues();
    return resolveSchema(schema, values, updateFieldSchema);
  }, [schema, form.values, updateFieldSchema]);

  const handleSubmit = form.onSubmit(async (vals) => {
    const requiredFields = validateRequiredFields(schema, vals);
    if (Object.keys(requiredFields).length) {
      form.setErrors(requiredFields);
      return;
    }
    const transformValuesBeforeSubmit = await prepareValues(vals);
    await onSubmit(transformValuesBeforeSubmit);
    afterSubmit(transformValuesBeforeSubmit);
  });

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(),
    reset: (v) => applyValues(v),
    validate: () => {
      const res = form.validate();
      return Object.keys(res.errors).length === 0;
    },
    getValues: () => form.getValues(),
    setValues: (v) => form.setValues(v),
    getFieldValue: (path) => form.getInputProps(path).value,
    setFieldValue: (path, value) => form.setFieldValue(path, value),
    isValid: () => Object.keys(form.validate().errors).length === 0,
    isDirty: () => form.isDirty(),
    isLoading: () => isFormLoading,
  }));

  async function applyValues(source?: (() => any) | any) {
    if (!source) return;

    setIsFormLoading(true);
    try {
      const temp = typeof source === "function" ? await source() : source;
      const formValues = generateInitialValues(schema, temp);
      form.setValues(formValues);
      form.setDirty(formValues);
    } finally {
      setIsFormLoading(false);
    }
  }

  useEffect(() => {
    if (initialValues) {
      applyValues(initialValues);
    } else {
      applyValues({});
    }
  }, []);

  useEffect(() => {
    applyValues(currentValues);
  }, [currentValues]);

  return (
    <RenderersProvider
      value={{ customFieldRenderers, customTypeRenderers, customFieldTypes }}
    >
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <LoadingOverlay visible={isFormLoading || loading} />
        {Layout(
          <>
            {resolvedSchema.map((field) => {
              const effectiveField = {
                ...field,
                readOnly: field.readOnly || readOnly,
              };

              if (effectiveField.visible === false) {
                return null;
              }

              return (
                <FieldLayoutWrapper
                  field={effectiveField}
                  layout={layout}
                  key={effectiveField.name}
                >
                  <FieldRendererResolver
                    field={effectiveField}
                    form={form}
                    customFieldRenderers={customFieldRenderers}
                    customTypeRenderers={customTypeRenderers}
                    customFieldTypes={customFieldTypes}
                    layout={layout}
                  />
                </FieldLayoutWrapper>
              );
            })}
          </>
        )}

        {!isFormLoading && (
          <>
            {typeof submitButton === "boolean" ? (
              submitButton ? (
                <Group justify="flex-end" mt="md">
                  <Button type="submit" loading={loading}>
                    Submit
                  </Button>
                </Group>
              ) : null
            ) : (
              submitButton
            )}
          </>
        )}
      </form>
    </RenderersProvider>
  );
});

export default AutoForm;
