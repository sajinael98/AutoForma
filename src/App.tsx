import { Button, Grid, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import React from 'react';
import AutoForm from './components/AutoForm';

const App = () => {
  const onSubmit = (values: Record<string, any>) => {
    alert(JSON.stringify(values));
  };

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
        ]}
      />
    </MantineProvider>
  );
};

export default App;
