import { ObjectFieldSchema } from "../types";
import { disableFields, renderSchema } from "../utils";

const ObjectLayout = (props: { fieldSchema: ObjectFieldSchema }) => {
  const { fieldSchema } = props;

  let fields = fieldSchema.fields.map((innerFieldSchema) => ({
    ...innerFieldSchema,
    name: `${fieldSchema.name}.${innerFieldSchema.name}`,
  }));

  if (fieldSchema.disabled) {
    fields = disableFields(fields);
  }

  return <>{renderSchema(fields)}</>;
};

export default ObjectLayout;
