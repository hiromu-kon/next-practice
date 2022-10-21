import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Link } from '.';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = () => <Link />;

export const Primary = Template.bind({});
Primary.args = {};
