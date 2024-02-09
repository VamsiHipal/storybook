import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tab-element')
export class TabElement extends LitElement {
    @property({ type: String }) text: string = '';
    render() {
        return html`
                    <slot name='image-resizer'></slot>
                    <p>${this.text}</p>
            `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
      'tab-element': TabElement;
    }
  }