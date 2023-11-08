class SkModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isModalOpen = false;

    this.shadowRoot.innerHTML = `
      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        #backdrop{
          position:fixed;
          top:0;
          left:0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
        }

        #modal {
          position: fixed;
          top: 50%;
          left: 50%;
          translate: -50% -80%;
          z-index: 1000;
          background: white;
          padding: 2rem 2rem;
          border-radius: 5px;
          box-shadow: 0 2px 15px rgba(0,0,0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease-out;
        }

        :host([opened]) #backdrop,
        :host([opened]) #modal {
          opacity: 1;
          pointer-events: all;
        }

        :host([opened]) #modal{
          translate: -50% -50%;
        }

        header {
          border-bottom: 1px solid #ccc;
        }

        ::slotted(h1) {
          font-size: 1.25rem;
          font-weight: bold;
        }
        
        #main {
          font-size: 1.2rem;
          font-weight: 500;
        }

        #action-button{
          border-top: 1px solid #ccc;
          padding: 1rem;
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }

        #action-button button{
          padding: 3px 5px;
          border-radius: 5px;
          cursor: pointer;
        }
        
      </style>
      <div id="backdrop" ></div>
      <div id="modal" >
        <header>
          <slot name="title">Please Confirm Payment</slot>
        </header>

        <div id="main">
          <slot></slot>
        </div>

        <div id="action-button">
          <button id="cancel-btn">Cancel</button>
          <button id="confirm-btn" >Confirm</button>
        </div>
      </div>
    `


    const backdropEle = this.shadowRoot.querySelector('#backdrop');
    const cancelBtn = this.shadowRoot.querySelector('#cancel-btn');
    const confirmBtn = this.shadowRoot.querySelector('#confirm-btn');


    backdropEle.addEventListener('click', this._cancel.bind(this));
    cancelBtn.addEventListener('click', this._cancel.bind(this));
    confirmBtn.addEventListener('click', this._confirm.bind(this));

    // cancelBtn.addEventListener('cancel', ()=>{
    //   console.log('Cancel from inside the component');
    // })

    // handle slotchange event
    const slots = this.shadowRoot.querySelectorAll('slot');
    slots[1]?.addEventListener('slotchange', (e) => {
      console.log(slots[1].assignedNodes());
    })
  }


  // observe attribute change
  static get observedAttribute() {
    // return attribute which component have to observe
    return ['opened'];
  }


  // handle attribute change
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.hasAttribute('opened')) {
      this.isModalOpen = true;
    } else {
      this.isModalOpen = false;
    }
  }


  openModal() {
    if (!this.hasAttribute('opened')) {
      this.setAttribute('opened', '');
      this.isModalOpen = true;
    }
  }

  closeModal() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
      this.isModalOpen = false;
    }
  }

  _cancel(event) {
    const cancelEvent = new Event('cancel', {
      bubbles: true, composed: true
    });
    event.target.dispatchEvent(cancelEvent);
    this.closeModal();
  }

  _confirm() {
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent)
    this.closeModal();
  }

}

customElements.define('sk-modal', SkModal);
