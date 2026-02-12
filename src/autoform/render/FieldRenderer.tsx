import { useFormContext } from 'react-hook-form';
import { useAutoFormRenderContext } from '../context/useAutoFormRenderContext';
import DefaultInput from '../fields/DefaultInput';
import DefaultSelect from '../fields/DefaultSelect';
import ArrayLayout from '../layouts/ArrayLayout';
import ObjectLayout from '../layouts/ObjectLayout';
import { ArrayFieldSchema, BuiltInFieldType, FieldProps, ObjectFieldSchema } from '../types';
import { normalizeFieldPath } from '../utils';

const FieldRenderer = <TCustom extends string = never>({ fieldSchema }: FieldProps<TCustom>) => {
  const renderCtx = useAutoFormRenderContext<TCustom>();
  const uiConfig = renderCtx.uiConfig;
  const { register, control } = useFormContext();

  const key = normalizeFieldPath(fieldSchema.name);
  const registerProps = register(fieldSchema.name);

  const NameRenderer = uiConfig?.renderersByName?.[key];

  if (fieldSchema.visible === false) {
    return null;
  }

  if (NameRenderer) {
    return <NameRenderer fieldSchema={fieldSchema} control={control} register={registerProps} />;
  }

  const TypeRenderer = uiConfig?.renderersByType?.[fieldSchema.type];

  if (TypeRenderer) {
    return <TypeRenderer fieldSchema={fieldSchema} control={control} register={registerProps} />;
  }

  switch (fieldSchema.type) {
    case 'select':
      return <DefaultSelect fieldSchema={fieldSchema} />;

    case 'array':
      return <ArrayLayout fieldSchema={fieldSchema as ArrayFieldSchema} />;

    case 'object':
      return <ObjectLayout fieldSchema={fieldSchema as ObjectFieldSchema} />;

    case 'text':
    case 'number':
    case 'checkbox':
    case 'date':
    case 'datetime-local':
    case 'time':
      return <DefaultInput fieldSchema={fieldSchema} />;

    default:
      throw new Error(
        `AutoForm: No renderer found for field "${fieldSchema.name}" with type "${fieldSchema.type}". ` +
          `If this is a custom field type, make sure to register a renderer via uiConfig.renderersByType.`
      );
  }
};

export default FieldRenderer;
