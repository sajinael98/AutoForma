# 🚀 AutoForma

**AutoForma** is a powerful and flexible **dynamic form builder** for React. It allows developers to build complex forms from simple schema definitions without writing repetitive boilerplate code. With AutoForma, you can focus on the logic and behavior of your forms — not the UI details.

---

## ✨ Features

- ⚡ **Fast form building:** Generate forms instantly from JSON schema.
- 🧩 **Rich field types:** Text, Select, Checkbox, Date, Time, Switch, Tags, Array, Object, and more.
- 🎨 **Full UI control:** Customize how each field looks and behaves.
- 🔄 **Dynamic behavior:** Show/hide fields, enable/disable them, or update their properties based on form values.
- 🪄 **Custom renderers:** Replace any field’s renderer with your own component.
- 🧠 **Validation support:** Built-in and custom validation supported out of the box.
- 📐 **Multiple layouts:** Vertical, horizontal, or grid layouts.
- 🧪 **Extendable:** Easily integrate with any backend and add your own field types.

---

## 📦 Installation

```bash
npm install autoforma
# or
yarn add autoforma
```

> ✅ AutoForma includes everything you need — no need to manually install Mantine or other dependencies.

---

## 🛠️ Usage

Here's a simple example of how to use **AutoForma** in your React project:

```tsx
import { MantineProvider } from "@mantine/core";
import ReactDOM from "react-dom/client";
import { AutoForm } from "autoforma";
import { FieldSchema } from "autoforma";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";

interface DemoFormValues {
  fullName: string;
  email: string;
  age: number;
  subscribe: boolean;
  birthDate: string | null;
  appointment: string | null;
  contacts: { type: string; value: string }[];
  gender: string;
  bio: string;
}

const schema: FieldSchema<DemoFormValues>[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    placeholder: "Select your gender",
    data: [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
      { label: "Prefer not to say", value: "N" },
    ],
  },
  {
    name: "subscribe",
    label: "Subscribe to newsletter",
    type: "checkbox",
    description: "Receive updates by email",
  },
  {
    name: "birthDate",
    label: "Birth Date",
    type: "date",
  },
  {
    name: "appointment",
    label: "Appointment",
    type: "datetime",
  },
  {
    name: "contacts",
    label: "Contacts",
    type: "array",
    fields: [
      {
        name: "type",
        label: "Contact Type",
        type: "select",
        data: [
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
        ],
      },
      {
        name: "value",
        label: "Contact Value",
        type: "text",
      },
    ],
  },
  {
    name: "bio",
    label: "Bio",
    type: "text",
  },
];

const App = () => {
  return (
    <AutoForm<DemoFormValues>
      layout="grid"
      schema={schema}
      onSubmit={(values) => alert(JSON.stringify(values))}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
```

---

## 🔧 Props / API Reference

| Prop | Type | Description |
|------|------|-------------|
| `schema` | `FieldSchema[]` | The form schema definition. |
| `values` | `TValues` | Initial form values. |
| `onSubmit` | `(values: TValues) => void` | Callback triggered when the form is submitted. |
| `transformBeforeSubmit` | `(values: TValues) => TValues` | Optional function to transform form values before submit. |
| `transformAfterSubmit` | `(values: TValues) => void \| Promise<void>` | Optional function called after form submission. |
| `validate` | `FormValidateInput<TValues>` | Validation configuration. |
| `readOnly` | `boolean` | Makes the entire form read-only. |
| `onFieldChange` | `OnFieldChangeMap<TValues>` | Trigger callbacks when specific fields change. |
| `layout` | `"vertical" \| "horizontal" \| "grid"` | Form layout type. |
| `customRenderers` | `CustomRenderersMap<TValues>` | Override default field renderers. |
| `updateFieldSchema` | `UpdateFieldSchemaMap<TValues>` | Dynamically update field definitions based on values. |
| `submitButton` | `boolean \| ReactNode` | Show or customize the submit button. |

---

## 🧩 Field Types

AutoForma supports a variety of field types:

- `text`
- `number`
- `select`
- `checkbox`
- `date`
- `datetime`
- `time`
- `object`
- `array`
- `switch`
- `texteditor`
- `tags`

---

## ⚙️ Advanced Usage

You can control the behavior of fields dynamically based on form values:

```ts
updateFieldSchema={{
  gender: (field, values) => {
    if (values.age && values.age < 18) {
      return { ...field, data: [{ label: "Prefer not to say", value: "N" }] };
    }
    return field;
  },
  appointment: (field, values) => ({
    ...field,
    disabled: !values.birthDate,
  }),
}}
```

---

## 🧪 Development

If you want to contribute or run AutoForma locally:

```bash
git clone https://github.com/your-username/AutoForma.git
cd AutoForma
npm install
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! 🎉  
If you'd like to help improve AutoForma:

1. Fork the repository  
2. Create a new feature branch  
3. Commit your changes  
4. Submit a pull request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you find AutoForma helpful, please consider giving it a ⭐ on [GitHub](https://github.com/your-username/AutoForma) — it helps the project grow!
