
# AutoForm

AutoForm is a dynamic form builder component for React applications, using **Mantine**. It generates forms dynamically based on a schema definition. This allows for faster form creation and less repetitive code when working with forms in your React applications.

## Features

- **Dynamic Form Rendering**: AutoForm renders fields based on the provided schema, making form generation easy.
- **Field Types Support**: Supports various input types like `text`, `number`, `password`, `select`, `checkbox`, etc.
- **Validation Support**: Integrates with form validation mechanisms.
- **Custom Layout**: Supports custom layout rendering via the `container` and `fieldContainer` props.
- **Read-Only Mode**: Option to set the form in read-only mode.
- **Field Customization**: Easily customize field rendering for different input types.
- **Conditional Rendering**: Hide fields or conditionally render based on certain conditions.

## Installation

To install `AutoForm`, you can use npm or yarn:

```bash
npm install @mantine/core react
```

## Usage

### Example Usage

```tsx
import React from 'react';
import AutoForm from './AutoForm';  // Path to your AutoForm component
import { Button, Grid, Group } from '@mantine/core';

const schema = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'age', label: 'Age', type: 'number' },
  { name: 'subscribe', label: 'Subscribe?', type: 'checkbox' },
  { name: 'role', label: 'Role', type: 'select', options: ['User', 'Admin'] },
];

const MyForm = () => {
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <AutoForm
      schema={schema}
      onSubmit={onSubmit}
      container={(form, onSubmit, readOnly) => (
        <>
          <Grid>{form}</Grid>
          {!readOnly && (
            <Group justify="flex-end">
              <Button onClick={onSubmit}>Submit</Button>
            </Group>
          )}
        </>
      )}
    />
  );
};
```

### Props

| Prop             | Type                                                                           | Description                                                                 |
|------------------|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `schema`         | `FieldSchema[]`                                                                | List of field definitions to render. Each field specifies `name`, `type`, etc. |
| `values`         | `Record<string, any>`                                                          | Initial values for the form fields. Optional.                              |
| `onSubmit`       | `(values: Record<string, any>) => void`                                        | Callback triggered on form submission with current form values.            |
| `container`      | `(form: ReactNode, onSubmit: () => void, readOnly?: true) => ReactNode`        | Custom render wrapper around the form and submit button.                   |
| `fieldContainer` | `(field: ReactNode, fieldSchema: FieldSchema) => ReactNode`                    | Optional. Custom layout for each field (e.g., grid wrappers).              |
| `customRender`   | `FieldRenderCustomRender`                                                      | Optional. Override how specific field types are rendered.                  |
| `validate`       | `FormValidateInput<Record<string, any>>`                                       | Optional validation logic. Uses Mantine-compatible validation.             |
| `readOnly`       | `true`                                                                         | Optional. When true, disables all inputs (read-only mode).                 |
| `onFieldChange`  | `(name: string, value: any, values: Record<string, any>) => Record<string, any>` | Optional. Modify or transform values when a field changes.                 |

### Custom Layout

You can customize the layout of the entire form or specific fields by using the `container` and `fieldContainer` props.

#### Example: Customizing the Form Layout

```tsx
const customLayout = (form, onSubmit, readOnly) => (
  <>
    <div className="form-container">{form}</div>
    {!readOnly && <button onClick={onSubmit}>Submit</button>}
  </>
);
```

#### Example: Customizing Field Layout

```tsx
const customFieldLayout = (field, fieldSchema) => (
  <div className="custom-field">{field}</div>
);
```

### Validation

AutoForm supports validation through the `validate` prop. You can pass a validation function that returns an object of validation errors.

Example:

```tsx
const validateForm = (values) => {
  const errors = {};
  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.age) errors.age = 'Age is required';
  return errors;
};

<AutoForm
  schema={schema}
  validate={validateForm}
  onSubmit={(values) => console.log(values)}
  container={(form, onSubmit) => (
    <>
      <Grid>{form}</Grid>
      <Button onClick={onSubmit}>Submit</Button>
    </>
  )}
/>
```

### Hide Fields

To hide a field from rendering, you can set the `hidden` property in the schema.

Example:

```tsx
const schema = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'internalCode', label: 'Internal Code', type: 'text', hidden: true },
];
```

This will ensure the "Internal Code" field is not rendered.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
