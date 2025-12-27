# AutoForma

AutoForma is a schema-driven form engine for React applications, built to create dynamic, scalable, and maintainable forms with minimal boilerplate.

---

## What is AutoForma?

AutoForma allows you to build complete forms declaratively using a structured schema instead of manually wiring inputs, state, and validation logic.

It is designed for dynamic and data-driven applications such as admin dashboards, SaaS platforms, and complex systems where form structures evolve over time.

AutoForma currently uses Mantine as its UI layer, while keeping form logic, schema resolution, and rendering clearly separated.

---

## Features

- Schema-driven form rendering
- Mantine-based UI layer
- Dynamic schema updates at runtime
- Support for nested objects and arrays
- Extensible renderer resolution chain
- Custom field renderers and field types
- Multiple layout strategies (grid, vertical, horizontal)
- Read-only and view modes
- Automatic validation handling
- TypeScript-first design
- Built for dynamic, data-driven applications

---

## Installation

AutoForma is currently distributed via **npm only**.

```bash
npm install autoforma
```

### Peer Dependencies

```bash
npm install @mantine/core
```

AutoForma is built and tested with **React 19** and **Mantine 8**.

### Styles Setup

```ts
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
```

### Mantine Provider

```tsx
import { MantineProvider } from "@mantine/core";

<MantineProvider>
  <App />
</MantineProvider>
```

---

## Quick Start

```tsx
import { useRef } from "react";
import { MantineProvider, Button } from "@mantine/core";
import AutoForm from "autoforma";
import { FieldSchema, AutoFormRef } from "autoforma";

interface UserForm {
  firstName: string;
  lastName: string;
  fullName: string;
}

const schema: FieldSchema<UserForm>[] = [
  { type: "text", name: "firstName", label: "First Name" },
  { type: "text", name: "lastName", label: "Last Name" },
  { type: "text", name: "fullName", label: "Full Name", visible: false },
];

export function App() {
  const formRef = useRef<AutoFormRef>(null);

  return (
    <MantineProvider>
      <Button onClick={() => formRef.current?.setFieldValue("firstName", "Saji")}>
        Fill First Name
      </Button>

      <AutoForm
        ref={formRef}
        schema={schema}
        onSubmit={(values) => console.log(values)}
        updateFieldSchema={{
          fullName: (_, field, values) =>
            values.firstName && values.lastName
              ? { ...field, visible: true }
              : field,
        }}
        onFieldChange={{
          firstName: (_, value, form) =>
            form.setFieldValue(
              "fullName",
              `${value} ${form.values.lastName ?? ""}`
            ),
          lastName: (_, value, form) =>
            form.setFieldValue(
              "fullName",
              `${form.values.firstName ?? ""} ${value}`
            ),
        }}
      />
    </MantineProvider>
  );
}
```

---

## Field Types

AutoForma determines how each field is rendered using a string-based `type` property.

### Built-in Field Types

- `text`
- `number`
- `select`
- `checkbox`
- `switch`
- `date`
- `datetime`
- `time`
- `tags`
- `texteditor`
- `object`
- `array`

---

## AutoForm Props

| Prop | Type | Required | Description |
|---|---|---|---|
| schema | FieldSchema[] | Yes | Defines the structure of the form |
| readOnly | boolean | No | Renders the form in read-only mode |
| disabled | boolean | No | Disables all form inputs |
| layout | vertical \| horizontal \| grid | No | Controls field layout |
| primaryAction | boolean | No | Marks submit as the primary action |
| submitLabel | string | No | Custom submit button label |
| loading | boolean | No | Enables loading state |
| values | () => FormValues \| Promise<FormValues> | No | Dynamically resolved values |
| initialValues | () => FormValues \| Promise<FormValues> | No | Initial form values |
| onFieldChange | OnFieldChangeMap | No | Field-level change handlers |
| updateFieldSchema | UpdateFieldSchema | No | Dynamic schema updates |
| validate | (values) => errors | No | Form-level validation |
| preSubmit | (values) => values | No | Pre-submit transformation |
| onSubmit | (values) => void | Yes | Submit handler |
| postSubmit | (values) => void | No | Post-submit side effects |
| onValuesChange | (values) => void | No | Global change listener |
| uiConfig | object | No | UI customization config |

---

## AutoFormRef API

| Method | Type | Description |
|---|---|---|
| submit | () => void | Triggers form submission |
| reset | (values?) => void | Resets form state |
| validate | () => boolean | Runs validation |
| getValues | () => FormValues | Returns current values |
| setValues | (values) => void | Updates multiple values |
| getFieldValue | (path) => any | Returns field value |
| setFieldValue | (path, value) => void | Updates field value |
| isValid | () => boolean | Returns validity state |
| isDirty | () => boolean | Returns dirty state |
| isLoading | () => boolean | Returns loading state |

---

## Customization

AutoForma supports customization through custom field renderers and schema configuration.

```tsx
<AutoForm
  schema={schema}
  uiConfig={{
    customTypeRenderers: {
      text: CustomTextRenderer,
    },
  }}
/>
```

For advanced customization examples, visit the Storybook.

---

## Documentation

Storybook: https://sajinael98.github.io/AutoForma

---

## License

MIT
