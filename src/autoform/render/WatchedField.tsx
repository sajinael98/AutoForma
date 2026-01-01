import { useFormContext, useWatch } from "react-hook-form";
import { FieldProps, FieldSchema } from "../types";
import { useAutoFormRenderContext } from "../context/useAutoFormRenderContext";
import { useEffect, useMemo, useState } from "react";
import {
  buildNestedPartialValues,
  normalizeFieldPath,
  resolveDependsOnNew,
} from "../utils";
import FieldRenderer from "./FieldRenderer";

const WatchedField = ({ fieldSchema }: FieldProps) => {
  const { control } = useFormContext();
  const renderCtx = useAutoFormRenderContext();

  const dependsOn = fieldSchema.dependsOn ?? [];

  const resolvedDependsOn = useMemo(
    () => resolveDependsOnNew(fieldSchema.name, dependsOn),
    [fieldSchema.name, dependsOn]
  );

  const watchedValues = useWatch({
    control,
    name: resolvedDependsOn,
  });

  const [resolvedSchema, setResolvedSchema] =
    useState<FieldSchema>(fieldSchema);

  useEffect(() => {
    if (!dependsOn.length) return;

    let cancelled = false;

    const run = async () => {
      const key = normalizeFieldPath(fieldSchema.name);

      const partialValues = buildNestedPartialValues(
        resolvedDependsOn,
        watchedValues ?? []
      );

      const updater = renderCtx?.updateFieldSchema?.[key];

      if (!updater) return;

      const patch = await updater(fieldSchema.name, fieldSchema, partialValues);

      if (!cancelled && patch) {
        setResolvedSchema({
          ...fieldSchema,
          ...patch,
        });
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [watchedValues]);

  return <FieldRenderer fieldSchema={resolvedSchema} />;
};

export default WatchedField;
