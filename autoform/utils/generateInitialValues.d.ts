import { FormValues, Schema } from '../types';
export declare function generateInitialValues<TValues extends FormValues = Record<string, any>, TCustom extends string = never>(schema: Schema<TCustom>, initialValues?: Partial<TValues>): TValues;
