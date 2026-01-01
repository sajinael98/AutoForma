import { FieldProps } from "../types";
import FieldRenderer from "./FieldRenderer";

const UnWatchedField = ({ fieldSchema }: FieldProps) => {
  return <FieldRenderer fieldSchema={fieldSchema} />;
};

export default UnWatchedField;
