import React from "react";
import { Box, Text, Stack } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { FieldSchema } from "@/fields/types";

type DefaultFieldRenderProps<TValues extends Record<string, any>> = {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  children: React.ReactNode;
};

export function DefaultFieldRender<TValues extends Record<string, any>>({
  field,
  form,
  children,
}: DefaultFieldRenderProps<TValues>) {
  const { error } = form.getInputProps(field.name);

  return (
    <Stack gap={4}>
      {field.label && (
        <Text
          fw={500}
          size="sm"
          mb={2}
          component="label"
          htmlFor={field.name}
          style={{ display: "block" }}
        >
          {field.label}{" "}
          {field.required && (
            <Text component="span" c="red" fz="sm">
              *
            </Text>
          )}
        </Text>
      )}

      <Box>{children}</Box>

      {field.description && (
        <Text size="xs" c="dimmed" mt={2} style={{ lineHeight: 1.4 }}>
          {field.description}
        </Text>
      )}

      {error && (
        <Text size="xs" c="red" mt={2} style={{ fontWeight: 500 }}>
          {error}
        </Text>
      )}
    </Stack>
  );
}

export default DefaultFieldRender;
