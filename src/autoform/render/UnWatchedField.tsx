import { FieldProps } from "../types";
import FieldRenderer from "./FieldRenderer";

const UnWatchedField = <TCustom extends string = never>({ fieldSchema }: FieldProps<TCustom>) => {
  return <FieldRenderer fieldSchema={fieldSchema} />;
};

export default UnWatchedField;
