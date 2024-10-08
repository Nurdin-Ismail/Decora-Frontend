import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Modal({ setis, data, is, setadd, user, cart, patched, setpatched }) {
  const location = useLocation();
  const navigate = useNavigate();

  function handleCart() {
    if (cart) {
      let incart;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id == data[0].id) {
          incart = cart[i];

          console.log(incart);
        }
      }

      if (incart) {
        return (
          <button
            class='button-60'
            role='button'
            onClick={() => {
              window.location.replace("/cart");
            }}
          >
            View Cart
          </button>
        );
      } else {
        return (
          <button
            class='button-60'
            role='button'
            onClick={() => {
              handlePost("http://127.0.0.1:5000/carts");
              setis(false);
            }}
          >
            Add to Cart
          </button>
        );
      }
    }
  }

  function handlePost(url) {
    console.log(url);
    if (data) {
      const url = "http://127.0.0.1:5000/carts";

      const PostData = async (url) => {
        console.log("has been called");
        try {
          const promises = fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: user,
              product_id: data[0].id,
              quantity: 1,
            }),
          })
            .then((response) => {
              if (response.ok) {
                setadd(true);
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
        PostData(url);
      }
    }
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div
        id=''
        className=' modal fixed h-[100vh] top-[0vh] flex justify-center items-center  left-[0vw] w-[100vw] modalo '
        onClick={() => setis(false)}
      ></div>

      <div
        data-aos='zoom-in-up'
        id=''
        className=' modal fixed text-black  text-xl  flex h-[40vh] top-[30vh] left-[26vw] w-[44vw] bg-white '
      >
        <div className=' h-[100%]  w-[20vw]  border-zinc-300 border-r-[1px] '>
          <Carousel
            responsive={responsive}
            showDots={true}
            className='mx-3 my-5 pb-6 grid-flow-col'
          >
            {data[0].images.map((item) => {
              return (
                <img
                  key={data[0].images.indexOf(item)}
                  src={"http://127.0.0.1:5000" + item}
                  alt=''
                  className=' h-[35vh] mx-1 max-w-[20vw]'
                />
              );
            })}
          </Carousel>
        </div>
        <div className=' flex flex-col justify-around'>
          <div>
            <h1 className=' w-[18vw] mx-4 mt-6'>{data[0].category}</h1>

            <h1 className=' w-[23vw] mx-4 my-2  font-normal font-sans text-2xl'>
              {data[0].name}
            </h1>
            <h1 className=' w-[18vw] mx-4  price font-sans font-light'>
              {" "}
              Ksh {data[0].price}
            </h1>
          </div>

          <h1 className=' w-[18vw] mx-4  '>
            In-Stock: <span className='font-sans'>{data[0].quantity}</span>
          </h1>
          <h1 className=' w-[18vw] mx-4 mt-[-20px] '>
            tag: <span className='font-sans'>{data[0].tag}</span>
          </h1>

          <div className='flex justify-around w-[20vw]'>
            <a
              href={`/products/${data[0].name.split(` `).join(`-`)}/${
                data[0].id
              }`}
            >
              <button
                class='button-60'
                role='button'
                onClick={() => {
                  setis(!is);
                }}
              >
                View Full Details
              </button>
            </a>

            {handleCart()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
