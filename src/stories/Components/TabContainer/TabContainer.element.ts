import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
    :host {
        display: block;
    }

    `
@customElement('tab-container')
export class TabContainer extends LitElement {
    static styles = styles;
    @property({ type: String }) direction: string = '';
    @property({ type: String }) justifyContent: string = '';
    @property({ type: String }) alignContent: string = '';
    @property({ type: String }) gap: string = '';
    @property({ type: String }) gapDirection: string = '';
    render() {
        return html`<slot style="display:flex; flex-direction:${this.direction}; justify-content:${this.justifyContent}; alignItems:${this.alignContent}; ${this.gapDirection ? `${this.gapDirection}-gap:${this.gap}` : `gap:${this.gap}`};"></slot>`;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-container': TabContainer;
    }
}