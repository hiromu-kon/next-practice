import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
Primary.args = {};
