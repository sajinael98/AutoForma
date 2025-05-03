import AutoForm from '@/components/AutoForm';
import { Button, Grid, Group } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { FormSchema } from '@/types/form';

export default {
  title: 'components/AutoForm',
  component: AutoForm,
};

const Template = (args) => (
  <AutoForm
    {...args}
    fieldContainer={(field) => <Grid.Col span={{ base: 12, md: 6 }}>{field}</Grid.Col>}
    container={(form, onSubmit, readOnly) => (
      <>
        <Grid>{form}</Grid>
        <Group justify="flex-end">
          <Button onClick={onSubmit} disabled={readOnly}>
            Submit
          </Button>
        </Group>
      </>
    )}
  />
);

const schema: FormSchema = [
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
];

export const Normal = Template.bind({});

Normal.args = {
  schema,
  fieldContainer: (field) => <Grid.Col span={{ base: 12, md: 6 }}>{field}</Grid.Col>,
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
};
