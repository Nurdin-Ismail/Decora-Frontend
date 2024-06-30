import React, { useEffect, useState } from "react";

export default function AddOrUpdate({
  partofcart,
  quantity,
  product,
  user,
  setadd,
  counter,
  setcounter,
  setpatched,
  patched,
}) {
  const [updatecounter, setupdatecounter] = useState(quantity);

  //  console.log(quantity);
  // useEffect(() => {
  //   if(partofcart ===true && updatecounter === undefined){
  //       setupdatecounter(product.quantity[1])
  //   }

  // }, [updatecounter])

  useEffect(() => {
    setupdatecounter(quantity);
  }, [quantity]);

  //handle quantity
  function handlecounter(target) {
    console.log(target);
    if (partofcart) {
      if (target == "−") {
        if (updatecounter > 1) {
          setupdatecounter(updatecounter - 1);
        }
      }

      if (target == "+") {
        if (product) {
          if (updatecounter < product.quantity[0]) {
            setupdatecounter(updatecounter + 1);
          }
        }
      }
    } else {
      if (target == "−") {
        if (counter > 1) {
          setcounter(counter - 1);
        }
      }

      if (target == "+") {
        if (product) {
          if (counter < product.quantity) {
            setcounter(counter + 1);
          }
        }
      }
    }
  }

  //handle add to cart post request

  function handlePost(url) {
    console.log(url);
    if (product) {
      const url = "https://decora-backend.onrender.com/carts";

      const PostData = async (url) => {
        console.log("has been called");
        try {
          const promises = fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user,
              product_id: product.id,
              quantity: counter,
            }),
          })
            .then((response) => {
              if (response.ok) {
                setadd(true);
                // window.location.reload()
                setpatched(patched + 1);

                return response.json();
              }
            })
            .then((res) => {
              console.log(res);
            });
        } catch (error) {
          console.error(error);
        }
      };
      if (url) {
        PostData(url);
      }
    }
  }

  //handle update
  function handlePatch() {
    if (product) {
      if (updatecounter != quantity) {
        const url = `https://decora-backend.onrender.com/cart/${product.cart_id}`;

        const PatchData = async (url) => {
          console.log("has been called");
          try {
            const promises = fetch(url, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                quantity: updatecounter,
              }),
            })
              .then((response) => {
                if (response.ok) {
                  setadd(true);
                  // window.location.reload()
                  setpatched(patched + 1);
                  return response.json();
                }
              })
              .then((res) => console.log(res));
          } catch (error) {
            console.error(error);
          }
        };
        if (url) {
          PatchData(url);
        }
      }
    }
  }

  return (
    <div>
      <div className=' grid gap-[10px]'>
        <h1 className=' font-semibold text-lg'>Quantity</h1>
        <div className='grid h-[50px] w-[250px] grid-cols-[40%_20%_40%] outline-1 border-black border-[1px]'>
          <button className='minus ' onClick={() => handlecounter("−")}>
            −
          </button>
          <h1 className='place-self-center font-semibold text-xl'>
            {partofcart ? updatecounter : counter}
          </h1>
          <button className='add text-3xl' onClick={() => handlecounter("+")}>
            +
          </button>
        </div>
        {partofcart ? (
          <button
            className={
              updatecounter === quantity
                ? "grid h-[50px] w-[250px] bg-[#d5d7fd] text-[#514c57] place-content-center text-xl cursor-not-allowed"
                : "grid h-[50px] w-[250px] bg-[#554586] text-white place-content-center text-xl"
            }
            onClick={() => {
              handlePatch();
            }}
          >
            Update Cart
          </button>
        ) : (
          <button
            className='grid h-[50px] w-[250px] bg-[#554586] text-white place-content-center text-xl'
            onClick={() => {
              handlePost("https://decora-backend.onrender.com/carts");
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
