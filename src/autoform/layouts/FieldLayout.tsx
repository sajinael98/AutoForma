import Watcher from '../render/Watcher';
import { FieldProps } from '../types';

const FieldLayout = <TCustom extends string = never>(props: FieldProps<TCustom>) => {
  const { fieldSchema } = props;

  if (fieldSchema.visible === false) {
    return;
  }
  
  return <Watcher fieldSchema={fieldSchema} />;
};

export default FieldLayout;
