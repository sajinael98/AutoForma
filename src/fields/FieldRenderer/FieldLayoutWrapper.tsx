import React from "react";
import { Grid, Box, Stack } from "@mantine/core";
import { FieldSchema } from "@/fields/types";

type FieldLayoutWrapperProps = {
  field: FieldSchema;
  layout: "vertical" | "horizontal" | "grid";
  children: React.ReactNode;
};

export function FieldLayoutWrapper({
  field,
  layout,
  children,
}: FieldLayoutWrapperProps) {
  if (layout === "grid") {
    const span = field.column ?? 6;
    return (
      <Grid.Col
        span={{
          base: 12,
          md: span,
        }}
      >
        {children}
      </Grid.Col>
    );
  }

  if (layout === "horizontal") {
    return (
      <Box style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {children}
      </Box>
    );
  }

  return <Stack gap="xs">{children}</Stack>;
}

export default FieldLayoutWrapper;
