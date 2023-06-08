import type { Meta, StoryObj } from '@storybook/react';
import { Label } from "../../components/Label";


const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select' },
    customColor: { control: 'color' }
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    label: 'Label',
  },
};

export const Secondary: Story = {
  args: {
    size: 'h1',
    label: 'Label',
    allCaps: false,
    color: 'secondary'
  },
};

export const Tertiary: Story = {
  args: {
    size: 'h1',
    label: 'Label',
    color: 'tertiary'
  },
};

export const AllCaps: Story = {
  args: {
    size: 'h2',
    label: 'Label',
    allCaps: true,
  },
};

 