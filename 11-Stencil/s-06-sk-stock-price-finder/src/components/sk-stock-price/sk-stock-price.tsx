import { Component, State, h, Element, Prop, Watch, Listen } from '@stencil/core';

import { ALPHA_VANTAGE_API_KEY } from '../../global/global'

@Component({
  tag: 'sk-stock-price',
  styleUrl: './sk-stock-price.css',
  shadow: true,
})
export class SkStockPrice {
  stockInput: HTMLInputElement
  initialStockSymbol: string

  @Element() el: HTMLElement;
  @State() fetchedPrice: number;
  @State() error: string;
  @State() stockInputValid: boolean = false;
  @State() stockUserInput: string;
  @State() loading: boolean;

  @Prop({ mutable: true, reflect: true }) stockSymbol: string

  // Watchers
  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    console.log("object");
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true
      this.error = null
      this.fetchStockPrice(newValue)
    }
  }

  // Listen to custom event ( which came from other stencil component )
  @Listen('skSymbolSelected', { target: 'body' })
  onSkSymbolSelected(event: CustomEvent) {
    console.log("in sk-stock-price - stock symobl selected ");
    if (event.detail && event.detail !== this.stockSymbol) {
      this.stockSymbol = event.detail;
    }
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.fetchedPrice = undefined;

    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();

    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;

    // const stockSymbol = this.stockInput.value
    // this.fetchStockPrice(stockSymbol);

    this.stockSymbol = this.stockInput.value
  }

  async fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    try {
      // const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`);
      const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${ALPHA_VANTAGE_API_KEY}`);
      if (res.status !== 200) {
        throw new Error('Invalid request');
      }

      const data = await res.json();

      if (!data['Global Quote']) {
        throw new Error('Maximum attempt reached');
      }

      if (!data['Global Quote']['05. price']) {
        throw new Error('Invalid symbol');
      }

      this.error = null;
      this.fetchedPrice = +data['Global Quote']['05. price'];
    } catch (err) {
      console.log('error occurred');
      this.error = err.message;
      this.fetchedPrice = null;
    }
    this.loading = false;
  }

  componentWillLoad() {
    console.log("in componentWillLoad");
    if (this.stockSymbol) {
      this.stockInputValid = true
      this.stockUserInput = this.stockSymbol
      this.stockSymbol = this.stockSymbol;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentDidLoad() {
    console.log("in componentDidLoad");
    // if (this.stockSymbol) {
    //   // this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }

  componentWillUpdate() {
    console.log("in componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("in componentDidUpdate");
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }

  disconnectedCallback() {
    console.log("in disconnectedCallback");
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input
            type="text"
            id='stock-symbol'
            ref={x => this.stockInput = x}
            value={this.stockUserInput}
            onInput={this.onUserInput.bind(this)}
          />
          <button type="submit" disabled={!this.stockInputValid}>Fetch</button>
        </form>
        <div>
          {
            this.loading ?
              <sk-spinner />
              :
              this.fetchedPrice ?
                (
                  <p>Price: ${this.fetchedPrice}</p>
                )
                :
                this.error ?
                  (
                    <p>{this.error}</p>
                  )
                  :
                  (
                    <p>Please enter a symbol</p>
                  )
          }
        </div>
      </div>
    );
  }
}
