# 🚀 Introduction

**AutoForma** is a modern, dynamic, and extensible **form builder for React** — built on top of [Mantine](https://mantine.dev/) and fully written in TypeScript.  
It allows you to create powerful forms **entirely from JSON schema definitions**, removing repetitive boilerplate code and giving you full control over field behavior and layout.

With AutoForma, you can:
- 🧩 Define forms using schema objects — no manual wiring.
- 🪄 Dynamically show, hide, or disable fields based on other values.
- 🎨 Customize the UI with your own field renderers.
- 🧠 Extend with new field types or layouts effortlessly.

> 💡 AutoForma is perfect for dashboards, admin panels, and SaaS apps where flexibility and maintainability matter.

---

## 📦 Installation

Install **AutoForma** along with its required Mantine and React peer dependencies:

```bash
npm install autoforma   @mantine/core@^8.3.2   @mantine/hooks@^8.3.2   @mantine/form@^8.3.2   @mantine/dates@^8.3.2   @mantine/tiptap@^8.3.2   @tiptap/react@^3.6.6   react@^19.0.0   react-dom@^19.0.0
```

or using Yarn:

```bash
yarn add autoforma   @mantine/core@^8.3.2   @mantine/hooks@^8.3.2   @mantine/form@^8.3.2   @mantine/dates@^8.3.2   @mantine/tiptap@^8.3.2   @tiptap/react@^3.6.6   react@^19.0.0   react-dom@^19.0.0
```

---

## ⚙️ Setup Requirements

Before using `AutoForma`, wrap your app with the `MantineProvider`  
and import Mantine’s global styles and optional TipTap editor styles:

```tsx
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";

const Root = () => (
  <MantineProvider>
    <App />
  </MantineProvider>
);
```

> ⚠️ Without wrapping your app in `MantineProvider`,  
> the components may not render or style correctly.

---

# 🧩 Basic Usage

Here’s a quick example of how you can generate a complete form instantly using **AutoForma**.  
Just define your schema and pass it to the `AutoForm` component — it handles layout, validation, and submission automatically.

```tsx
import AutoForm from "autoforma";
import { userFormSchema } from "./schema";

const App = () => (
  <AutoForm
    schema={userFormSchema}
    onSubmit={(values) => console.log("Submitted:", values)}
  />
);
```

> ✅ AutoForma automatically generates labels, validation, and layouts based on your schema.

---

# 🎨 Customization & Field Types

AutoForma gives you full control over how your form behaves and looks.  
You can **dynamically update field properties** (like visibility, enabled state, or placeholder)  
and even **inject your own custom field types** using `customFieldTypes`.

---

## 🧠 Supported Field Types

Out of the box, AutoForma supports a rich set of field types:

| Type | Description |
|------|--------------|
| `text` | Standard text input |
| `number` | Numeric input |
| `select` | Dropdown list |
| `checkbox` | Boolean checkbox |
| `date` | Date picker |
| `datetime` | Combined date & time picker |
| `time` | Time-only picker |
| `object` | Nested object field (grouped sub-fields) |
| `array` | Repeating array of fields |
| `switch` | Toggle switch |
| `texteditor` | Rich text editor (TipTap powered) |
| `tags` | Multi-value tag input |
| `TCustom` | Any custom type you define via `customFieldTypes` |

You can define your own type like this:

```tsx
<AutoForm
  schema={schema}
  customFieldTypes={{
    colorPicker: (field, form) => (
      <input
        type="color"
        {...form.getInputProps(field.name)}
      />
    ),
  }}
/>
```

---

# ⚙️ API Reference

AutoForma exposes several TypeScript interfaces and configuration objects that make it fully type-safe and flexible.  
Below are the main types you can use to configure and extend the library.

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
