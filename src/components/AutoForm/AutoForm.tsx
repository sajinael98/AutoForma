import { Button, Grid, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useMemo } from "react";

import FieldRenderer from "@/fields/FieldRenderer/FieldRenderer";
import { AutoFormProps } from "./AutoForm.types";
import { generateInitialValues } from "@/fields/utils/values.utils";
import { layoutStrategies } from "@/fields/utils/layout.utils";

export function AutoForm<
  TValues extends Record<string, any> = Record<string, any>
>({
  schema,
  values,
  layout = "vertical",
  readOnly,
  validate,
  onSubmit,
  onFieldChange,
  customFieldRenderers,
  updateFieldSchema,
  transformBeforeSubmit = (v) => v,
  transformAfterSubmit = () => {},
  submitButton = true,
  customFieldTypes,
}: AutoFormProps<TValues>) {
  const form = useForm<TValues>({
    initialValues: generateInitialValues(schema),
    validate,
    transformValues: transformBeforeSubmit,
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
    await onSubmit(vals);
    transformAfterSubmit(vals);
  });

  useEffect(() => {
    if (values) {
      form.setValues(values);
      form.resetDirty(values);
    }
  }, [values]);

  return (
    <form onSubmit={handleSubmit}>
      {Layout(
        <>
          {resolvedSchema.map((field) => (
            <FieldRenderer<TValues>
              key={field.name}
              field={field}
              form={form}
              layout={layout}
              readOnly={readOnly}
              customFieldTypes={customFieldTypes}
            />
          ))}
        </>
      )}

      {typeof submitButton === "boolean" ? (
        submitButton ? (
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        ) : null
      ) : (
        submitButton
      )}
    </form>
  );
}

export default AutoForm;
