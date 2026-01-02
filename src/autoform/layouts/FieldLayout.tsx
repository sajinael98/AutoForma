import Watcher from "../render/Watcher";
import { FieldProps } from "../types";

const FieldLayout = <TCustom extends string = never>(props: FieldProps<TCustom>) => {
  const { fieldSchema } = props;

  return <Watcher fieldSchema={fieldSchema} />;
};

export default FieldLayout;
