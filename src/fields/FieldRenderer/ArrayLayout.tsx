import { FormValues } from "@/components/AutoForm/context/FormContext";
import { Button, Divider } from "@mantine/core";
import React from "react";
import { ArrayFieldSchema, FieldSchema } from "../types";
import { layoutStrategies } from "../utils/layout.utils";
import { generateInitialValues } from "../utils/values.utils";
import FieldRenderer from "./FieldRenderer";
import { DefaultFieldRendererProps } from "./FieldRenderer.types";

const ArrayLayout = (props: DefaultFieldRendererProps<FormValues>) => {
  const { field, form, layout = "vertical" } = props;
  const arrayFieldSchema = field as ArrayFieldSchema;
  const inputProps = form.getInputProps(arrayFieldSchema.name);

  const rows = (inputProps?.value ?? []) as Record<string, any>[];

  const isReadOnly = field.readOnly === true;
  const isDisabled = field.disabled === true;

  const allowedAdd = !isReadOnly && !isDisabled;

  function handleAddRow() {
    inputProps.onFieldChange([
      ...rows,
      generateInitialValues(arrayFieldSchema.fields),
    ]);
  }

  function handleRemoveRow(index: number) {
    inputProps.onFieldChange(rows.filter((_, i) => i !== index));
  }

  return (
    <>
      {layoutStrategies[layout](
        rows.map((_, index) => {
          return (
            <React.Fragment key={index}>
              {arrayFieldSchema.fields.map((field) => {
                const newFieldSchema: FieldSchema = {
                  ...field,
                  name: `${arrayFieldSchema.name}.${index}.${field.name}`,
                };

                return (
                  <FieldRenderer
                    key={newFieldSchema.name}
                    fieldSchema={newFieldSchema}
                  />
                );
              })}
              <Button
                size="compact-md"
                color="red"
                w={120}
                onClick={() => handleRemoveRow(index)}
              >
                Delete row
              </Button>
            </React.Fragment>
          );
        })
      )}

      {allowedAdd && (
        <>
          {rows.length > 0 && <Divider mb="md" />}
          <Button onClick={handleAddRow} variant="light" size="compact-md">
            Add
          </Button>
        </>
      )}
    </>
  );
};

export default ArrayLayout;
