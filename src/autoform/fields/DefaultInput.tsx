import { useFormContext } from "react-hook-form";
import { FieldProps } from "../types";

const DefaultInput = (props: FieldProps) => {
  const { fieldSchema } = props;
  const { register } = useFormContext();

  const registerProps = register(fieldSchema.name);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{fieldSchema.label}</label>
      <input type={fieldSchema.type} {...registerProps} readOnly={fieldSchema.readonly} />
    </div>
  );
};

export default DefaultInput;
