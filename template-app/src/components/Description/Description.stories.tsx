import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Description } from '.';

export default {
  title: 'Description',
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = () => <Description />;

export const Primary = Template.bind({});
Primary.args = {};
