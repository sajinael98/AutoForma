import FieldRenderer from "@/fields/FieldRenderer/FieldRenderer";
import { Button, Grid, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useMemo } from "react";
import { AutoFormProps } from "./AutoForm.types";

export const layoutStrategies = {
  vertical: (children: React.ReactNode) => <Stack gap="md">{children}</Stack>,
  horizontal: (children: React.ReactNode) => (
    <Group wrap="wrap" gap="md">
      {children}
    </Group>
  ),
  grid: (children: React.ReactNode) => <Grid gutter="md">{children}</Grid>,
};

export function AutoForm<
  TValues extends Record<string, any> = Record<string, any>
>({
  values,
  layout = "vertical",
  schema,
  columns = 1,
  mode = "create",
  onSubmit,
  submitButton = true,
  transformBeforeSubmit = (v) => v,
  validate,
  readOnly,
  updateFieldSchema,
}: AutoFormProps<TValues>) {
  const form = useForm<TValues>({
    initialValues: (values ?? {}) as TValues,
    validate,
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

  const handleSubmit = form.onSubmit((vals) =>
    onSubmit(transformBeforeSubmit(vals))
  );

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
              columns={columns}
              mode={mode}
              readOnly={readOnly}
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
