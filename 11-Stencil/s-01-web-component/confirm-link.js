class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', e => {
      if (!confirm('Do you really want to leave ?')) {
        event.preventDefault();
      }
    })
  }
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' })
