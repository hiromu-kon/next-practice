import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { OverlayLoading } from '.';
import { Provider } from 'react-redux';
import { store } from '@/features/store';

export default {
  title: 'OverlayLoading',
  component: OverlayLoading,
} as ComponentMeta<typeof OverlayLoading>;

const Template: ComponentStory<typeof OverlayLoading> = () => (
  <Provider store={store}>
    <OverlayLoading />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {};
