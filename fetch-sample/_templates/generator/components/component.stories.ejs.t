---
to: "<%= require_storybook ? `src/components/${h.changeCase.pascal(component_name)}/${h.changeCase.pascal(component_name)}.stories.tsx` : null %>"
---

import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { <%= h.changeCase.pascal(component_name) %> } from '.';

export default {
  title: '<%= h.changeCase.pascal(component_name) %>',
  component: <%= h.changeCase.pascal(component_name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascal(component_name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(component_name) %>> = () => <<%= h.changeCase.pascal(component_name) %> />;

export const Primary = Template.bind({});
Primary.args = {};
