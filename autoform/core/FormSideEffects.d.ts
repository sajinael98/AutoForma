import { FormProps, FormValues } from '../types';
declare const FormSideEffects: ({ onValuesChange, onDirtyChange, onFieldChange, }: {
    onValuesChange: (values: FormValues) => void;
    onDirtyChange: (isDirty: boolean) => void;
    onFieldChange: FormProps["onFieldChange"];
}) => null;
export default FormSideEffects;
