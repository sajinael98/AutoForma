import FieldRenderer from "../FieldRenderer/FieldRenderer";
import { FieldRendererProps } from "../renderer.types";
import { ObjectFieldSchema } from "../types";

type ObjectFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues> & {
  layout: "vertical" | "horizontal" | "grid";
};

export function ObjectFieldRenderer<TValues extends Record<string, any>>({
  field,
  form,
  layout = "vertical",
}: ObjectFieldRendererProps<TValues>) {
  const objectField = field as ObjectFieldSchema<TValues>;

  return (
    <>
      {objectField.fields?.map((innerField) => (
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
}

export default ObjectFieldRenderer;
