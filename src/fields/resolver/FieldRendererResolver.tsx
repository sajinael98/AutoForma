import { BuiltInHandler } from "../handlers/BuiltInHandler";
import { CustomTypeRendererResolver } from "../handlers/CustomTypeRendererResolver";
import { FieldNameHandler } from "../handlers/FieldNameHandler";
import { FieldTypeHandler } from "../handlers/FieldTypeHandler";
import { FieldRendererResolverProps } from "../renderer.types";

export const FieldRendererResolver = <TValues extends Record<string, any>>(
  props: FieldRendererResolverProps<TValues>
) => {
  const {
    field,
    form,
    customFieldRenderers,
    customTypeRenderers,
    customFieldTypes,
    layout = "grid",
  } = props;
  const fieldHandler = new FieldNameHandler<TValues>(
    customFieldRenderers ?? {}
  );
  const typeHandler = new FieldTypeHandler<TValues>(customTypeRenderers ?? {});
  const builtInHandler = new BuiltInHandler<TValues>(layout);
  const customTypeResolver = new CustomTypeRendererResolver<TValues>(
    customFieldTypes ?? {}
  );

  fieldHandler
    .setNext(typeHandler)
    .setNext(customTypeResolver)
    .setNext(builtInHandler);

  return fieldHandler.handle(field, form);
};

export default FieldRendererResolver;
