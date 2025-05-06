import AutoForm from '@/components/AutoForm';
import FieldRender, { getArrayOptions } from '@/components/FieldRender';
import { CustomFieldRender } from '@/types/custom-render';
import { FieldSchema } from '@/types/field';
import { Accordion, Button, Grid, Group, Modal, Table, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { Meta, StoryObj } from '@storybook/react';

// ------------------------------
// Schema Definitions
// ------------------------------

const schema: FieldSchema[] = [
  {
    type: 'check',
    label: 'Enabled',
    name: 'enabled',
    initialValue: true,
  },
  {
    type: 'object',
    name: 'personalInformation',
    label: 'Personal Information',
    fields: [
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        initialValue: 'Saji',
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        initialValue: 'Nael',
      },
      {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        data: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
        initialValue: 'male',
      },
    ],
  },
  {
    type: 'object',
    name: 'accountInformation',
    label: 'Account Information',
    fields: [
      {
        type: 'text',
        name: 'username',
        label: 'Username',
        initialValue: 'saji-nael',
      },
      {
        type: 'text',
        name: 'email',
        label: 'Email',
        initialValue: 'saji.nael.98@gmail.com',
      },
      {
        type: 'date',
        name: 'dateOfJoin',
        label: 'Date Of Join',
        initialValue: new Date(),
      },
    ],
  },
  {
    type: 'object',
    name: 'contactInformation',
    label: 'Contact Information',
    fields: [
      {
        type: 'array',
        name: 'phones',
        label: 'Phones',
        fields: [
          {
            type: 'text',
            name: 'phoneNo',
            label: 'Phone NO',
          },
        ],
      },
    ],
  },
];

const schemaWithValidation: FieldSchema[] = [
  ...schema.slice(0, 3),
  {
    ...schema[3],
    fields: [
      {
        ...schema[3].fields[0],
        required: true,
      },
    ],
  },
];

// ------------------------------
// Storybook Meta
// ------------------------------

const meta: Meta<typeof AutoForm> = {
  title: 'components/AutoForm',
  component: AutoForm,
  tags: ['autodocs'],
  args: {
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
    schema,
    container: (form, onSubmit, readOnly) => (
      <>
        <Grid>{form}</Grid>
        {!readOnly && (
          <Group justify="flex-end">
            <Button onClick={onSubmit}>Submit</Button>
          </Group>
        )}
      </>
    ),
    fieldContainer: (field, fieldSchema) => (
      <Grid.Col span={{ base: 12, md: fieldSchema.type === 'object' ? 12 : 6 }}>{field}</Grid.Col>
    ),
  },

  argTypes: {
    values: {
      description: 'Initial form values. Useful for editing or setting default values.',
      control: false,
    },
    schema: {
      description:
        'Array of field definitions used to render the form. Each item defines one input field.',
      control: false,
    },
    onSubmit: {
      description: 'Function called with form values when the form is submitted.',
      control: false,
    },
    container: {
      description:
        'Function that receives the rendered form and the onSubmit handler. Used to wrap the form with layout and controls.',
      control: false,
    },
    fieldContainer: {
      description: 'Optional function to wrap each individual field with custom layout or styling.',
      control: false,
    },
    customRender: {
      description:
        'Optional custom render function to override the default field rendering based on field type.',
      control: false,
    },
    validate: {
      description:
        'Optional validation logic. Receives values and returns an object with field errors or nulls.',
      control: false,
    },
    readOnly: {
      description: 'If true, all fields will be rendered in read-only mode.',
      control: { type: 'boolean' },
    },
    onFieldChange: {
      description:
        'Optional function triggered on field change. You can return modified values dynamically.',
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
### 📄 AutoForm

\`AutoForm\` is a dynamic, schema-driven form component designed for full control and customization.

---

### 🧩 AutoFormProps Overview

| Prop             | Type                                                                 | Description |
|------------------|----------------------------------------------------------------------|-------------|
| \`schema\`         | \`FieldSchema[]\`                                                      | Array of field definitions |
| \`onSubmit\`       | \`(values: Record<string, any>) => void\`                             | Called when form is submitted |
| \`values\`         | \`Record<string, any>\`                                                | Initial values |
| \`readOnly\`       | \`true?\`                                                              | Makes the form non-editable |
| \`validate\`       | \`FormValidateInput<Record<string, any>>\`                            | Optional validation function |
| \`onFieldChange\`  | \`(name, value, values) => Record<string, any>\`                       | Callback when a field changes |
| \`container\`      | \`(formNode, onSubmit, readOnly) => React.ReactNode\`                  | Customize the outer layout of the form |
| \`fieldContainer\` | \`(fieldNode, fieldSchema) => React.ReactNode\`                       | Customize how each field is rendered |
| \`customRender\`   | \`(field, value, error, onChange, values, options, readOnly) => JSX\` | Advanced per-field rendering |

---

### 🧱 Layout Customization

#### 🔲 \`container\`

Use the \`container\` prop to wrap the full form, including layout, submit buttons, etc.

#### 🔳 \`fieldContainer\`

With \`fieldContainer\`, you can wrap **each field** with your own layout:

\`\`\`tsx
fieldContainer: (field, fieldSchema) => (
  <Grid.Col span={{ base: 12, md: fieldSchema.type === 'object' ? 12 : 6 }}>
    {field}
  </Grid.Col>
)
\`\`\`

This allows **full control per field** — spacing, layout, responsiveness, etc.

---

### 🧠 Advanced Rendering with \`customRender\`

\`customRender\` gives you full control over how a field is rendered.

#### 📦 Example

\`\`\`tsx
customRender: (field, objValue, error, onObjChange, formValues, options, readOnly) => {
  if (field.type === 'object') {
    return (
      <Accordion defaultValue={field.name}>
        <Accordion.Item value={field.name}>
          <Accordion.Control>{field.label}</Accordion.Control>
          <Accordion.Panel>
            <Grid>
              {field.fields?.map((childField) => {
                function onChange(name: string, value: any) {
                  objValue[name] = value;
                  onObjChange(field.name, objValue);
                }

                if (childField.name === 'phones') {
                  return (
                    <CustomPhoneList
                      key={childField.name}
                      field={childField}
                      value={objValue[childField.name]}
                      onChange={onChange}
                      error={error}
                      formValues={formValues}
                      options={options}
                      readOnly={readOnly}
                    />
                  );
                }

                return (
                  <Grid.Col key={childField.name} span={6}>
                    <FieldRender
                      field={childField}
                      formValues={formValues}
                      value={objValue[childField.name]}
                      onChange={onChange}
                      readOnly={readOnly}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  }
  return null;
}
\`\`\`

You can use this to:
- Nest fields inside custom layouts
- Open modals, drawers, or complex editors
- Show/hide fields dynamically
- Render fields as fully custom components

---
        `,
      },
    },
  },
};

