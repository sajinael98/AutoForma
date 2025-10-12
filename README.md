
# AutoForm (React + Mantine)

AutoForm is a dynamic form engine built with **React**, **Mantine**, and **@mantine/form**.  
It allows you to generate complete forms from a single JSON schema — with support for validation, layouts, dynamic field updates, conditional rendering, and custom renderers.

---

## 📦 Requirements

- React 18+
- Mantine v7 or v8
- @mantine/form
- (Optional) @mantine/dates and @mantine/tiptap for date/time & rich text fields

---

## ⚙️ Installation & Setup

Install dependencies:

```bash
npm install @mantine/core @mantine/form @mantine/dates @mantine/tiptap
```

Import styles:

```ts
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";
```

Wrap your app:

```tsx
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
```

---

## 🚀 Quick Start

```tsx
const schema = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "age", label: "Age", type: "number" },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    data: [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
    ]
  }
];

<AutoForm schema={schema} layout="grid" onSubmit={(values) => console.log(values)} />
```

---

## 📑 Field Schema

Supported `type` values:
```
"text", "number", "select", "checkbox", "date", "datetime", "time", "object", "array", "switch", "texteditor", "tags"
```

Common field properties:

| Property | Type | Description |
|---------|------|-------------|
| name | string | Unique field name |
| label | string | Field label |
| type | FieldType | One of the supported field types |
| description | string | Optional field description |
| placeholder | string | Input placeholder |
| required | boolean | Whether field is required |
| readOnly | boolean | Make field read-only |
| disabled | boolean | Disable field |
| visible | boolean | Show or hide field |
| meta | Record<string, any> | Extra renderer props |
| initialValue | any | Initial value for this field |
| column | number | Column span when using `grid` layout |

---

## 🔧 `<AutoForm />` Props

| Prop | Type | Description |
|------|------|-------------|
| `schema` | FieldSchema[] | The full schema definition |
| `values` | object | Initial values |
| `onSubmit` | function | Submit handler |
| `transformBeforeSubmit` | function | Modify values before submit |
| `transformAfterSubmit` | function | Post-submit hook |
| `validate` | object | Mantine validation rules |
| `mode` | "create" \| "edit" \| "view" | Form mode |
| `readOnly` | boolean | Make the entire form read-only |
| `onFieldChange` | object | Watch field changes |
| `layout` | "vertical" \| "horizontal" \| "grid" | Form layout |
| `columns` | number | Used with grid layout |
| `customRenderers` | object | Replace renderer for a field |
| `updateFieldSchema` | object | Dynamically change field definition |
| `submitButton` | boolean \| ReactNode | Control submit button |
| `actions` | ReactNode | Extra action buttons |

---

## ⚡ Dynamic Features

- **onFieldChange**: React to field changes instantly.
- **updateFieldSchema**: Modify label, options, visibility, etc. based on form values.
- **transformBeforeSubmit / transformAfterSubmit**: Pre/post-process the data.
- **customRenderers**: Fully override rendering logic for a field.

---

## 📌 Example: Dynamic Select

```tsx
updateFieldSchema={{
  gender: (schema, values) => {
    if (values.fullName === "saji") {
      return {
        ...schema,
        label: "Custom Gender",
        data: [
          { label: "Male 1", value: "male1" },
          { label: "Female 1", value: "female1" },
        ]
      };
    }
    return schema;
  }
}}
```

---

## 📌 Example: onFieldChange

```tsx
onFieldChange={{
  fullName: (value, form) => {
    if (value === "saji") form.setFieldError("gender", "Invalid");
    else form.setFieldError("gender", null);
  },
  "profile.website": (v, form) => {
    if (v && !v.startsWith("https://")) {
      form.setFieldValue("profile.website", `https://${v}`);
    }
  }
}}
```

---

## 💡 Tips & Best Practices

- Keep your schema **pure** and stateless. Use `updateFieldSchema` for dynamic behavior.
- Use `meta` instead of adding custom keys for renderer-specific props.
- Use nested paths (e.g., `profile.website`, `contacts.0.value`) for deeply nested fields.
- Use `transformBeforeSubmit` to clean up the payload before sending it to your backend.

---

## 📚 Advanced Features Roadmap

- Conditional field dependencies
- Dynamic schema merging
- Async options loading
- Multi-step form support

---

## 🧠 Summary

AutoForm is designed to give you **maximum flexibility** with minimal boilerplate.  
Define your schema once and enjoy a fully functional, dynamic, and reactive form system.

---
MIT © 2025
