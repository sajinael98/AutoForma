import { ObjectFieldSchema } from "@/fields/types";
import { UseFormReturnType } from "@mantine/form";
import FieldRenderer from "../FieldRenderer/FieldRenderer";

type ObjectFieldRendererProps<TValues extends Record<string, any>> = {
  field: ObjectFieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout?: "vertical" | "horizontal" | "grid";
};

export function ObjectFieldRenderer<TValues extends Record<string, any>>({
  field,
  form,
  layout = "vertical",
}: ObjectFieldRendererProps<TValues>) {
  return (
    <>
      {field.fields?.map((innerField) => (
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
