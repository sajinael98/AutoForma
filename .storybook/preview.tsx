import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Preview } from '@storybook/react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MantineProvider>
        <Story />
      </MantineProvider>
    ),
  ],
};

export default preview;
