import SelectFieldRenderer from "../renderers/SelectFieldRenderer";
import TextFieldRenderer from "../renderers/TextFieldRenderer";
import DefaultFieldRender from "./DefaultFieldRender";
import { FieldRendererProps } from "./FieldRenderer.types";

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: FieldRendererProps<TValues>) {
  const { layout, field, form } = props;

  let InputNode: React.ReactNode = null;

  switch (field.type) {
    case "text":
    case "textarea":
      InputNode = <TextFieldRenderer field={field} form={props.form} />;
      break;

    case "select":
      InputNode = <SelectFieldRenderer field={field} form={props.form} />;
      break;

    default:
      InputNode = <div>Unsupported field type: {field.type}</div>;
  }

  return (
    <DefaultFieldRender field={field} layout={layout} columns={props.columns} form={form}>
      {InputNode}
    </DefaultFieldRender>
  );
}

export default FieldRenderer;
