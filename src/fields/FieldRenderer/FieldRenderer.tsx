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
import { FieldRendererProps } from "./FieldRenderer.types";

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: FieldRendererProps<TValues>) {
  const { layout, field, form } = props;

  let InputNode: React.ReactNode = null;

  switch (field.type) {
    case "text":
      InputNode = <TextFieldRenderer field={field} form={props.form} />;
      break;

    case "select":
      InputNode = <SelectFieldRenderer field={field} form={props.form} />;
      break;

    case "object":
      InputNode = (
        <ObjectFieldRenderer field={field} form={form} layout={layout} />
      );
      break;

    case "array":
      InputNode = (
        <ArrayFieldRenderer field={field} form={form} layout={layout} />
      );
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

    case "texteditor":
      InputNode = <RichTextEditorFieldRenderer field={field} form={form} />;
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
    <DefaultFieldRender field={field} form={form}>
      {InputNode}
    </DefaultFieldRender>
  );
}

export default FieldRenderer;
