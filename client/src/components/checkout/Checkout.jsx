import React, { useState } from "react";
import mpesa from "../../mpesa.png";
import cardpayment from "../../cardpayment.png";

export default function Checkout({ cart }) {
  const [Mpesa, setmpesa] = useState(true);
  const [card, setcard] = useState();

  function handleTotal() {
    if (cart) {
      let total = cart.map((item) => {
        return item.quantity[1] * item.price;
      });
      // console.log(total)

      let sum = 0;

      total.forEach(function (number) {
        sum += number;
      });

      // console.log(sum);

      return `Ksh ${sum.toLocaleString()}`;
    }
  }

  return (
    <div className="grid ">
      <form className="grid place-self-center grid-cols-[70%_30%] w-[78%] my-[20vh]">
        <div className=" border-dotted border-r-[1px] border-r-black bg-emerald-100 px-10">
          <h1>Billing Details</h1>
          <div className="grid pt-20 gap-10 ">
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[4vh] border-[1px] border-[#706e6e] "
              />
            </div>
          </div>
        </div>

        <div className=" grid px-5">
          <div className="flex flex-col">
            <h1 className="font-sans text-[#733d88] text-xl font-semibold">
              Your Order
            </h1>
            <div className="grid grid-flow-row">
              <div className="flex justify-between h-[5vh] place-items-center pb-2 border-b-[1px] border-[#a5a2a2]">
                <h1>Product</h1>
                <h1>Price</h1>
              </div>
              {cart
                ? cart.map((item) => {
                    return (
                      <div className="grid grid-flow-col h-[8vh] border-b-[1px] border-[#a5a2a2]">
                        <h1 className="  grid center-start pr-24">
                          {item.name} X{item.quantity[1]}
                        </h1>
                        <h1 className="grid center-end">
                          KSH{item.price * item.quantity[1]}
                        </h1>
                      </div>
                    );
                  })
                : null}

              <div className="flex justify-between h-[6vh]  place-items-end pb-3 border-b-[1px] border-[#a5a2a2]">
                <h1>Subtotal</h1>
                <h1>{handleTotal()}</h1>
              </div>

              <div className="flex justify-between h-[6vh]  place-items-end pb-3 border-b-[1px] border-[#a5a2a2]">
                <h1 className="display text-lg font-extralight">Total</h1>
                <h1>{handleTotal()}</h1>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div>
                <div className=" flex gap-3">
                  <div class="checkbox-wrapper-12">
                    <div class="cbx">
                      <input
                        id="cbx-12"
                        type="checkbox"
                        checked={Mpesa}
                        onChange={(e) => {
                          setcard(Mpesa);

                          setmpesa(!Mpesa);
                        }}
                      />
                      <label for="cbx-12"></label>
                      <svg
                        width="15"
                        height="14"
                        viewbox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="cbx-12">MPESA PAYEMENT</label>
                </div>
                <img src={mpesa} alt="" className="ml-8" />
              </div>

              <div>
                <div className=" flex gap-3">
                  <div class="checkbox-wrapper-12">
                    <div class="cbx">
                      <input
                        id="cbx-12"
                        type="checkbox"
                        checked={card}
                        onChange={(e) => {
                          setmpesa(!Mpesa);
                          setcard(!card);
                        }}
                      />
                      <label for="cbx-12"></label>
                      <svg
                        width="15"
                        height="14"
                        viewbox="0 0 15 14"
                        fill="none"
                      >
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="cbx-12">CARD PAYEMENT</label>
                </div>
                <img src={cardpayment} alt="" className="ml-8" />
              </div>

              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>

              <button className="button-23 my-10 ml-[10%] hover:bg-[#341952] hover:text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
