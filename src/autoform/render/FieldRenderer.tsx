import { useFormContext } from "react-hook-form";
import { useAutoFormRenderContext } from "../context/useAutoFormRenderContext";
import DefaultInput from "../fields/DefaultInput";
import { normalizeFieldPath } from "../utils";
import { FieldProps } from "../types";
import DefaultSelect from "../fields/DefaultSelect";

const FieldRenderer = ({ fieldSchema }: FieldProps) => {
  const renderCtx = useAutoFormRenderContext();
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

  if(fieldSchema.type === "select"){
    return <DefaultSelect fieldSchema={fieldSchema} />
  }else{
    return <DefaultInput fieldSchema={fieldSchema} />;
  }
};

export default FieldRenderer;
