import { useState} from 'react'
import data from './products.json'
import { Product } from './Components/Product'
import './App.css';

function App() {

  const [cart, setCart] = useState(data.cart)

  const addToCart = product => {
    setCart([...cart, product])
  }
 
  console.log(cart)



  return (
    <div className="App">
    {data.products.map(product => <Product product={product} addToCart={addToCart} />)}
    </div>
  );
}

export default App;
