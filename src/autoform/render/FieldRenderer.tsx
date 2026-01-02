import { useFormContext } from "react-hook-form";
import { useAutoFormRenderContext } from "../context/useAutoFormRenderContext";
import DefaultInput from "../fields/DefaultInput";
import { normalizeFieldPath } from "../utils";
import { FieldProps, BuiltInFieldType, BUILT_IN_FIELD_TYPES } from "../types";
import DefaultSelect from "../fields/DefaultSelect";

const FieldRenderer = <TCustom extends string = never>({ fieldSchema }: FieldProps<TCustom>) => {
  const renderCtx = useAutoFormRenderContext<TCustom>();
  const uiConfig = renderCtx.uiConfig;
  const { register } = useFormContext();

  const key = normalizeFieldPath(fieldSchema.name);
  const registerProps = register(fieldSchema.name);

  if (fieldSchema.visible === false) {
    return;
  }
  const NameRenderer = uiConfig?.renderersByName?.[key];

  if (NameRenderer) {
    return <NameRenderer fieldSchema={fieldSchema} register={registerProps} />;
  }

  const TypeRenderer = uiConfig?.renderersByType?.[fieldSchema.type];

  if (TypeRenderer) {
    return <TypeRenderer fieldSchema={fieldSchema} register={registerProps} />;
  }

  if (BUILT_IN_FIELD_TYPES.includes(fieldSchema.type as BuiltInFieldType)) {
    if (fieldSchema.type === "select") {
      return <DefaultSelect fieldSchema={fieldSchema} />
    } else {
      return <DefaultInput fieldSchema={fieldSchema} />;
    }
  }

  throw new Error(
    `AutoForm: No renderer found for field "${fieldSchema.name}" with type "${fieldSchema.type}". ` +
    `If this is a custom field type, make sure to register a renderer via uiConfig.renderersByType.`
  );
};

export default FieldRenderer;
