import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Example } from '..';

export default {
  title: 'Example',
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Clicked this many times:',
};
