import type { Meta, StoryObj } from '@storybook/web-components';
import './ImageResizer.element';
import { html } from 'lit';

const meta: Meta = {
    title: 'Components/ImageResizer',
    tags: ['autodocs'],
    component: 'image-resizer',
    argTypes: {
        imageURL: {
            description: 'The URL of the image',
            control: { type: 'text' },
            defaultValue: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' }
            }
        },
        height: {
            description: 'Height of the image (in Pixels)',
            control: { type: 'select' },
            options: ['100%', '32', '64', '100', '122', '168', '208', '416', '430'],
            defaultValue: 'none',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' }
            }
        },
        width: {
            description: 'Width of the image (in Pixels)',
            control: { type: 'select' },
            options: ['100%', '32', '64', '100', '125', '128', '304', '416', '480'],
            defaultValue: 'none',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' }
            }
        },
        borderRadius: {
            description: 'The border radius of the image',
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'none',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' }
            }
        },
        objectFit: {
            description: 'The object fit of the image',
            control: { type: 'select' },
            options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
            defaultValue: '',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' }
            }
        }
    }
};

export default meta;
type Story = StoryObj;

const Template: Story = {
    render: (args) => html`
    <image-resizer 
        imageURL=${args.imageURL} 
        width=${args.width} 
        height=${args.height} 
        borderRadius=${args.borderRadius} 
        objectFit=${args.objectFit}
    ></image-resizer>
`}
export const Default = { ...Template };
Default.args = {
    imageURL: 'https://mighty.tools/mockmind-api/content/human/48.jpg',
    width: '50%',
    height: '50%',
    borderRadius: 'md',
    objectFit: ''
};
export const Logo = { ...Template };
Logo.args = {
    imageURL: 'https://mighty.tools/mockmind-api/content/human/48.jpg',
    width: '100%',
    height: '100%',
    borderRadius: 'cover',
    objectFit: ''
};
