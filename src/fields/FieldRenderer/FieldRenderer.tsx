import ArrayFieldRenderer from "../renderers/ArrayFieldRenderer";
import CheckBoxFieldRenderer from "../renderers/CheckBoxFieldRenderer";
import DateFieldRenderer from "../renderers/DateFieldRenderer";
import DateTimeFieldRenderer from "../renderers/DateTimeFieldRenderer";
import NumberFieldRenderer from "../renderers/NumberFieldRenderer";
import ObjectFieldRenderer from "../renderers/ObjectFieldRenderer";
import RichTextEditorFieldRenderer from "../renderers/RichTextEditorFieldRenderer";
import SelectFieldRenderer from "../renderers/SelectFieldRenderer";
import SwitchFieldRenderer from "../renderers/SwitchFieldRenderer";
import TagsInputFieldRenderer from "../renderers/TagsFieldRenderer";
import TextFieldRenderer from "../renderers/TextFieldRenderer";
import TimeFieldRenderer from "../renderers/TimeFieldRenderer";
import DefaultFieldRender from "./DefaultFieldRender";
import FieldLayoutWrapper from "./FieldLayoutWrapper";
import { FieldRendererProps } from "./FieldRenderer.types";

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: FieldRendererProps<TValues>) {
  const { layout, field, form, customRenderers, readOnly } = props;
  const effectiveField = { ...field, readOnly: field.readOnly || readOnly };

  let InputNode: React.ReactNode = null;

  if (customRenderers) {
    const customNode = customRenderers(effectiveField, form);
    if (customNode) {
      return (
        <FieldLayoutWrapper field={effectiveField} layout={layout}>
          {customNode}
        </FieldLayoutWrapper>
      );
    }
  }

  switch (effectiveField.type) {
    case "text":
      InputNode = (
        <TextFieldRenderer field={effectiveField} form={props.form} />
      );
      break;

    case "select":
      InputNode = (
        <SelectFieldRenderer field={effectiveField} form={props.form} />
      );
      break;

    case "object":
      InputNode = (
        <ObjectFieldRenderer
          field={effectiveField}
          form={form}
          layout={layout}
        />
      );
      break;

    case "array":
      InputNode = (
        <ArrayFieldRenderer
          field={effectiveField}
          form={form}
          layout={layout}
        />
      );
      break;

    case "checkbox":
      InputNode = <CheckBoxFieldRenderer field={effectiveField} form={form} />;
      break;

    case "number":
      InputNode = <NumberFieldRenderer field={effectiveField} form={form} />;
      break;

    case "date":
      InputNode = <DateFieldRenderer field={effectiveField} form={form} />;
      break;

    case "datetime":
      InputNode = <DateTimeFieldRenderer field={effectiveField} form={form} />;
      break;

    case "switch":
      InputNode = <SwitchFieldRenderer field={effectiveField} form={form} />;
      break;

    case "texteditor":
      InputNode = (
        <RichTextEditorFieldRenderer field={effectiveField} form={form} />
      );
      break;

    case "time":
      InputNode = <TimeFieldRenderer field={effectiveField} form={form} />;
      break;

    case "tags":
      InputNode = <TagsInputFieldRenderer field={effectiveField} form={form} />;
      break;

    default:
      InputNode = <div>Unsupported field type: {effectiveField.type}</div>;
  }

  return (
    <FieldLayoutWrapper field={effectiveField} layout={layout}>
      <DefaultFieldRender field={effectiveField} form={form}>
        {InputNode}
      </DefaultFieldRender>
    </FieldLayoutWrapper>
  );
}

export default FieldRenderer;
