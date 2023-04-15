import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Example } from '..';

export default {
  title: 'Example',
  component: Example,
  argTypes: {},
} as Meta<typeof Example>;

const Template: StoryFn<typeof Example> = (args) => <Example {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Clicked this many times:',
};
