import ArrayFieldRenderer from "../renderers/ArrayFieldRenderer";
import CheckBoxFieldRenderer from "../renderers/CheckBoxFieldRenderer";
import DateFieldRenderer from "../renderers/DateFieldRenderer";
import DateTimeFieldRenderer from "../renderers/DateTimeFieldRenderer";
import NumberFieldRenderer from "../renderers/NumberFieldRenderer";
import ObjectFieldRenderer from "../renderers/ObjectFieldRenderer";
import SelectFieldRenderer from "../renderers/SelectFieldRenderer";
import TextFieldRenderer from "../renderers/TextFieldRenderer";
import DefaultFieldRender from "./DefaultFieldRender";
import FieldLayoutWrapper from "./FieldLayoutWrapper";
import { FieldRendererProps } from "./FieldRenderer.types";

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: FieldRendererProps<TValues>) {
  const { layout, field, form, columns, customRenderers } = props;

  let InputNode: React.ReactNode = null;

  if (customRenderers) {
    const customNode = customRenderers(form, field);
    if (customNode) {
      return (
        <FieldLayoutWrapper field={field} layout={layout} columns={columns}>
          {customNode}
        </FieldLayoutWrapper>
      );
    }
  }

  switch (field.type) {
    case "text":
    case "textarea":
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

    default:
      InputNode = <div>Unsupported field type: {field.type}</div>;
  }

  return (
    <FieldLayoutWrapper field={field} layout={layout} columns={columns}>
      <DefaultFieldRender field={field} form={form}>
        {InputNode}
      </DefaultFieldRender>
    </FieldLayoutWrapper>
  );
}

export default FieldRenderer;
