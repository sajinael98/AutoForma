import type { Meta, StoryObj } from '@storybook/react';
import { Button, Grid, Group } from '@mantine/core';
import AutoForm from '@/components/AutoForm';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { hasLength } from '@mantine/form';
import { FieldSchema } from '@/types/field';

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
        required: true,
        fields: [
          {
            type: 'number',
            name: 'phoneNo',
            label: 'Phone NO',
          },
        ],
      },
    ],
  },
];

const meta: Meta<typeof AutoForm> = {
  title: 'components/AutoForm',
  component: AutoForm,
  tags: ['autodocs'],
  args: {
    onSubmit: (values) => alert(JSON.stringify(values)),
    schema,
    fieldContainer: (field) => (
      <Grid.Col span={{ base: 12, md: field.type === 'object' ? 12 : 8 }}>{field}</Grid.Col>
    ),
    container: (form, onSubmit, readOnly) => (
      <>
        <Grid>{form}</Grid>
        <Group justify="flex-end">
          <Button onClick={onSubmit} disabled={readOnly}>
            Submit
          </Button>
        </Group>
      </>
    ),
  },
  argTypes: {
    onSubmit: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Standard: Story = {};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const FormValidation: Story = {
  args: {
    validate: {
      personalInformation: {
        firstName: () => 'sadsadsad',
      },
      contactInformation: {
        phones: {
          phoneNo: (value) => 'asdsaddd',
        },
      },
    },
  },
};
