import type { Meta, StoryObj } from '@storybook/web-components';

import './Chip.element';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  component: 'h-chip',
  argTypes: {
    size: {      
      defaultValue: 'md',
      description: 'The size of the chip',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        // category: 'Props',
      }
    },
  //   href: {
  //     description: 'The URL to navigate to',
  //     control: { type: 'text' },
  //     defaultValue: '#',
  //     table: {
  //       type: { summary: 'string' },
  //       defaultValue: { summary: '#' },
  //       // category: 'Props',
  //     }
  //   },
  //   avatarURL: {
  //     description: 'The URL of the avatar',
  //     control: { type: 'text' },
  //     defaultValue: '',
  //     table: {
  //       type: { summary: 'string' },
  //       defaultValue: { summary: '' },
  //       // category: 'Props',
  //     }
  //   },
  //   text: {
  //     description: 'The content of the chip',
  //     control: { type: 'text' },
  //     defaultValue: '',
  //     table: {
  //       type: { summary: 'string' },
  //       defaultValue: { summary: '' },
  //     }
  //   },
  //   // content: {
  //   //   description: 'The content of the chip',
  //   //   control: { type: 'text' },
  //   //   defaultValue: '',
  //   //   table: {
  //   //     type: { summary: 'string' },
  //   //     defaultValue: { summary: '' },
  //   //     category: 'Slots',
  //   //   }
  //   // },
  },
};

export default meta;
type Story = StoryObj;

const Template: Story = {
  render: (args) => html`
<h-chip
  size=${args.size}
  href=${args.href}
  avatarURL=${args.avatarURL}
  text=${args.text}
>
</h-chip>
    `
}

export const Default = { ...Template };
Default.args = {
  size: 'md',
  href: '#',
  avatarURL: 'https://mighty.tools/mockmind-api/content/human/48.jpg',
  text: 'Hello!',
  avatar: 'avatar',
};

export const WithoutAvatar = { ...Template };
WithoutAvatar.args = {
  size: 'md',
  href: '#',
  text: 'Hello!',
  avatar: 'avatar',
};
