# AutoForma

AutoForma is a headless dynamic form engine built on top of React Hook Form.
It allows you to build forms from a schema, handle dynamic field behavior, and manage form state without being tied to any specific UI framework.

AutoForma focuses on form logic, while leaving UI rendering fully in your control

---

## Features

- **Headless by design** — no UI framework required
- **Schema-driven forms** — build forms from a single schema definition
- **Powered by React Hook Form** — fast, performant, and reliable
- **Dynamic field behavior** — fields can react to other field values
- **Read-only** — easily lock forms or fields
- **Object & array support** — nested and repeatable fields
- **Immutable & predictable** — no hidden side effects
- **UI-agnostic** — works with any design system or custom components
- **Extensible** — easy to add custom logic or renderers

---

## Installation

AutoForma is currently distributed via **npm only**.

```bash
npm install autoforma
```

AutoForma is built and tested with **React 19** and **React Hook Form**.

## Quick Start

```tsx
const Form = () => {
  const schema = useMemo<Schema>(() => [
    {
      type: "text",
      name: "firstName",
      label: "First Name"
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name"
    },
    {
      type: "select",
      name: "gender",
       label: "Gender",
       options: [
        {label: "Male", value: "male"},
        {label: "Female", value: "female"}
       ],
       initialValue: "male"
    }
  ],[])
  
  const handleSubmit = useCallback((values:FormValues) => {
    console.log("values: " , values)
  },[])

  return (
    <AutoForm
      schema={schema}
      onSubmit={handleSubmit}
    />
  )
}

```

---

## Field Types

AutoForma determines how each field is rendered using a string-based `type` property.

## Supported Field Types

AutoForma supports the following built-in field types:

- `text`
- `number`
- `checkbox`
- `select`
- `date`
- `datetime-local`
- `time`
- `array`
- `object`

---

## AutoForm Props

| Prop | Type | Required | Description | Example |
|-----|------|----------|-------------|---------|
| `schema` | `Schema` | ✅ Yes | Form schema definition used to build the form dynamically | `schema={[{ type: "text", name: "title", label: "Title" }]}` |
| `onSubmit` | `(values: FormValues) => void` | ✅ Yes | Callback triggered when the form is submitted | `onSubmit={(values) => console.log(values)}` |
| `layout` | `"vertical" \| "horizontal" \| "custom"` | ❌ No | Layout strategy for rendering fields | `layout="vertical"` |
| `uiConfig` | `UiConfig` | ❌ No | Configure custom field renderers by name or type | `uiConfig={{renderersByName: {firstName: ({fieldSchema, register}) => {return <div>firstName</div>}}}}` |
| `updateFieldSchema` | `UpdateFieldSchema` | ❌ No | Dynamically update field schema based on form values | ` updateFieldSchema={{firstName: (path, fieldSchema, values) => {if(values.lastName === "TEST"){return {...fieldSchema,label: "FIRST NAME"}}return fieldSchema}}}` |
| `values` | `() => FormValues \| Promise<FormValues>` | ❌ No | Async or sync function to load initial form values | `values={() => fetchData()}` |
| `hideSubmit` | `boolean` | ❌ No | Hide the default submit button | `hideSubmit` |
| `onDirtyChange` | `(isDirty: boolean) => void` | ❌ No | Triggered when form dirty state changes | `onDirtyChange={(dirty) => setDirty(dirty)}` |
| `onValuesChange` | `(values: FormValues) => void` | ❌ No | Triggered whenever form values change | `onValuesChange={(v) => console.log(v)}` |
| `resolver` | `Resolver<FormValues>` | ❌ No | Validation resolver (e.g. Zod, Yup) | `resolver={zodResolver(schema)}` |
| `readonly` | `boolean` | ❌ No | Make the entire form read-only | `readonly` |

---

## AutoFormRef API

| Method | Signature | Description |
|------|-----------|-------------|
| `submit` | `() => void` | Programmatically submit the form |
| `setValue` | `(name: string, value: any) => void` | Set a field value |
| `getValues` | `() => FormValues` | Get all form values |
| `reset` | `(values: FormValues) => void` | Reset form with new values |

---

## Documentation

Storybook: https://sajinael98.github.io/AutoForma

---

## License

MIT
