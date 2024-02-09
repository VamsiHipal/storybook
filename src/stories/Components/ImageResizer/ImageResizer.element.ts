import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
const styles = css`
:host {
  display: block;
}
.skeleton-loader {
  width: 100%;
  height: 100%;
  animation: pulse 0.75s linear infinite alternate;
}
@keyframes pulse {
  0% {
    background-color: hsl(200, 20%, 85%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
`;
const border = (borderRadius: string) => {
  switch (borderRadius) {
    case 'sm':
      return '0.125rem';
    case 'md':
      return '0.375rem';
    case 'lg':
      return '0.5rem';
    case 'xl':
      return '0.75rem';
    case '2xl':
      return '1rem';
    default:
      return '0px';
  }
}

const resizer = (width: string) => {
  const widthNumber = Number(width);

  if (isNaN(widthNumber)) {
    if (width === '100%') {
      return 'preview';
    } else {
      return '100%';
    }
  } else if (widthNumber <= 32) {
    return 'parent-category';
  } else if (widthNumber <= 64) {
    return 'child-category';
  } else if (widthNumber <= 100) {
    return 'logo';
  } else if (widthNumber <= 125) {
    return 'card';
  } else if (widthNumber <= 128) {
    return 'thumbnail';
  } else if (widthNumber <= 304) {
    return 'spotlight';
  } else if (widthNumber <= 416) {
    return 'dish-popup';
  } else if (widthNumber <= 480) {
    return 'footer-banner';
  } else {
    return '100%';
  }
}

/**
 * @element image-resizer
 */
@customElement('image-resizer')
export class ResizeImage extends LitElement {
  static styles = styles;
  /**
 * @attr imageURL - The URL of the image
 */
  @property({ type: String }) imageURL: string = '';
  @property({ type: String }) height: string = '100%';
  @property({ type: String }) width: string = '100%';
  /**
 * The border radius of the image
 * @type {'sm' | 'md' | 'lg'}
 * @attr size - the border radius of the image
 * @default 'md'
 */
  @property({ type: String }) borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'none';
  /**
 * @attr objectFit - The object fit of the image
 */
  @property({ type: String }) objectFit: string = '';

  resizeAndEncodeImage() {
    let src = this.imageURL;
    if (this.imageURL.includes('storage.hipal.life')) {
      const lastDotIndex = this.imageURL.lastIndexOf('.');
      const urlWithoutExtension = this.imageURL.substring(0, lastDotIndex);
      const extension = this.imageURL.substring(lastDotIndex + 1);
      const resizedImageUrl = `${urlWithoutExtension}_${resizer(this.width)}.${extension}`;
      // string to convert to base64
      src = window.btoa(resizedImageUrl);
    }
    return src;
  }
  render() {
    const src = this.resizeAndEncodeImage();
    return !src ? html`<div style="border-radius:${ifDefined(border(this.borderRadius))}; 
      object-fit: ${ifDefined(this.objectFit)};
      height:${this.height}px; 
      width:${this.width}px" 
      class="skeleton-loader"></div>` 
    : 
    html`
    <img src=${ifDefined(src)} 
      height=${ifDefined(this.height)}
      width=${ifDefined(this.width)}
      style="border-radius:${ifDefined(border(this.borderRadius))}; 
      object-fit: ${ifDefined(this.objectFit)};"/>
`;
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'image-resizer': ResizeImage;
  }
}