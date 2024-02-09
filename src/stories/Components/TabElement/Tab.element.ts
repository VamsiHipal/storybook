import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
        :host {
            display: flex;
            flex-direction: column;
        }
        p{
            margin: 0;
            text-align: center;
        }
        hr{
            border: 1px solid #000;
        }
    `;
@customElement('tab-element')
export class TabElement extends LitElement {
    static styles = styles;
    @property({ type: String }) text: string = '';
    @property({ type: String }) width: string = '';
    @property({ type: String }) height: string = '';
    @property({ type: Boolean, attribute: 'selected', reflect: true }) active: boolean = false;
    selectedTab = () => {
        this.active = !this.active;
    }
    render() {
        return html`
        <div @click="${this.selectedTab}" style="width: ${this.width}px; height=${this.height}px;">
            <slot></slot>
            <p>${this.text}</p>
            ${this.active ? html`<hr />` : ''}
        </div>
        `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-element': TabElement;
    }
}