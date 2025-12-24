import { useFormContext } from "@/components/AutoForm/context/FormContext";
import { useRenderers } from "@/components/AutoForm/context/RenderersContext";
import { useUpdateFieldSchema } from "@/components/AutoForm/context/UpdateFieldSchemaContext";
import { useEffect, useState } from "react";
import { FieldSchema } from "../types";

const FieldRenderer = (props: { fieldSchema: FieldSchema }) => {
  const { fieldSchema } = props;

  const chainCtx = useRenderers();
  const updateFieldSchemaCtx = useUpdateFieldSchema();
  const form = useFormContext();

  const [resolvedFieldSchema, setResolvedFieldSchema] =
    useState<FieldSchema>(fieldSchema);

  useEffect(() => {
    let cancelled = false;

    async function resolveSchema() {
      const key = fieldSchema.name.replace(/\.\d+/g, "");

      const updater = updateFieldSchemaCtx?.[key];

      if (typeof updater === "function") {
        const newSchema = await updater(
          fieldSchema.name,
          fieldSchema,
          form.getValues()
        );
        if (!cancelled && newSchema) {
          setResolvedFieldSchema(newSchema);
        }
        return;
      }

      if (!cancelled) {
        setResolvedFieldSchema(fieldSchema);
      }
    }

    resolveSchema();

    return () => {
      cancelled = true;
    };
  }, [fieldSchema, updateFieldSchemaCtx, form.getValues()]);

  if (resolvedFieldSchema.visible === false) return null;

  if (!resolvedFieldSchema) return null;

  const Render = chainCtx?.resolve(resolvedFieldSchema);
  if (!Render) return null;


  return <Render field={resolvedFieldSchema} form={form} />;
};

export default FieldRenderer;
