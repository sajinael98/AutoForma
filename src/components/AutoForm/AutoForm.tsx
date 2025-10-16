import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useMemo } from "react";

import { layoutStrategies } from "@/fields/utils/layout.utils";
import { generateInitialValues } from "@/fields/utils/values.utils";
import { AutoFormProps } from "./AutoForm.types";
import FieldLayoutWrapper from "@/fields/FieldRenderer/FieldLayoutWrapper";
import FieldRendererResolver from "@/fields/resolver/FieldRendererResolver";
import { RenderersProvider } from "@/fields/context/RenderersContext";

export function AutoForm<
  TValues extends Record<string, any> = Record<string, any>
>({
  schema,
  values,
  layout = "vertical",
  readOnly,
  validate,
  onSubmit,
  onFieldChange,
  updateFieldSchema,
  transformBeforeSubmit = (v) => v,
  transformAfterSubmit = () => {},
  submitButton = true,
  customFieldRenderers,
  customFieldTypes,
  customTypeRenderers,
}: AutoFormProps<TValues>) {
  const form = useForm<TValues>({
    initialValues: generateInitialValues(schema),
    validate,
    transformValues: transformBeforeSubmit,
    enhanceGetInputProps(payload) {
      return {
        onFieldChange: async (value: any) => {
          payload.inputProps.onChange(value);
          await onFieldChange?.[payload.field]?.(value, form);
        },
      };
    },
  });

  const Layout = layoutStrategies[layout];

  const resolvedSchema = useMemo(() => {
    if (!updateFieldSchema) return schema;
    const values = form.getValues();
    return schema.map((field) => {
      const updater = updateFieldSchema[field.name];
      return updater ? updater(field, values) : field;
    });
  }, [schema, form.values, updateFieldSchema]);

  const handleSubmit = form.onSubmit(async (vals) => {
    await onSubmit(vals);
    transformAfterSubmit(vals);
  });

  useEffect(() => {
    if (values) {
      form.setValues(values);
      form.resetDirty(values);
    }
  }, [values]);

  return (
    <RenderersProvider
      value={{ customFieldRenderers, customTypeRenderers, customFieldTypes }}
    >
      <form onSubmit={handleSubmit}>
        {Layout(
          <>
            {resolvedSchema.map((field) => {
              const effectiveField = {
                ...field,
                readOnly: field.readOnly || readOnly,
              };

              return (
                <FieldLayoutWrapper
                  field={effectiveField}
                  layout={layout}
                  key={effectiveField.name}
                >
                  <FieldRendererResolver
                    field={effectiveField}
                    form={form}
                    customFieldRenderers={customFieldRenderers}
                    customTypeRenderers={customTypeRenderers}
                    customFieldTypes={customFieldTypes}
                    layout={layout}
                  />
                </FieldLayoutWrapper>
              );
            })}
          </>
        )}

        {typeof submitButton === "boolean" ? (
          submitButton ? (
            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          ) : null
        ) : (
          submitButton
        )}
      </form>
    </RenderersProvider>
  );
}

export default AutoForm;
