import type { Meta, StoryObj } from '@storybook/web-components';
import './Tab.element';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/TabElement',
    tags: ['autodocs'],
    component: 'tab-element',
    argTypes: {
        text: {
            description: 'The text of the tab',
            control: { type: 'text' },
            defaultValue: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' }
            }
        },
        width: {
            description: 'The width of the tab in pixels',
            control: { type: 'text' },
            defaultValue: '100',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '100' }
            }
        },
        height: {
            description: 'The height of the tab in pixels',
            control: { type: 'text' },
            defaultValue: '100',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '100' }
            }
        },
        selected: {
            description: 'The selected tab',
            control: { type: 'boolean' },
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false }
            }
        }
    }
};
export default meta;
type Story = StoryObj;
const Template: Story = {
    render: (args) => html`<tab-element 
    text=${args.text}
    width=${args.width}
    height=${args.height}
    ?selected=${args.selected}
    >
        <img 
            src="https://mighty.tools/mockmind-api/content/human/58.jpg" alt="58" 
            height=${args.height} 
            width=${args.width}
        />
    </tab-element>`
}
export const Default = { ...Template };
Default.args = {
    text: 'Tab Element',
    width: '100',
    height: '100',
    selected: false
}
export const Selected = { ...Template };
Selected.args = {
    text: 'Tab Element',
    width: '100',
    height: '100',
    selected: true
}