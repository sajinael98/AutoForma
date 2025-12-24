import { FieldRendererProps } from "@/components/AutoForm/AutoForm.types";
import { FieldSchema } from "../types";

export interface RendererHandler {
  canHandle(field: FieldSchema): boolean;
  resolve(field: FieldSchema): React.ComponentType<FieldRendererProps> | null;
}
