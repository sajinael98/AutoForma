import React from "react";
import { Box, Grid, Stack, Text } from "@mantine/core";
import { FieldSchema } from "@/fields/types";
import { UseFormReturnType } from "@mantine/form";

type DefaultFieldRenderProps<
  TValues extends Record<string, any> = Record<string, any>
> = {
  field: FieldSchema<TValues>;
  layout: "vertical" | "horizontal" | "grid";
  columns?: number;
  children: React.ReactNode;
  form: UseFormReturnType<TValues>;
};

export function DefaultFieldRender<
  TValues extends Record<string, any> = Record<string, any>
>({
  field,
  layout,
  columns = 1,
  children,
  form,
}: DefaultFieldRenderProps<TValues>) {
  const error = form.getInputProps(field.name).error;

  const content = (
    <Box>
      {field.label && (
        <Text fw={500} size="sm" mb="xs">
          {field.label}{" "}
          {field.required && (
            <Text c="red" fz="sm" span>
              &#42;
            </Text>
          )}
        </Text>
      )}
      {children}
      {field.description && (
        <Text size="xs" c="dimmed" mt={5}>
          {field.description}
        </Text>
      )}
      {error && (
        <Text size="xs" c="red" mt={5}>
          {error}
        </Text>
      )}
    </Box>
  );

  if (layout === "grid") {
    const span =
      (field.meta as any)?.colSpan === "full"
        ? 12
        : (field.meta as any)?.colSpan ?? Math.floor(6 / columns);
    return <Grid.Col span={span}>{content}</Grid.Col>;
  }

  if (layout === "horizontal") {
    return (
      <Box style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {content}
      </Box>
    );
  }

  return <Stack gap="xs">{content}</Stack>;
}

export default DefaultFieldRender;
