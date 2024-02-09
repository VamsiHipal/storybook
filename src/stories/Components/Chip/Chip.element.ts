import { html, css, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const styles = css`
  :host a {
    color: inherit;
    text-decoration: none !important;
  }
  
  :host section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 0.5rem;
    height: 1rem;
    border-radius: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: transparent;
    width: fit-content;
  }

  img {
    border-radius: 50%;
    padding-right: 0.5rem;
  }
`;

const isURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * @element h-chip
 * @slot default - Use this slot for text
 * @slot avatar - Use this slot for an avatar
 */
@customElement('h-chip')
export class Chip extends LitElement {
  static styles = styles;

  /**
   * The size of the chip
   * @type {'sm' | 'md' | 'lg'}
   * @attr size - the size of the chip
   * @default 'md'
   */
  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The URL to navigate to
   * @type {string}
   * @attr href - the URL to navigate to
   * @default '#'
  */
  @property({ type: String })
  href: string = "#";

  @property({ type: String })
  avatarURL: string = "";

  @property({ type: String })
  text: string = "";

  render() {
    return html`
      <a href=${this.href}>
        <section>
          <!-- @slot Use this slot -->
          <slot name="avatar">
            ${this.avatarURL && isURL(this.avatarURL)
        ? html`
                  <img
                    src=${this.avatarURL}
                    alt="avatar"
                    width=${this.size === 'sm' ? '16' : '24'}
                    height=${this.size === 'sm' ? '16' : '24'}
                  />
                `
        : nothing
      }
          </slot>
          <slot name="content">
            <span>
              ${this.text}
            </span>
          </slot>
        </section>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'h-chip': Chip
  }
}