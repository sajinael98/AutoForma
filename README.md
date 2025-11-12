# ⚙️ API Reference

AutoForma exposes several TypeScript interfaces and configuration objects that make it fully type-safe and flexible.  
Below are the main types you can use to configure and extend the library.

---

## 🧩 `AutoFormProps<TValues>`

The main props accepted by the `AutoForm` component.

```ts
export type AutoFormProps<
  TValues extends Record<string, any> = Record<string, any>
> = CustomRenderersConfig<TValues> & {
  schema: (FieldSchema<TValues> & Record<string, any>)[];

  initialValues?: ValueProvider<TValues>;
  currentValues?: ValueProvider<TValues>;

  prepareValues?: (values: TValues) => TValues | Promise<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
  afterSubmit?: (values: TValues) => void | Promise<void>;

  validate?: FormValidateInput<TValues>;
  readOnly?: boolean;

  onFieldChange?: OnFieldChangeMap<TValues>;

  layout?: "vertical" | "horizontal" | "grid";

  updateFieldSchema?: UpdateFieldSchemaMap<TValues>;

  submitButton?: boolean | React.ReactNode;

  loading?: boolean;
};
```

### 🧠 Description of Properties

| Prop | Type | Description |
|------|------|--------------|
| `schema` | `FieldSchema[]` | The main schema defining all form fields. |
| `initialValues` | `ValueProvider<TValues>` | Function or object returning the **initial form values** (called once). |
| `currentValues` | `ValueProvider<TValues>` | Function or object providing **current values** (reactively updated). |
| `prepareValues` | `(values) => TValues \| Promise<TValues>` | Modify or sanitize values before submit. |
| `onSubmit` | `(values) => void \| Promise<void>` | Called when the form is submitted. |
| `afterSubmit` | `(values) => void \| Promise<void>` | Called after successful submission (for side effects). |
| `validate` | `FormValidateInput<TValues>` | Mantine validation config or validation schema. |
| `readOnly` | `boolean` | Makes the entire form read-only. |
| `onFieldChange` | `OnFieldChangeMap<TValues>` | Map of field-specific change handlers. |
| `layout` | `"vertical" \| "horizontal" \| "grid"` | Form layout type. |
| `updateFieldSchema` | `UpdateFieldSchemaMap<TValues>` | Dynamically modify schema based on values. |
| `submitButton` | `boolean \| ReactNode` | Whether to render or customize the submit button. |
| `loading` | `boolean` | Display a global loading state for the form. |

---

## 🧩 `FieldRendererResolverProps<TValues>`

Used internally (and optionally by developers) to control how a field is rendered.

```ts
export type FieldRendererResolverProps<
  TValues extends Record<string, any> = Record<string, any>
> = CustomRenderersConfig<TValues> & {
  field: FieldSchema<TValues>;
  form: UseFormReturnType<TValues>;
  layout?: "vertical" | "horizontal" | "grid";
};
```

### 🧠 Description of Properties

| Prop | Type | Description |
|------|------|--------------|
| `field` | `FieldSchema<TValues>` | The field definition being rendered. |
| `form` | `UseFormReturnType<TValues>` | Mantine form instance for accessing values and methods. |
| `layout` | `"vertical" \| "horizontal" \| "grid"` | The layout applied to this field. |
| `customFieldRenderers` | See below | Injected custom renderers from parent config. |

---

## 🧩 `CustomRenderersConfig<TValues>`

Defines all the ways you can override the default rendering logic.

```ts
export type CustomRenderersConfig<
  TValues extends Record<string, any> = Record<string, any>
> = {
  customFieldRenderers?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
  customTypeRenderers?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
  customFieldTypes?: Record<
    string,
    (
      field: FieldSchema<TValues>,
      form: UseFormReturnType<TValues>
    ) => React.ReactNode
  >;
};
```

### 🧠 Description of Properties

| Prop | Type | Description |
|------|------|--------------|
| `customFieldRenderers` | `Record<string, (field, form) => ReactNode>` | Override rendering for specific **field names**. |
| `customTypeRenderers` | `Record<string, (field, form) => ReactNode>` | Override rendering for specific **field types** (like `select`, `text`, etc.). |
| `customFieldTypes` | `Record<string, (field, form) => ReactNode>` | Register completely new **custom field types**. |

---

> 🧩 These type definitions give AutoForma its flexibility — you can extend nearly every rendering or data handling step without touching the core library.
