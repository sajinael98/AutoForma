import { useFormContext } from "@/components/AutoForm/context/FormContext";
import { Stack, Text } from "@mantine/core";
import React from "react";
import CheckBoxFieldRenderer from "../renderers/CheckBoxFieldRenderer";
import DateFieldRenderer from "../renderers/DateFieldRenderer";
import DateTimeFieldRenderer from "../renderers/DateTimeFieldRenderer";
import NumberFieldRenderer from "../renderers/NumberFieldRenderer";
import SelectFieldRenderer from "../renderers/SelectFieldRenderer";
import SwitchFieldRenderer from "../renderers/SwitchFieldRenderer";
import TagsInputFieldRenderer from "../renderers/TagsFieldRenderer";
import TextFieldRenderer from "../renderers/TextFieldRenderer";
import TimeFieldRenderer from "../renderers/TimeFieldRenderer";
import { FieldSchema } from "../types";
import ArrayLayout from "./ArrayLayout";
import { DefaultFieldRendererProps } from "./FieldRenderer.types";
import ObjectLayout from "./ObjectLayout";

interface DefaultFieldRenderWrapperProps {
  field: FieldSchema;
  children: React.ReactNode;
  layout?: "vertical" | "horizontal" | "grid";
}

export const DefaultFieldRenderWrapper = ({
  field,
  children,
}: DefaultFieldRenderWrapperProps) => {
  const form = useFormContext();
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

      {children}

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
};

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: DefaultFieldRendererProps<TValues>) {
  const { layout, field, form } = props;

  let InputNode: React.ReactNode = null;

  switch (field.type) {
    case "text":
      InputNode = <TextFieldRenderer field={field} form={form} />;
      break;

    case "select":
      InputNode = <SelectFieldRenderer field={field} form={form} />;
      break;

    case "object":
      InputNode = <ObjectLayout field={field} form={form} layout={layout} />;
      break;

    case "array":
      InputNode = <ArrayLayout field={field} form={form} layout={layout} />;
      break;

    case "checkbox":
      InputNode = <CheckBoxFieldRenderer field={field} form={form} />;
      break;

    case "number":
      InputNode = <NumberFieldRenderer field={field} form={form} />;
      break;

    case "date":
      InputNode = <DateFieldRenderer field={field} form={form} />;
      break;

    case "datetime":
      InputNode = <DateTimeFieldRenderer field={field} form={form} />;
      break;

    case "switch":
      InputNode = <SwitchFieldRenderer field={field} form={form} />;
      break;


    case "time":
      InputNode = <TimeFieldRenderer field={field} form={form} />;
      break;

    case "tags":
      InputNode = <TagsInputFieldRenderer field={field} form={form} />;
      break;

    default:
      InputNode = <div>Unsupported field type: {field.type}</div>;
      break;
  }

  return (
    <DefaultFieldRenderWrapper field={field}>
      {InputNode}
    </DefaultFieldRenderWrapper>
  );
}

export default FieldRenderer;
