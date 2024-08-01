import React, { useState } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import mpesa from "../../mpesa.png";
import cardpayment from "../../cardpayment.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Details({ cart, id, order, setorder }) {
  const [Mpesa, setmpesa] = useState(true);
  const [progress, setProgress] = React.useState(70);

  const [card, setcard] = useState();
  const [age, setAge] = useState("");

  const [name, setname] = useState();
  const [number, setnumber] = useState();
  const [email, setemail] = useState();
  const [region, setregion] = useState();
  const [street, setstreet] = useState();
  const [building, setbuilding] = useState();
  const [floororapartment, setfloororapartment] = useState();
  const [notes, setnotes] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleTotal() {
    if (cart) {
      let total = cart.map((item) => {
        return item.quantity * item.product.price;
      });
      // console.log(total)

      let sum = 0;

      total.forEach(function (number) {
        sum += number;
      });

      // console.log(sum);

      return `KSH ${sum.toLocaleString()}`;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, notes, number, email, region, street);
    let inputs = [
      { fullname: name },
      { contacts: number },
      { email: email },
      { region: region },
      { street: street },
      { building: building },
      { floororapartment: floororapartment },
      { county: age },
      { notes: notes },
    ];
    let changed = inputs.map((input) => {
      if (Object.values(input)[0] == name) {
        return input;
      } else if (Object.values(input)[0] == email) {
        return input;
      } else if (Object.values(input)[0] == region) {
        return input;
      } else if (Object.values(input)[0] == street) {
        return input;
      } else if (Object.values(input)[0] == building) {
        return input;
      } else if (Object.values(input)[0] == floororapartment) {
        return input;
      } else if (Object.values(input)[0] == age) {
        return input;
      } else if (Object.values(input)[0] == number) {
        return input;
      } else if (Object.values(input)[0] == notes) {
        return input;
      }
    });

    let changed2 = changed.filter((item) => {
      if (item != undefined) {
        if (Object.values(item)[0] != undefined) {
          if (Object.values(item)[0] != "" && Object.values(item)[0] != " ") {
            return item;
          }
        }
      }
    });
    let obj = {};

    changed2.map((item) => {
      Object.assign(obj, item);
    });

    console.log(changed, obj);
    let cart2 = [...cart];

    // let products = cart2.map((item) => {
    //   delete item.cart_id
    //   let quantity= item['quantity'][1]
    //   item['quantity'] = quantity
    //   return item
    // })
    let products = cart2;
    console.log(products);

    let orderOverview = JSON.stringify({
      billingDetails: obj,
      products: products,
    });

    if (order == "" && undefined) {
      if (orderOverview) {
        fetch("http://127.0.0.1:5000/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: id,
            overview: orderOverview,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((res) => {
            if (res) {
              localStorage.setItem("order", JSON.stringify(res));
            }
          })
          .catch((e) => console.log(e));
      }
    } else {
      window.location.replace("/checkout");
      console.log("kanu");
    }

    // console.log(changed);
  }

  return (
    <div className='grid '>
      <form
        className='grid place-self-center grid-cols-[70%_30%] w-[78%] my-[20vh]'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className=' border-dotted border-r-[1px] border-r-black '>
          <h1 className='font-[200] text-3xl'>Billing Details</h1>
          <div className='grid pt-20 gap-10 mr-5'>
            <div className='grid grid-cols-2 gap-5 '>
              <div className='flex flex-col'>
                <label htmlFor='name'>Full Name</label>
                <input
                  type='text'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='name'
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='tel'>Number</label>
                <input
                  type='tel'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='tel'
                  required
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='email'
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div className=' pt-[20px]'>
                <FormControl fullWidth>
                  <InputLabel
                    id='demo-simple-select-label'
                    sx={{ axHeight: 40 }}
                  >
                    County/City
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={age}
                    label='County/City'
                    onChange={handleChange}
                    sx={{
                      maxHeight: 40,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "purple",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='region'>Region</label>
                <input
                  type='text'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='region'
                  required
                  value={region}
                  onChange={(e) => setregion(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='street'>Street</label>
                <input
                  type='tel'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='street'
                  value={street}
                  onChange={(e) => setstreet(e.target.value)}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='building'>Building Name</label>
                <input
                  type='text'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='building'
                  value={building}
                  onChange={(e) => setbuilding(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='floor'>Apartment No.</label>
                <input
                  type='text'
                  className='h-[4vh] border-[#d3d3d3] border-[1px] focus:outline-dotted focus:border-none placeholder:text-sm pl-2 placeholder:italic placeholder:font-serif'
                  id='floor'
                  value={floororapartment}
                  onChange={(e) => setfloororapartment(e.target.value)}
                />
              </div>
            </div>
            <div className='grid '>
              <textarea
                name=''
                id=''
                value={notes}
                onChange={(e) => setnotes(e.target.value)}
                className='h-[10vh] border-[#d3d3d3] border-[1px] focus:outline-dotted  focus:border-none placeholder:text-sm pl-2 pt-3 placeholder:italic placeholder:font-serif'
                placeholder='Additional notes'
              ></textarea>
            </div>
          </div>
        </div>

        <div className=' grid px-5'>
          <div className='flex flex-col'>
            <h1 className='font-sans text-[#733d88] text-xl font-semibold'>
              Your Order
            </h1>
            <div className='grid grid-flow-row'>
              <div className='flex justify-between h-[5vh] place-items-center pb-2 border-b-[1px] border-[#a5a2a2]'>
                <h1>Product</h1>
                <h1>Price</h1>
              </div>
              {cart
                ? cart.map((item) => {
                    return (
                      <div className='grid grid-flow-col h-[8vh] border-b-[1px] border-[#a5a2a2]'>
                        <h1 className='  grid center-start pr-24'>
                          {item.product.name} X {item.quantity}
                        </h1>
                        <h1 className='grid center-end'>
                          Ksh {item.product.price * item.quantity}
                        </h1>
                      </div>
                    );
                  })
                : null}

              <div className='flex justify-between h-[6vh]  place-items-end pb-3 border-b-[1px] border-[#a5a2a2]'>
                <h1>Subtotal</h1>
                <h1>{handleTotal()}</h1>
              </div>

              <div className='flex justify-between h-[6vh]  place-items-end pb-3 border-b-[1px] border-[#a5a2a2]'>
                <h1 className='display text-lg font-extralight'>Total</h1>
                <h1>{handleTotal()}</h1>
              </div>
            </div>
            <div className='flex flex-col mt-10 '>
              <div className='ml-10'>
                <div className='grid'>
                  <h1 className='grid place-self-center font-bold'>
                    MPESA PAYEMENT
                  </h1>
                  <img src={mpesa} alt='' className='grid place-self-center' />
                </div>

                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>

              <button className='button-23 my-10 ml-[10%] hover:bg-[#341952] hover:text-white'>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
