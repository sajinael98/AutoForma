import { useMemo } from "react";
import { ObjectFieldSchema } from "../types";
import { renderSchema } from "../utils";

const ObjectLayout = (props: { fieldSchema: ObjectFieldSchema }) => {
  const { fieldSchema } = props;

  let fields = useMemo(() => fieldSchema.fields.map((innerFieldSchema) => ({
    ...innerFieldSchema,
    name: `${fieldSchema.name}.${innerFieldSchema.name}`,
  })),[fieldSchema.fields]);

  return <>{renderSchema(fields)}</>;
};

export default ObjectLayout;
