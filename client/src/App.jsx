import './App.css';
import { Route, Routes,} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

function App() {

  const [products, setproducts] = useState()
  const [is, setis] = useState(false)
  const [cardinfo, setcardinfo] = useState()
  const [add, setadd] = useState()

  useEffect(() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => res.json()) 
    .then(data => setproducts(data))

  }, [])

  function handleis(is){
    setis(!is)

}

  



  return (
    <div className=" overflow-x-clip">

      <Navbar/>
      <Routes>
        
        <Route exact path='/' element={<Home products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd}/>}></Route>
        <Route path='/products/:name/:id' element={<ProductPage products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd}/>}></Route>
      </Routes>
      <Footer/>





      
      
    </div>
  );
}

export default App;
