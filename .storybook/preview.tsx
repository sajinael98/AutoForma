import React from 'react';
import { Preview } from '@storybook/react';
import { MantineProvider } from '@mantine/core';

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
