import './App.css';
import { Route, Routes,} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {

  const [products, setproducts] = useState()

  useEffect(() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => res.json()) 
    .then(data => setproducts(data))

  }, [])

  



  return (
    <div className=" overflow-x-clip">

      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home products={products}/>}></Route>
      </Routes>





      
      
    </div>
  );
}

export default App;
