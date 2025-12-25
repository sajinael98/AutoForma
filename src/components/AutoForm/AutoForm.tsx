import { Box, Button, Group } from "@mantine/core";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

import FieldRenderer from "@/fields/FieldRenderer/FieldRenderer";
import { BuiltInHandler } from "@/fields/renderer-resolver/BuiltInHandler";
import { FieldNameHandler } from "@/fields/renderer-resolver/FieldNameHandler";
import { FieldTypeHandler } from "@/fields/renderer-resolver/FieldTypeHandler";
import { RendererResolverChain } from "@/fields/renderer-resolver/RendererResolverChain";

import { layoutStrategies } from "@/fields/utils/layout.utils";
import { makeSchemaReadOnly } from "@/fields/utils/schema.utils";
import {
  generateInitialValues,
  validateRequiredFields,
} from "@/fields/utils/values.utils";

import { RendererProvider } from "@/components/AutoForm/context/RenderersContext";
import { UpdateFieldSchemaProvider } from "@/components/AutoForm/context/UpdateFieldSchemaContext";
import { AutoFormProps, AutoFormRef } from "./AutoForm.types";
import { FormProvider, FormValues, useForm } from "./context/FormContext";
import { FieldFieldTypeHandler } from "@/fields/renderer-resolver/FieldFieldTypeHandler";
import FieldLayoutWrapper from "@/fields/FieldRenderer/FieldLayoutWrapper";
import { FormFieldSubscriber } from "@mantine/form";

const AutoForm = forwardRef<AutoFormRef, AutoFormProps>((props, ref) => {
  const {
    schema,
    readOnly,
    primaryAction = true,
    layout = "vertical",
    loading = true,
    values: getValues,
    initialValues: getInitialValues,
    preSubmit = (v) => v,
    onSubmit,
    postSubmit = () => {},
    updateFieldSchema = {},
    uiConfig,
    onFieldChange,
    onValuesChange,
    submitLabel = "Submit",
    validate
  } = props;

  const finalSchema = useMemo(
    () => (readOnly ? makeSchemaReadOnly(schema) : schema),
    [schema, readOnly]
  );

  const [isFormLoading, setIsFormLoading] = useState(loading);

  const form = useForm({
    validate,
    enhanceGetInputProps(payload) {
      return {
        onFieldChange: async (value: any) => {
          payload.inputProps.onChange(value);
          await onFieldChange?.[payload.field.replace(/\.\d+\./g, ".")]?.(
            payload.field,
            value,
            form
          );
        },
      };
    },
  });

  const rendererChain = useMemo(
    () =>
      new RendererResolverChain([
        new FieldNameHandler(uiConfig?.customFieldNameRenderers ?? {}),
        new FieldFieldTypeHandler(uiConfig?.customFieldTypeRenderers ?? {}),
        new FieldTypeHandler(uiConfig?.customTypeRenderers ?? {}),
        new BuiltInHandler(layout),
      ]),
    [layout, uiConfig]
  );

  const handleSubmit = form.onSubmit(async (vals) => {
    const errors = validateRequiredFields(schema, vals);
    if (Object.keys(errors).length) {
      form.setErrors(errors);
      return;
    }

    const prepared = await preSubmit(vals);
    await onSubmit(prepared);
    postSubmit(prepared);
  });

  const applyValues = (values?: FormValues) => {
    const initial = generateInitialValues(finalSchema, values);
    form.setValues(initial);
    form.resetDirty(initial);
  };

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        if (cancelled) return;

        if (getValues) return applyValues(await getValues());
        if (getInitialValues) return applyValues(await getInitialValues());
        applyValues();
      } finally {
        setIsFormLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [finalSchema, getValues, getInitialValues]);

  useImperativeHandle(
    ref,
    (): AutoFormRef => ({
      submit: () => handleSubmit(),

      reset: (values?: Partial<FormValues>) => {
        if (values) {
          applyValues(values);
          return;
        }
        form.reset();
      },

      validate: () => {
        const errors = validateRequiredFields(schema, form.values);
        form.setErrors(errors);
        return Object.keys(errors).length === 0;
      },

      getValues: () => form.getValues(),

      setValues: (values: FormValues) => {
        form.setValues(values);
      },

      getFieldValue: (path: string) => form.getInputProps(path).value,

      setFieldValue: async (path: string, value: any) => {
        form.setFieldValue(path, value);
        await onFieldChange?.[path.replace(/\.\d+\./g, ".")]?.(
          path,
          value,
          form
        );
      },

      isValid: () => Object.keys(form.errors).length === 0,

      isDirty: () => form.isDirty(),

      isLoading: () => isFormLoading,
    })
  );

  useEffect(() => {
    onValuesChange?.(form.getValues());
  }, [form.getValues()]);

  return (
    <FormProvider form={form}>
      <UpdateFieldSchemaProvider value={updateFieldSchema}>
        <RendererProvider value={rendererChain}>
          <Box>
            {layoutStrategies[layout](
              finalSchema.map((field) => (
                <FieldLayoutWrapper
                  key={field.name}
                  layout={layout}
                  field={field}
                >
                  <FieldRenderer fieldSchema={field} />
                </FieldLayoutWrapper>
              ))
            )}

            {primaryAction && !readOnly && (
              <Group justify="flex-end">
                <Button loading={isFormLoading} onClick={() => handleSubmit()}>
                  {submitLabel}
                </Button>
              </Group>
            )}
          </Box>
        </RendererProvider>
      </UpdateFieldSchemaProvider>
    </FormProvider>
  );
});

AutoForm.displayName = "AutoForm";

export default AutoForm;
