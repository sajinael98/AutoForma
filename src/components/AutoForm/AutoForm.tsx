import React from "react";
import { AutoFormProps } from "./AutoForm.types";
import { createFormContext } from "@mantine/form";
import { Grid, Group, Stack } from "@mantine/core";

const [FormProvider, useFormContext, useForm] =
  createFormContext<Record<string, any>>();

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
  const { values, layout = "vertical" } = props;

  const form = useForm({
    initialValues: values ?? {},
  });

  const Layout = layoutStrategies[layout];

  return <FormProvider form={form}>{Layout(<div>saji</div>)}</FormProvider>;
}

export default AutoForm;
