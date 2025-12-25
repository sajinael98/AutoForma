import { FieldSchema } from '../types';
import { FormValues } from '../../components/AutoForm/context/FormContext';
interface FieldSchemaResolverProps {
    fieldSchema: FieldSchema;
    updateFieldSchema?: (path: string, fieldSchema: FieldSchema, values: FormValues) => FieldSchema | Promise<FieldSchema>;
}
declare const FieldSchemaResolver: (props: FieldSchemaResolverProps) => import("react/jsx-runtime").JSX.Element | null;
export default FieldSchemaResolver;
