import './App.css';
import { Route, Routes,} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import Store from './components/Store';
import Cart from './components/Cart/Cart';
import kanu from './1.jpg'
import Exercise from './components/Exercise';

function App() {

  const [products, setproducts] = useState()
  const [is, setis] = useState(false)
  const [cardinfo, setcardinfo] = useState()
  const [add, setadd] = useState()
  const [user, setuser] = useState(1)

  useEffect(() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => res.json()) 
    .then(data => setproducts(data))

  }, [])
  console.log(products)

  function handleis(is){
    setis(!is)

}

  



  return (
    <div className=" overflow-x-clip">
      {/* <img src={kanu} alt="" /> */}

      <Navbar products={products}/>
      <Routes>
        
        <Route exact path='/' element={<Home products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd}/>}></Route>
        <Route path='/products/:name/:id' element={<ProductPage products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd}/>}></Route>
        <Route path= '/product-category/:category/:sub_categ' element={<Store products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd}/>}></Route>
        <Route path= '/exercise' element={<Exercise/>}></Route>
        <Route path= '/cart' element={<Cart user={user}/>}></Route>
      </Routes>
      <Footer/>





      
      
    </div>
  );
}

export default App;
