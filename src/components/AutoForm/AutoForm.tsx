import { Button, Group, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import { layoutStrategies } from "@/fields/utils/layout.utils";
import {
  generateInitialValues,
  validateRequiredFields,
} from "@/fields/utils/values.utils";
import { AutoFormProps, AutoFormRef } from "./AutoForm.types";
import FieldLayoutWrapper from "@/fields/FieldRenderer/FieldLayoutWrapper";
import FieldRendererResolver from "@/fields/resolver/FieldRendererResolver";
import { RenderersProvider } from "@/fields/context/RenderersContext";

export const AutoForm = forwardRef(function AutoForm<
  TValues extends Record<string, any> = Record<string, any>
>(
  {
    schema,
    values,
    getInitialValues,
    layout = "vertical",
    readOnly,
    validate,
    onSubmit,
    onFieldChange,
    updateFieldSchema,
    transformBeforeSubmit = (v) => v,
    transformAfterSubmit = () => {},
    submitButton = true,
    customFieldRenderers,
    customFieldTypes,
    customTypeRenderers,
    loading,
  }: AutoFormProps<TValues>,
  ref: React.Ref<AutoFormRef<TValues>>
) {
  const [isFormLoading, setIsFormLoading] = useState(true);

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

  const resolvedSchema = useMemo(() => {
    if (!updateFieldSchema) return schema;
    const values = form.getValues();
    return schema.map((field) => {
      const updater = updateFieldSchema[field.name];
      return updater ? updater(field, values) : field;
    });
  }, [schema, form.values, updateFieldSchema]);

  const handleSubmit = form.onSubmit(async (vals) => {
    const requiredFields = validateRequiredFields(schema, vals);
    if (Object.keys(requiredFields).length) {
      form.setErrors(requiredFields);
      return;
    }
    const transformValuesBeforeSubmit = await transformBeforeSubmit(vals);
    await onSubmit(transformValuesBeforeSubmit);
    transformAfterSubmit(transformValuesBeforeSubmit);
  });

  useImperativeHandle(ref, () => ({
    submit: () => handleSubmit(),
    reset: (v) => {
      const fullValues = generateInitialValues(schema, v);
      form.setValues(fullValues);
      form.setDirty(fullValues);
    },
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
  }));

  useEffect(() => {
    if (values) {
      const fullValues = generateInitialValues(schema, values);
      form.setValues(fullValues);
      form.resetDirty(fullValues);
    }
  }, [values, schema]);

  useEffect(() => {
    async function loadInitialValues() {
      const values = getInitialValues ? await getInitialValues() : {};
      form.initialize(generateInitialValues(schema, values));
      setIsFormLoading(false);
    }
    loadInitialValues();
  }, [schema]);

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

              if (!effectiveField.visible) {
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
      </form>
    </RenderersProvider>
  );
});

export default AutoForm;
