import React from "react";
import { Box, Text } from "@mantine/core";
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
  const error = form.getInputProps(field.name).error;

  return (
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
}

export default DefaultFieldRender;
