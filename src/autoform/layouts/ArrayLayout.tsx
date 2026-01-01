import { useFieldArray, useFormContext } from "react-hook-form";
import { ArrayFieldSchema } from "../types";
import { generateInitialValues, renderSchema } from "../utils";
import React from "react";

const ArrayLayout = (props: { fieldSchema: ArrayFieldSchema }) => {
  const { fieldSchema } = props;

  const fields = fieldSchema.fields;

  const { control } = useFormContext();
  const { fields: rows, append } = useFieldArray({
    name: fieldSchema.name,
    control,
  });

  const handleAddRow = () => {
    append(generateInitialValues(fields));
  };

  return (
    <div>
      {rows.map((row, index) => {
        const innerfields = fields.map((innerFieldSchema) => ({
          ...innerFieldSchema,
          name: `${fieldSchema.name}.${index}.${innerFieldSchema.name}`,
        }));
        return (
          <React.Fragment key={row.id}>
            <div>row {index}</div>
            {renderSchema(innerfields)}
          </React.Fragment>
        );
      })}
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default ArrayLayout