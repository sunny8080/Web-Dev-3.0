import { Component, State, h, EventEmitter, Event } from "@stencil/core";

import { ALPHA_VANTAGE_API_KEY } from '../../global/global'

@Component({
  tag: 'sk-stock-finder',
  styleUrl: './sk-stock-finder.css',
  shadow: true
})
export class SkStockFinder {
  stockNameInput: HTMLInputElement;

  @State() loading: boolean
  @State() stocks: { symbol: string, name: string }[]

  @Event({ bubbles: true, composed: true }) skSymbolSelected: EventEmitter<string>;

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    this.findStocks(stockName);
  }

  async findStocks(stockName: string) {
    this.loading = true;
    try {
      // const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo`);
      const res = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${ALPHA_VANTAGE_API_KEY}`);
      if (res.status !== 200) {
        throw new Error('Invalid request')
      }

      const data = await res.json();

      if (!data['bestMatches']) {
        throw new Error('Maximum attempt reached');
      }

      this.stocks = data['bestMatches']?.map(match => (
        { symbol: match['1. symbol'], name: match['2. name'] }
      ))
      // console.log(this.stocks);
    } catch (error) {
      console.log("Error : " + error);
    }
    this.loading = false;
  }


  onSelectSymbol(symbol: string) {
    // emit a event that can be listen by other stencil component
    this.skSymbolSelected.emit(symbol);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFindStocks.bind(this)}>
          <input
            id="stock-symbol"
            type="text"
            ref={el => this.stockNameInput = el}
          />
          <button type="submit">Find Stocks</button>
        </form>

        <div>
          {
            this.loading ?
              (
                <sk-spinner />
              )
              :
              (
                <ul>
                  {
                    this.stocks?.map(stock => (
                      <li onClick={this.onSelectSymbol.bind(this, stock.symbol)}>
                        <strong>{stock.symbol}</strong> - {stock.name}
                      </li>
                    ))
                  }
                </ul>
              )
          }
        </div>
      </div>
    )
  }
}
