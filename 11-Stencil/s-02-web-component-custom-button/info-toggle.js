class InfoToggle extends HTMLElement {
  constructor() {
    super();
    this._isVisible = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        #info-box{
          display: none;
        }

        button{
          cursor: pointer;
        }
      </style>
      <button>Show</button>
      <p id="info-box" > <slot>Default Slot text</slot> </p>
    `

    this._infoBox = this.shadowRoot.querySelector('#info-box');
    this._toggleButton = this.shadowRoot.querySelector('button');
    this._toggleButton.addEventListener('click', this._toggleInfoBox.bind(this));
  }

  connectedCallback() {
    if (this.hasAttribute('is-visible') && this.getAttribute('is-visible') === 'true') {
      this._toggleInfoBox();
    }
  }

  _toggleInfoBox() {
    this._isVisible = !this._isVisible;
    this._toggleButton.textContent = this._isVisible ? 'Hide' : 'Show';
    this._infoBox.style.display = this._isVisible ? 'block' : 'none';
  }
}

customElements.define('info-toggle', InfoToggle);
