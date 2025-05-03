import React from 'react';
import { Preview } from '@storybook/react';
import { MantineProvider } from '@mantine/core';

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

