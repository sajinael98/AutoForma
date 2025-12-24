import { useEffect, useState } from "react";
import { FieldSchema } from "../types";
import { FormValues } from "@/components/AutoForm/context/FormContext";

interface FieldSchemaResolverProps {
  fieldSchema: FieldSchema;
  updateFieldSchema?: (
    path: string,
    fieldSchema: FieldSchema,
    values: FormValues
  ) => FieldSchema | Promise<FieldSchema>;
}

const FieldSchemaResolver = (props: FieldSchemaResolverProps) => {
  const { fieldSchema, updateFieldSchema = {} } = props;
  const [schema, setSchema] = useState<FieldSchema>(fieldSchema);
  
  useEffect(() => {
    let cancelled = false;

    async function resolveSchema() {
      const fieldName = fieldSchema.name;
      const updater = updateFieldSchema[fieldName];

      if (typeof updater === "function") {
        const newSchema = await updater(fieldSchema, {});
        if (!cancelled && newSchema) {
          setSchema(newSchema);
        }
        return;
      }

      setSchema(fieldSchema);
    }

    resolveSchema();

    return () => {
      cancelled = true;
    };
  }, [fieldSchema, updateFieldSchema]);

  if (!schema) {
    return null;
  }

  return <></>;
};

export default FieldSchemaResolver;
