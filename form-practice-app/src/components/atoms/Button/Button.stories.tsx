import { ComponentMeta, type ComponentStory } from "@storybook/react"
import { Button, ButtonProps } from '.'

type T = typeof Button;
type Meta = ComponentMeta<typeof Button>;
type Story = ComponentStory<typeof Button>;

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story = (args) => <Button {...args} />

export const Default: Story = Template.bind({})
Default.args = {
  text: 'Button Text'
}