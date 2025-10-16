import FieldLayoutWrapper from "../FieldRenderer/FieldLayoutWrapper";
import FieldRenderer from "../FieldRenderer/FieldRenderer";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import { ObjectFieldSchema } from "../types";

type ObjectFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function ObjectFieldRenderer<TValues extends Record<string, any>>({
  field,
  form,
  layout = "vertical",
}: ObjectFieldRendererProps<TValues>) {
  const objectField = field as ObjectFieldSchema<TValues>;

  return (
    <>
      {objectField.fields?.map((innerField) => (
        <FieldLayoutWrapper field={innerField} layout={layout}>
          <FieldRenderer
            key={`${field.name}.${innerField.name}`}
            field={{
              ...innerField,
              name: `${field.name}.${innerField.name}`,
            }}
            form={form}
            layout={layout}
          />
        </FieldLayoutWrapper>
      ))}
    </>
  );
}

export default ObjectFieldRenderer;
