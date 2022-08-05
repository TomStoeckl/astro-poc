import { LitElement, html, css } from "lit";

export const tagName = "special-button";

class SpecialButton extends LitElement {
  static styles = css`
    h1 {
      bachground-color: red;
    }
    button {
      background-image: linear-gradient(
        to right,
        #e55d87 0%,
        #5fc3e4 51%,
        #e55d87 100%
      );
      margin: 10px;
      padding: 15px 45px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
    }

    button:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  `;

  render() {
    return html`<button><slot /></button>`;
  }
}

customElements.define(tagName, SpecialButton);
