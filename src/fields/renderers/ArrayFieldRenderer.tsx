import React from "react";
import { Button, Divider, Stack, Paper, Group } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { ArrayFieldSchema } from "../types";
import FieldRenderer from "../FieldRenderer/FieldRenderer";
import {
  generateInitialValues,
  layoutStrategies,
} from "@/components/AutoForm/AutoForm";

type ArrayFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = {
  field: ArrayFieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout: "vertical" | "horizontal" | "grid";
};

export function ArrayFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form, layout }: ArrayFieldRendererProps<TValues>) {
  const inputProps = form.getInputProps(field.name);
  const arrayValue: Record<string, any>[] = inputProps.value ?? [];

  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  function handleAddRow() {
    inputProps.onChange([...arrayValue, generateInitialValues(field.fields)]);
  }

  function handleRemoveRow(index: number) {
    inputProps.onChange(arrayValue.filter((_, i) => i !== index));
  }

  return (
    <Stack gap="md">
      {arrayValue.map((row, rowIndex) => (
        <Paper
          key={`${field.name}.${rowIndex}`}
          withBorder
          radius="md"
          p="md"
          shadow="xs"
        >
          {layoutStrategies[layout](
            field.fields?.map((innerField) => (
              <FieldRenderer
                key={`${field.name}.${rowIndex}.${innerField.name}`}
                field={{
                  ...innerField,
                  name: `${field.name}.${rowIndex}.${innerField.name}`,
                  disabled: isDisabled || innerField.disabled,
                  readOnly: isReadOnly || innerField.readOnly,
                }}
                form={form}
                layout={layout}
              />
            ))
          )}

          {!isReadOnly && !isDisabled && (
            <Group justify="flex-end" mt="xs">
              <Button
                color="red"
                variant="light"
                onClick={() => handleRemoveRow(rowIndex)}
              >
                Remove
              </Button>
            </Group>
          )}
        </Paper>
      ))}

      {!isReadOnly && !isDisabled && (
        <>
          {arrayValue.length > 0 && <Divider my="sm" />}
          <Button onClick={handleAddRow} variant="default">
            Add Row
          </Button>
        </>
      )}
    </Stack>
  );
}

export default ArrayFieldRenderer;
