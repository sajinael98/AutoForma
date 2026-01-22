import { default as React } from '../../../node_modules/react';
import { FormProps, FormRef } from '../types';
type AutoFormComponent = <TCustom extends string = never>(props: FormProps<TCustom> & React.RefAttributes<FormRef>) => React.ReactElement;
declare const AutoForm: AutoFormComponent;
export default AutoForm;
