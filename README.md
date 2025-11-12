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
