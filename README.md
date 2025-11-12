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
    updateFieldSchema={{
      address: {
        city: (field, values) => ({
          ...field,
          disabled: !values?.address?.country,
        }),
      },
    }}
    customFieldTypes={{
      text: (field, form) => (
        <input {...form.getInputProps(field.name)} />
      ),
    }}
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
