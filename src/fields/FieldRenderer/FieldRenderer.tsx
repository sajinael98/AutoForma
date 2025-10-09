import ObjectFieldRenderer from "../renderers/ObjectFieldRenderer";
import SelectFieldRenderer from "../renderers/SelectFieldRenderer";
import TextFieldRenderer from "../renderers/TextFieldRenderer";
import DefaultFieldRender from "./DefaultFieldRender";
import FieldLayoutWrapper from "./FieldLayoutWrapper";
import { FieldRendererProps } from "./FieldRenderer.types";

export function FieldRenderer<
  TValues extends Record<string, any> = Record<string, any>
>(props: FieldRendererProps<TValues>) {
  const { layout, field, form, columns } = props;

  let InputNode: React.ReactNode = null;

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
        <>
          {field.fields.map((innerField) => (
            <FieldRenderer
              key={`${field.name}.${innerField.name}`}
              field={{
                ...innerField,
                name: `${field.name}.${innerField.name}`,
              }}
              form={form}
              layout={layout}
            />
          ))}
        </>
      );
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
