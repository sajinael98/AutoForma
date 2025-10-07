import React, { useMemo } from "react";
import { AutoFormProps } from "./AutoForm.types";
import { useForm } from "@mantine/form";
import { Button, Grid, Group, Stack } from "@mantine/core";
import FieldRenderer from "@/fields/FieldRenderer/FieldRenderer";

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
>(props: AutoFormProps<TValues>) {
  const {
    values,
    layout = "vertical",
    schema,
    columns = 1,
    mode = "create",
    onSubmit,
    submitButton = true,
    transformBeforeSubmit = (values) => values,
  } = props;

  const form = useForm<TValues>({
    initialValues: (values ?? {}) as TValues,
  });

  const Layout = layoutStrategies[layout];

  const handleSubmit = form.onSubmit((values) =>
    props.onSubmit(transformBeforeSubmit(values))
  );

  return (
    <form onSubmit={handleSubmit}>
      {Layout(
        <>
          {schema.map((field) => (
            <FieldRenderer<TValues>
              key={field.name}
              field={field}
              form={form}
              layout={layout}
              columns={columns}
              mode={mode}
              readOnly={props.readOnly}
            />
          ))}
        </>
      )}
      {typeof submitButton === "boolean" && submitButton === true && (
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      )}
      {typeof submitButton !== "boolean" && submitButton}
    </form>
  );
}

export default AutoForm;
