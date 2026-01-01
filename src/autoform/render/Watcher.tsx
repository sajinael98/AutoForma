import { FieldProps } from "../types";
import UnWatchedField from "./UnWatchedField";
import WatchedField from "./WatchedField";

const Watcher = (props: FieldProps) => {
  const { fieldSchema } = props;

  if (fieldSchema.dependsOn?.length) {
    return <WatchedField fieldSchema={fieldSchema} />;
  }

  return <UnWatchedField fieldSchema={fieldSchema} />;
};

export default Watcher;
