import { useFormContext } from "react-hook-form";
import { FieldProps } from "../types";

const DefaultInput = (props: FieldProps) => {
  const { fieldSchema } = props;
  const { register } = useFormContext();

  const registerProps = register(fieldSchema.name, {
    disabled: fieldSchema.disabled,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>{fieldSchema.label}</label>
      <input type={fieldSchema.type} {...registerProps} />
    </div>
  );
};

export default DefaultInput;
