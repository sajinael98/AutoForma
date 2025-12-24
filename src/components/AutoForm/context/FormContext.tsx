import { createFormContext } from "@mantine/form";

export type FormValues = Record<string, any>;

const [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();

export { FormProvider, useFormContext, useForm };
