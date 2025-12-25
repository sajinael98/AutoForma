import { FieldSchema, FieldType } from '../types';
export declare const getDefaultValueForField: (type: FieldType) => any;
export declare function generateInitialValues<TValues extends Record<string, any> = Record<string, any>>(schema: FieldSchema<TValues>[], initialValues?: Partial<TValues>): TValues;
export declare function validateRequiredFields<TValues extends Record<string, any> = Record<string, any>>(schema: FieldSchema<TValues>[], values: TValues): Record<string, string>;
