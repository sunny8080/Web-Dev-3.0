class Tooltip3 extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer;
    this._toolTipText = 'Default tooltip text'

    // Shadow dom
    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
      <style>
        div{
          background-color: black;
          color: white;
          position: absolute;
          z-index: 10;
          width: 100vw;
        }
      </style>
      <slot>Some default</slot>
      <span > (?) </span>
    `
  }

  connectedCallback() {
    const tooltipIcon = this.shadowRoot.querySelector('span');

    // Add event listener on hover tooltipIcon
    tooltipIcon.addEventListener('mouseenter', this._showToolTip.bind(this))
    tooltipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this))
    this.style.position = 'relative'
  }

  _showToolTip() {
    if (this.hasAttribute('text')) {
      this._toolTipText = this.getAttribute('text');
    }
    this._toolTipContainer = document.createElement('div');
    this._toolTipContainer.textContent = this._toolTipText;

    // mount
    this.shadowRoot.appendChild(this._toolTipContainer);
  }

  _hideToolTip() {
    // this.removeChild(this._toolTipContainer)
    this.shadowRoot.removeChild(this._toolTipContainer)
  }
}

customElements.define('uc-slot', Tooltip3)
