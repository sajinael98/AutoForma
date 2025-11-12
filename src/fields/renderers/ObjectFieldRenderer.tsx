import FieldLayoutWrapper from "../FieldRenderer/FieldLayoutWrapper";
import { FieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import { ObjectFieldSchema } from "../types";
import FieldRendererResolver from "@/fields/resolver/FieldRendererResolver";
import { layoutStrategies } from "../utils/layout.utils";
import { useRenderers } from "../context/RenderersContext";

type ObjectFieldRendererProps<
  TValues extends Record<string, any> = Record<string, any>
> = FieldRendererProps<TValues>;

export function ObjectFieldRenderer<TValues extends Record<string, any>>({
  field,
  form,
  layout = "vertical",
}: ObjectFieldRendererProps<TValues>) {
  const objectField = field as ObjectFieldSchema<TValues>;
  const renderers = useRenderers();
  return layoutStrategies[layout](
    <>
      {objectField.fields?.map((innerField) => (
        <FieldLayoutWrapper
          key={`${field.name}.${innerField.name}`}
          field={innerField}
          layout={layout}
        >
          <FieldRendererResolver
            field={{
              ...innerField,
              name: `${field.name}.${innerField.name}`,
            }}
            {...renderers}
            form={form}
            layout={layout}
          />
        </FieldLayoutWrapper>
      ))}
    </>
  );
}

export default ObjectFieldRenderer;
