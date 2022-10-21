import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  link: 'https://nextjs.org/docs',
  heading: 'Documentation &rarr;',
  description: 'Find in-depth information about Next.js features and API.',
};
