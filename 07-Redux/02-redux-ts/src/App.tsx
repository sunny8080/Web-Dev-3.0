import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header'
import Shop from './components/Shop'
import { DUMMY_PRODUCTS } from './data/dummy-products'
import Product from './components/Product'


export type ProductItem = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

function App() {

  return (
    <div className='app'>
      <Provider store={store}>
        <div>
          <Header />
          <Shop>
            <ul id='products'>
              {
                DUMMY_PRODUCTS.map((product) => {
                  return (
                    <li key={product.id}>
                      <Product product={product} />
                    </li>
                  )
                })
              }
            </ul>
          </Shop>
        </div>
      </Provider>
    </div>
  )
}

export default App
