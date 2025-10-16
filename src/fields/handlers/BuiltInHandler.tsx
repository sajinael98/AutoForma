import { UseFormReturnType } from "@mantine/form";
import FieldRenderer from "../FieldRenderer/FieldRenderer";
import { FieldSchema } from "../types";
import { RendererHandler } from "./RendererHandler";

export class BuiltInHandler<
  TValues extends Record<string, any>
> extends RendererHandler<TValues> {
  constructor(private layout: "vertical" | "horizontal" | "grid") {
    super();
  }
  canHandle() {
    return true;
  }

  render(field: FieldSchema<TValues>, form: UseFormReturnType<TValues>) {
    return <FieldRenderer field={field} form={form} layout={this.layout} />;
  }
}
