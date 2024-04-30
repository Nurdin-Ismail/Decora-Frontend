import './App.css';
import { Route, Routes,} from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import ProductPage from './components/productpage/ProductPage';
import Store from './components/Store';
import Cart from './components/Cart/Cart';
import Exercise from './components/Exercise';

import User from './components/user/User';

function App() {

  const [products, setproducts] = useState()
  const [is, setis] = useState(false)
  const [cardinfo, setcardinfo] = useState()
  const [add, setadd] = useState()
  const [userid, setuserid] = useState(1)
  const [cart, setcart] = useState()
  const [updated, setupdated] = useState(0)
  const [user,setuser] = useState()



  useEffect(() => {
    fetch('http://127.0.0.1:5555/products')
    .then(res => res.json()) 
    .then(data => setproducts(data))

  }, [])

  useEffect(() => {
    if(userid){
        fetch(`http://127.0.0.1:5555/user/${userid}`)
        .then(res => res.json()) 
        .then(data => {
            setcart(data.cart)
            setuser(data)
        })

        
    }
    

}, [updated])
  // console.log(products)

  console.log(user);

  function handleis(is){
    setis(!is)

}

  



  return (
    <div className=" overflow-x-clip">
      {/* <img src={kanu} alt="" /> */}

      {cart && cart.length > 0 ? <Navbar products={products} quantity={cart.length}/> : <Navbar products={products} /> }
      <Routes>
        
        <Route exact path='/' element={<Home products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd} user={userid} setpatched={setupdated} patched={updated} cart={cart}/>}></Route>
        <Route path='/products/:name/:id' element={<ProductPage products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd} user={userid} cart={cart} setupdated={setupdated} updated={updated}/>}></Route>
        <Route path= '/product-category/:category/:sub_categ' element={<Store products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} setis={setis} add={add} setadd={setadd} user={userid} cart={cart} setupdated={setupdated} updated={updated}/>}></Route>
        <Route path= '/exercise' element={<Exercise/>}></Route>
        <Route path= '/cart' element={<Cart user={userid} cart={cart} setcart={setcart} setpatched={setupdated} patched={updated}/>}></Route>
        <Route path= '/user' element={<User user={user} setupdated={setupdated} updated={updated}/>}></Route>

      </Routes>
      <Footer/>





      
      
    </div>
  );
}

export default App;
