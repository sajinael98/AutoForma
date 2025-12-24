import { createContext, useContext } from "react";
import { UpdateFieldSchema } from "../AutoForm.types";

export const UpdateFieldSchemaContext = createContext<UpdateFieldSchema | null>(
  null
);

export const UpdateFieldSchemaProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: UpdateFieldSchema;
}) => {
  return (
    <UpdateFieldSchemaContext.Provider value={value}>
      {children}
    </UpdateFieldSchemaContext.Provider>
  );
};

export const useUpdateFieldSchema = () => {
  const context = useContext(UpdateFieldSchemaContext);
  if (!context) {
    throw new Error(
      "useUpdateFieldSchema must be used inside <UpdateFieldSchemaProvider>"
    );
  }
  return context;
};
