import { Button, Grid, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import React, { useEffect, useState } from 'react';
import AutoForm from './components/AutoForm';

const App = () => {
  const [values, setValues] = useState()
  const onSubmit = (values: Record<string, any>) => {
    alert(JSON.stringify(values));
  };
  useEffect(() => {},])
  return (
    <MantineProvider>
      <AutoForm
        onSubmit={onSubmit}
        fieldContainer={(field) => {
          return <Grid.Col>{field}</Grid.Col>;
        }}
        container={(form, onSubmit) => {
          return (
            <>
              <Grid>{form}</Grid>
              <Button onClick={onSubmit}>Save</Button>
            </>
          );
        }}
        schema={[
          {
            type: 'check',
            label: 'Enabled',
            name: 'enabled',
          },
          {
            type: 'object',
            label: 'fullName',
            name: 'fullName',
            fields: [
              {
                type: 'text',
                label: 'First Name',
                name: 'firstName',
              },
              {
                type: 'text',
                label: 'Last Name',
                name: 'lastName',
              },
            ],
          },
          {
            type: 'select',
            label: 'Gender',
            name: 'gender',
            data: [
              {
                label: 'Male',
                value: 'male',
              },
              {
                label: 'Female',
                value: 'female',
              },
            ],
          },
          {
            type: "textarea",
            label: "Note",
            name: "note"
          }
        ]}
      />
    </MantineProvider>
  );
};

export default App;
