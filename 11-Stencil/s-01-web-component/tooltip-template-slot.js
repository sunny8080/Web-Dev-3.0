class Tooltip2 extends HTMLElement {
  constructor() {
    super();
    this._toolTipContainer;
    this._toolTipText = 'Default tooltip text'

    // Shadow dom
    this.attachShadow({ mode: 'open' })

    const template = document.querySelector('#tooltip-template');
    this.shadowRoot.appendChild(template.content.cloneNode(true))
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
    this._toolTipContainer.style.backgroundColor = 'black'
    this._toolTipContainer.style.color = 'white'
    this._toolTipContainer.style.width = '100vw'
    this._toolTipContainer.style.position = 'absolute'
    this._toolTipContainer.style.zIndex = '10';

    // mount
    this.shadowRoot.appendChild(this._toolTipContainer);
  }

  _hideToolTip() {
    // this.removeChild(this._toolTipContainer)
    this.shadowRoot.removeChild(this._toolTipContainer)
  }
}

customElements.define('uc-tooltip-template-slot', Tooltip2)
