import React, { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AutoFormRenderContextProvider } from '../context/AutoFormRenderContext';
import SchemaRenderer from '../render/SchemaRenderer';
import { FormProps, FormRef } from '../types';
import { generateInitialValues } from '../utils';
import { makeSchemaReadOnly } from '../utils/makeSchemaReadOnly';
import FormSideEffects from './FormSideEffects';

type AutoFormComponent = <TCustom extends string = never>(
  props: FormProps<TCustom> & React.RefAttributes<FormRef>
) => React.ReactElement;

const AutoForm = React.forwardRef(
  <TCustom extends string = never>(props: FormProps<TCustom>, ref: React.Ref<FormRef>) => {
    const {
      schema,
      onSubmit,
      uiConfig = {
        renderersByName: {},
        renderersByType: {},
      },
      updateFieldSchema = {},
      layout = 'vertical',
      values = () => ({}),
      hideSubmit = false,
      onDirtyChange = () => {},
      onValuesChange = () => {},
      resolver,
      readonly,
    } = props;

    const form = useForm({
      reValidateMode: 'onSubmit',
      criteriaMode: 'all',
      resolver,
    });

    const initializedRef = useRef(false);
    const handleSubmit = form.handleSubmit(onSubmit);
    
    const formSchema = useMemo(() => {
      let finalSchema = schema;
      if (readonly) {
        finalSchema = makeSchemaReadOnly(finalSchema);
      }
      return finalSchema;
    }, [readonly, schema]);

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
      getValues: () => form.getValues(),
      setValue: (name, value) => {
        form.setValue(name, value);
      },
    }));

    const hideSubmitBtn = hideSubmit || readonly;

    const stableUiConfig = useMemo(() => uiConfig, [uiConfig]);
    const stableUpdateFieldSchema = useMemo(() => updateFieldSchema, [updateFieldSchema]);
    const contextValue = useMemo(
      () => ({
        layout,
        uiConfig,
        updateFieldSchema,
      }),
      [layout, uiConfig, updateFieldSchema]
    );

    return (
      <FormProvider {...form}>
        <FormSideEffects onDirtyChange={onDirtyChange} onValuesChange={onValuesChange} />

        <AutoFormRenderContextProvider
          layout={contextValue.layout}
          uiConfig={stableUiConfig}
          updateFieldSchema={stableUpdateFieldSchema}
        >
          {['vertical', 'horizontal'].includes(layout) && (
            <div
              style={{
                display: 'flex',
                flexDirection: layout === 'vertical' ? 'column' : 'row',
              }}
            >
              {<SchemaRenderer schema={formSchema} />}
            </div>
          )}

          {layout === 'custom' && <SchemaRenderer schema={formSchema} />}

          {!hideSubmitBtn && (
            <button style={{ marginTop: '1rem' }} onClick={handleSubmit}>
              Submit
            </button>
          )}
        </AutoFormRenderContextProvider>
      </FormProvider>
    );
  }
) as AutoFormComponent;

export default AutoForm;
