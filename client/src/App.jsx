import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ProductPage from "./components/productpage/ProductPage";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import Exercise from "./components/Exercise";
import Signup from "./components/Sign-In/SignupOrLogin";
import Details from "./components/checkout/Details";
import User from "./components/user/User";
import Checkout from "./components/checkout/Checkout";

function App() {
  const [isloggedIn, setisLoggedIn] = useState();

  const [products, setproducts] = useState();
  const [is, setis] = useState(false);
  const [cardinfo, setcardinfo] = useState();
  const [add, setadd] = useState();
  const [userid, setuserid] = useState();
  const [cart, setcart] = useState();
  const [updated, setupdated] = useState(0);
  const [user, setuser] = useState();
  const [current, setcurrent] = useState("Account Information");
  const [order, setorder] = useState();

  useEffect(() => {
    setisLoggedIn(JSON.parse(localStorage.getItem("isloggedIn")));
    setuserid(JSON.parse(localStorage.getItem("userid")));
    setorder(JSON.parse(localStorage.getItem("order")));
  }, []);

  // console.log(userid);
  // console.log(user);

  useEffect(() => {
    fetch("https://decora-backend.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  useEffect(() => {
    if (userid) {
      console.log(userid);
      fetch(`https://decora-backend.onrender.com/user/${userid}`)
        .then((res) => res.json())
        .then((data) => {
          setcart(data.cart);
          setuser(data);
        });
    }
  }, [updated, userid]);
  // console.log(cart);

  // console.log(user);

  function handleis(is) {
    setis(!is);
  }
  // console.log(order);

  return (
    <div className=' overflow-x-clip'>
      {/* <img src={kanu} alt="" /> */}

      {cart && cart.length > 0 ? (
        <Navbar
          products={products}
          quantity={cart.length}
          setcurrent={setcurrent}
          isloggedIn={isloggedIn}
        />
      ) : (
        <Navbar
          products={products}
          setcurrent={setcurrent}
          isloggedIn={isloggedIn}
        />
      )}
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              products={products}
              cardinfo={cardinfo}
              setcardinfo={setcardinfo}
              handleis={handleis}
              is={is}
              setis={setis}
              add={add}
              setadd={setadd}
              user={userid}
              setpatched={setupdated}
              patched={updated}
              cart={cart}
            />
          }
        ></Route>
        <Route
          path='/products/:name/:id'
          element={
            <ProductPage
              products={products}
              cardinfo={cardinfo}
              setcardinfo={setcardinfo}
              handleis={handleis}
              is={is}
              setis={setis}
              add={add}
              setadd={setadd}
              user={userid}
              cart={cart}
              setupdated={setupdated}
              updated={updated}
            />
          }
        ></Route>
        <Route
          path='/product-category/:category/:sub_categ'
          element={
            <Store
              products={products}
              cardinfo={cardinfo}
              setcardinfo={setcardinfo}
              handleis={handleis}
              is={is}
              setis={setis}
              add={add}
              setadd={setadd}
              user={userid}
              cart={cart}
              setupdated={setupdated}
              updated={updated}
            />
          }
        ></Route>
        <Route path='/exercise' element={<Exercise />}></Route>
        <Route
          path='/cart'
          element={
            <Cart
              user={userid}
              cart={cart}
              setcart={setcart}
              setpatched={setupdated}
              patched={updated}
            />
          }
        ></Route>
        <Route
          path='/user'
          element={
            <User
              user={user}
              setupdated={setupdated}
              updated={updated}
              current={current}
              setcurrent={setcurrent}
            />
          }
        ></Route>
        <Route
          path='/signupOrLogin'
          element={
            <Signup
              user={user}
              setuser={setuser}
              setuserid={setuserid}
              isloggedIn={isloggedIn}
              setisLoggedIn={setisLoggedIn}
            />
          }
        ></Route>
        <Route
          path='/billingDetails'
          element={
            <Details
              cart={cart}
              id={userid}
              order={order}
              setorder={setorder}
            />
          }
        ></Route>
        <Route
          path='/checkout'
          element={
            <Checkout
              cart={cart}
              id={userid}
              order={order}
              setorder={setorder}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
