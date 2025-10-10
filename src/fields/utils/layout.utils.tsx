import { Grid, Group, Stack } from "@mantine/core";

export const layoutStrategies = {
  vertical: (children: React.ReactNode) => <Stack gap="md">{children}</Stack>,
  horizontal: (children: React.ReactNode) => (
    <Group wrap="wrap" gap="md">
      {children}
    </Group>
  ),
  grid: (children: React.ReactNode) => <Grid gutter="md">{children}</Grid>,
};
