import { FieldProps } from '../types';
import UnWatchedField from './UnWatchedField';
import WatchedField from './WatchedField';

const Watcher = <TCustom extends string = never>(props: FieldProps<TCustom>) => {
  const { fieldSchema } = props;

  if (fieldSchema.dependsOn?.length) {
    return <WatchedField fieldSchema={fieldSchema} />;
  }

  return <UnWatchedField fieldSchema={fieldSchema} />;
};

export default Watcher;
