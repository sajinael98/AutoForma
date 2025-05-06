import AutoForm from '@/components/AutoForm';
import { FieldSchema } from '@/types/field';
import { Button, Grid, Group } from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';


// ------------------------------
// Schema Definitions
// ------------------------------
const textFieldSchema: FieldSchema[] = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    initialValue: 'John',
  },
];

const numberFieldSchema: FieldSchema[] = [
  {
    type: 'number',
    name: 'age',
    label: 'Age',
    initialValue: 30,
  },
];

const selectFieldSchema: FieldSchema[] = [
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
];

const checkFieldSchema: FieldSchema[] = [
  {
    type: 'check',
    name: 'enabled',
    label: 'Enabled',
    initialValue: true,
  },
];

const dateFieldSchema: FieldSchema[] = [
  {
    type: 'date',
    name: 'birthDate',
    label: 'Birth Date',
    initialValue: new Date(),
  },
];

const arrayFieldSchema: FieldSchema[] = [
  {
    type: 'array',
    name: 'tags',
    label: 'Tags',
    fields: [
      {
        type: 'text',
        name: 'tag',
        label: 'Tag',
      },
    ],
  },
];

const objectFieldSchema: FieldSchema[] = [
  {
    type: 'object',
    name: 'address',
    label: 'Address',
    fields: [
      {
        type: 'text',
        name: 'street',
        label: 'Street',
      },
      {
        type: 'text',
        name: 'city',
        label: 'City',
      },
    ],
  },
];

// ------------------------------
// Storybook Meta
// ------------------------------

const meta: Meta<typeof AutoForm> = {
  title: 'components/AutoForm Fields',
  component: AutoForm,
  tags: ['autodocs'],
  args: {
    onSubmit: (values) => alert(JSON.stringify(values, null, 2)),
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
    onSubmit: {
      table: {
        disable: true,
      },
    },
    container: {
      table: {
        disable: true,
      },
    },
    fieldContainer: {
      table: {
        disable: true,
      },
    },
    schema: {
      table: {
        disable: false,
      },
    },
  },
 
};

export default meta;

// ------------------------------
// Stories
// ------------------------------

type Story = StoryObj<typeof AutoForm>;

export const TextField: Story = {
  args: {
    schema: textFieldSchema,
  },
};

export const NumberField: Story = {
  args: {
    schema: numberFieldSchema,
  },
};

export const SelectField: Story = {
  args: {
    schema: selectFieldSchema,
  },
};

export const CheckField: Story = {
  args: {
    schema: checkFieldSchema,
  },
};

export const DateField: Story = {
  args: {
    schema: dateFieldSchema,
  },
};

export const ArrayField: Story = {
  args: {
    schema: arrayFieldSchema,
  },
};

export const ObjectField: Story = {
  args: {
    schema: objectFieldSchema,
  },
};