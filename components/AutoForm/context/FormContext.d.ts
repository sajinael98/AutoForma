export type FormValues = Record<string, any>;
declare const FormProvider: import('../../../../node_modules/react').FC<import('node_modules/@mantine/form/lib/FormProvider/FormProvider').FormProviderProps<import('@mantine/form').UseFormReturnType<FormValues, (values: FormValues) => FormValues>>>, useFormContext: () => import('@mantine/form').UseFormReturnType<FormValues, (values: FormValues) => FormValues>, useForm: import('@mantine/form').UseForm<FormValues, (values: FormValues) => FormValues>;
export { FormProvider, useFormContext, useForm };
