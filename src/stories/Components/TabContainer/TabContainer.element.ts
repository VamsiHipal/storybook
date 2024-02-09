import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('tab-container')
export class TabContainer extends LitElement {
    @property({ type: String }) text: string = '';
    render() {
        return html`<slot name="tab-element"></slot>`;
    }
}
declare global {
    interface HTMLElementTagNameMap {
      'tab-container': TabContainer;
    }
  }