export default meta;

// ------------------------------
// Stories
// ------------------------------

type Story = StoryObj<typeof AutoForm>;

export const Standard: Story = {};

export const ReadOnly: Story = {
  args: { readOnly: true },
};

export const FormValidation: Story = {
  args: {
    schema: schemaWithValidation,
    validate: {
      contactInformation: {
        phones: {
          phoneNo: (value: string) => {
            const regex = /^(059|056)\d{7}$/;
            return regex.test(value)
              ? null
              : "Invalid phone number. It must be exactly 10 digits long and start with '059' or '056'.";
          },
        },
      },
    },
  },
};

export const CustomizedForm: Story = {
  args: {
    schema,
    customRender: (field, objValue, error, onObjChange, formValues, options, readOnly) => {
      if (field.type === 'object') {
        return (
          <Grid.Col span={12}>
            <Accordion defaultValue={field.name} variant="contained">
              <Accordion.Item value={field.name}>
                <Accordion.Control>{field.label}</Accordion.Control>
                <Accordion.Panel>
                  <Grid>
                    {field.fields?.map((field) => {
                      const onChange = (name: string, value: any) => {
                        objValue[name] = value;
                        onObjChange(field.name, objValue);
                      };

                      if (field.name === 'phones') {
                        return (
                          <CustomPhoneList
                            key={field.name}
                            error={error}
                            field={field}
                            formValues={formValues}
                            onChange={onChange}
                            value={objValue[field.name]}
                            options={options}
                            readOnly={readOnly}
                          />
                        );
                      }

                      return (
                        <Grid.Col
                          key={field.name}
                          span={{ base: 12, md: field.type === 'object' ? 12 : 6 }}
                        >
                          <FieldRender
                            field={field}
                            formValues={formValues}
                            value={objValue[field.name]}
                            error={undefined}
                            readOnly={readOnly}
                            onChange={onChange}
                          />
                        </Grid.Col>
                      );
                    })}
                  </Grid>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        );
      }
      return null;
    },
  },
};

// ------------------------------
// Custom Field Renderer
// ------------------------------

const CustomPhoneList: React.FC<CustomFieldRender> = (props) => {
  const [visible, { open, close }] = useDisclosure(false);
  const { error, field, formValues, onChange, value, options, readOnly } = props;

  const arrayOptions = getArrayOptions(field.name, onChange, value);

  return (
    <>
      <FieldRender
        field={field}
        formValues={formValues}
        onChange={onChange}
        value={value}
        error={error}
        readOnly={readOnly}
        customRender={() => (
          <>
            <Modal title="Add Phone" onClose={close} opened={visible}>
              <AutoForm
                schema={field.fields as FieldSchema[]}
                fieldContainer={(field, fieldSchema) => (
                  <Grid.Col span={{ base: 12, md: fieldSchema.type === 'object' ? 12 : 6 }}>
                    {field}
                  </Grid.Col>
                )}
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
                onSubmit={(values) => {
                  arrayOptions?.addElement(values);
                  close();
                }}
              />
            </Modal>

            <Button onClick={open} mb="md">
              Add Phone
            </Button>

            {value.length > 0 ? (
              <Table withColumnBorders withRowBorders withTableBorder striped>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Phone NO.</Table.Th>
                    <Table.Th>Action</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {value.map((phone, index) => (
                    <Table.Tr key={index}>
                      <Table.Td>{phone.phoneNo}</Table.Td>
                      <Table.Td>
                        <Button
                          variant="light"
                          size="xs"
                          color="red"
                          onClick={() => arrayOptions.removeElement(index)}
                        >
                          Delete
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            ) : (
              <Text>No phones are inserted</Text>
            )}
          </>
        )}
      />
    </>
  );
};
