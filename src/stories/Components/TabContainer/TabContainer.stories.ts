import type { Meta, StoryObj } from '@storybook/web-components';
import './TabContainer.element';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/TabContainer',
    tags: ['autodocs'],
    component: 'tab-container',
    argTypes: {
        direction: {
            description: 'The direction of the container',
            control: { type: 'select' },
            options: ['row', 'column'],
            defaultValue: 'row',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'row' }
            }
        },
        justifyContent: {
            description: 'The justify content of the container',
            control: { type: 'select' },
            options: ['normal', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
            defaultValue: 'normal',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'normal' }
            }
        },
        alignContent: {
            description: 'The align content of the container',
            control: { type: 'select' },
            options: ['normal', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
            defaultValue: 'normal',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'normal' }
            }
        },
        gap: {
            description: 'The gap of the container',
            control: { type: 'text' },
            defaultValue: '0',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '0' }
            }
        },
        gapDirection: {
            description: 'The gap direction of the container',
            control: { type: 'select' },
            options: ['row', 'column'],
            defaultValue: 'row',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'row' }
            }
        }
    }
};
export default meta;
type Story = StoryObj;

const Template: Story = {
    render: (args) => html`<tab-container 
    direction=${args.direction}
    justifyContent=${args.justifyContent}
    alignContent=${args.alignContent}
    gap=${args.gap}
    gapDirection=${args.gapDirection}
    >
    <tab-element width=${args.width} height=${args.height}>
        <p>Hi</p>
    </tab-element>
    <tab-element selected width=${args.width} height=${args.height}>
        <p>Hello</p>
    </tab-element>
    <tab-element width=${args.width} height=${args.height}>
        <p>Hey</p>
    </tab-element>
    </tab-container>`
}
export const Default = { ...Template };
Default.args = {
    direction: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    gap: '20',
    gapDirection: 'row'
}
export const Column = { ...Template };
Column.args = {
    direction: 'column',
    justifyContent: 'normal',
    alignContent: 'normal',
    gap: '20',
    gapDirection: 'column'
}