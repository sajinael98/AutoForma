import { FormValues } from "@/components/AutoForm/context/FormContext";
import { DefaultFieldRendererProps } from "../FieldRenderer/FieldRenderer.types";
import { FieldSchema, ObjectFieldSchema } from "../types";
import { layoutStrategies } from "../utils/layout.utils";
import FieldRenderer from "./FieldRenderer";

const ObjectLayout = ({
  field,
  layout = "vertical",
}: DefaultFieldRendererProps<FormValues>) => {
  const objectField = field as ObjectFieldSchema<Record<string, any>>;

  return layoutStrategies[layout](
    objectField.fields.map((field) => {
      const fieldSchema: FieldSchema = {
        ...field,
        name: `${objectField.name}.${field.name}`,
        disabled: objectField.disabled,
        visible: objectField.visible,
      };

      return <FieldRenderer fieldSchema={fieldSchema} />;
    })
  );
};

export default ObjectLayout;
