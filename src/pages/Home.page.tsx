import AutoForm from '@/components/AutoForm';
import { Button, Grid, Group } from '@mantine/core';

export function HomePage() {
  function submitHandler(values: Record<string, any>) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <AutoForm
        schema={[
          { label: 'First Name', type: 'text', name: 'firstName', initialValue: 'saji' },
          {
            label: 'Last Name',
            type: 'text',
            name: 'lastName',
            disabled(values) {
              return values.firstName === 'saji';
            },
          },
          {
            label: 'Age',
            name: 'age',
            type: 'number',
            disabled(values) {
              return values.account.firstName === 'saji';
            },
          },
          {
            label: 'Account',
            name: 'account',
            type: 'object',
            fields: [
              {
                label: 'First Name',
                name: 'firstName',
                type: 'text',
              },
              {
                label: 'Last Name',
                name: 'lastName',
                type: 'text',
              },
            ],
          },
          {
            label: 'Phones',
            type: 'array',
            name: 'phones',
            fields: [
              {
                label: 'Phone',
                name: 'phone',
                type: 'text',
              },
            ],
            initialValue: [
              {
                phone: 'sad',
              },
              {
                phone: 'sad2',
              },
            ],
          },
        ]}
        container={(form, onSubmit) => (
          <>
            <Grid mb="md">{form}</Grid>
            <Group>
              <Button onClick={onSubmit}>Save</Button>
            </Group>
          </>
        )}
        fieldContainer={(field, fieldSchema) => {
          return (
            <Grid.Col span={{ base: 12, md: fieldSchema.type === 'object' ? 12 : 6 }}>
              {field}
            </Grid.Col>
          );
        }}
        onSubmit={submitHandler}
        validate={{
          phones: {
            phone: (value, _values, path) => {
              if (path === 'phones.0.phone' && value.length < 2) {
                return 'fill';
              }
              return null;
            },
          },
        }}
      />
    </>
  );
}
