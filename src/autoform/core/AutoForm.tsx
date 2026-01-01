import React, { useEffect, useImperativeHandle, useRef } from "react";
import { FormRef, FormProps } from "../types";
import { FormProvider, useForm } from "react-hook-form";
import { generateInitialValues, renderSchema } from "../utils";
import FormSideEffects from "./FormSideEffects";
import { AutoFormRenderContextProvider } from "../context/AutoFormRenderContext";

const AutoForm = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    schema,
    onSubmit,
    uiConfig = {
      renderersByName: {},
      renderersByType: {},
    },
    updateFieldSchema = {},
    layout = "vertical",
    values = () => ({}),
    hideSubmit = false,
    onDirtyChange = (isDirty) => {},
    onValuesChange = (values) => {},
    resolver,
  } = props;

  const form = useForm({
    reValidateMode: "onSubmit",
    criteriaMode: "all",
    resolver,
  });

  const initializedRef = useRef(false);

  const handleSubmit = form.handleSubmit(onSubmit);

  useEffect(() => {
    if (initializedRef.current) return;

    let cancelled = false;

    const loadValues = async () => {
      const resolvedValues = await values();
      if (cancelled) return;

      form.reset(generateInitialValues(schema, resolvedValues));
      initializedRef.current = true;
    };

    loadValues();

    return () => {
      cancelled = true;
    };
  }, [values, schema]);

  useImperativeHandle(ref, () => ({
    submit: async () => {
      await form.handleSubmit(onSubmit)();
    },

    reset: (values?: any) => {
      form.reset(values ? generateInitialValues(schema, values) : undefined);
    },

    getValues: () => {
      return form.getValues();
    },

    setValue: (name, value) => {
      form.setValue(name, value);
    },
  }));

  const fields = renderSchema(schema);

  return (
    <FormProvider {...form}>
      <FormSideEffects
        onDirtyChange={onDirtyChange}
        onValuesChange={onValuesChange}
      />

      <AutoFormRenderContextProvider
        layout={layout}
        uiConfig={uiConfig}
        updateFieldSchema={updateFieldSchema}
      >
        {["vertical", "horizontal"].includes(layout) && (
          <div
            style={{
              display: "flex",
              flexDirection: layout === "vertical" ? "column" : "row",
            }}
          >
            {fields}
          </div>
        )}

        {layout === "custom" && fields}

        {!hideSubmit && (
          <button style={{ marginTop: "1rem" }} onClick={handleSubmit}>
            Submit
          </button>
        )}
      </AutoFormRenderContextProvider>
    </FormProvider>
  );
});

export default AutoForm;
