import './App.css';
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import CheckUseEffect from './components/CheckUseEffect'
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const initProducts = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Sirf Excel',
      amount: 200,
      date: new Date(2021, 2, 2)
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ]

  // using products and id as state
  const [products, setProducts] = useState(initProducts);
  const [id, setId] = useState(5);

  function addProduct(data) {
    const newPrd = { ...data, id: `p${id}` };
    setId(id + 1);

    // console.log("inside App.js");
    // console.log(newPrd);

    // products.push(newPrd);
    // setProducts({ ...products });

    setProducts([...products, newPrd]); // best way
  }

  return (
    <div>
      <div>
        {/* use state */}

        {/* sending parent function (addProduct) to child component component component (NewProduct) */}
        <NewProduct addProduct={addProduct}></NewProduct>

        <Products products={products}></Products>
      </div>
      <br />


      <div style={{ backgroundColor: "lightblue", textAlign: "center", padding: "5rem" }}>
        {/* useEffect */}
        <h1>useEffect hook</h1>
        <CheckUseEffect />
      </div>


      <div style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        {/* form using useState */}
        <h1>Form</h1>
        <Form></Form>

      </div>
    </div>
  );
}
// style = {{ margin: 0 auto }} 

export default App;
