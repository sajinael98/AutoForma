import { Button, Divider, Group, Paper, Stack } from "@mantine/core";
import FieldLayoutWrapper from "../FieldRenderer/FieldLayoutWrapper";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import { ArrayFieldSchema } from "../types";
import { layoutStrategies } from "../utils/layout.utils";
import { generateInitialValues } from "../utils/values.utils";
import FieldRendererResolver from "@/fields/resolver/FieldRendererResolver";

type ArrayFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function ArrayFieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>({ field, form, layout = "grid" }: ArrayFieldRendererProps<TValues>) {
  const arrayField = field as ArrayFieldSchema<TValues>;

  const inputProps = form.getInputProps(arrayField.name);
  const arrayValue: Record<string, any>[] = inputProps.value ?? [];

  const isReadOnly = arrayField.readOnly === true;
  const isDisabled = arrayField.disabled === true;

  function handleAddRow() {
    inputProps.onFieldChange([
      ...arrayValue,
      generateInitialValues(arrayField.fields),
    ]);
  }

  function handleRemoveRow(index: number) {
    inputProps.onFieldChange(arrayValue.filter((_, i) => i !== index));
  }

  return (
    <Stack gap="md">
      {arrayValue.map((row, rowIndex) => (
        <Paper
          key={`${arrayField.name}.${rowIndex}`}
          withBorder
          radius="md"
          p="md"
          shadow="xs"
        >
          {layoutStrategies[layout](
            arrayField.fields?.map((innerField) => (
              <FieldLayoutWrapper
                key={`${field.name}.${rowIndex}.${innerField.name}`}
                field={innerField}
                layout={layout}
              >
                <FieldRendererResolver
                  field={{
                    ...innerField,
                    name: `${field.name}.${rowIndex}.${innerField.name}`,
                    disabled: isDisabled || innerField.disabled,
                    readOnly: isReadOnly || innerField.readOnly,
                  }}
                  form={form}
                  layout={layout}
                />
              </FieldLayoutWrapper>
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
