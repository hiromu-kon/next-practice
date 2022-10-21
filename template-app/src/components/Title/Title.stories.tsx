import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = () => <Title />;

export const Primary = Template.bind({});
Primary.args = {};
