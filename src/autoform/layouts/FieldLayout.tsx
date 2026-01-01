import Watcher from "../render/Watcher";
import { FieldProps } from "../types";

const FieldLayout = (props: FieldProps) => {
  const { fieldSchema } = props;

  return <Watcher fieldSchema={fieldSchema} />;
};

export default FieldLayout;
