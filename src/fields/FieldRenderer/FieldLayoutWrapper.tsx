import React from "react";
import { Grid, Box, Stack } from "@mantine/core";
import { FieldSchema } from "@/fields/types";

type FieldLayoutWrapperProps = {
  field: FieldSchema;
  layout: "vertical" | "horizontal" | "grid";
  columns?: number;
  children: React.ReactNode;
};

export function FieldLayoutWrapper({
  field,
  layout,
  columns = 1,
  children,
}: FieldLayoutWrapperProps) {
  if (layout === "grid") {
    const span =
      (field.meta as any)?.colSpan === "full"
        ? 12
        : (field.meta as any)?.colSpan ?? Math.floor(6 / columns);
    return <Grid.Col span={span}>{children}</Grid.Col>;
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
