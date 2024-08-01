import React from "react";
import itemadded from "../itemadded.png";

function CartModal({ setadd, count, product }) {
  setTimeout(() => {
    setadd(false);
  }, 5000);
  // slide-out-blurred-right
  console.log(product);

  return (
    <div className=' modal '>
      <div
        className='  fixed h-[100vh] top-[0vh] flex justify-center items-center  left-[0vw] w-[100vw] '
        onClick={() => setadd(false)}
      ></div>

      <div
        data-aos='zoom-in-up'
        className=' modal slide-out-blurred-right cart-modal  shadow-black fixed text-black  text-xl    top-[10vh] left-[81vw] w-[18vw] bg-white rounded-lg '
      >
        <div className=' h-[7.27vh] mb-5 w-full flex justify-center items-center mt-2 '>
          <img src={itemadded} alt='' />
          <h1 className='product-title text-xl mr-5'>
            {count
              ? count > 1
                ? `${count} Items added to your cart`
                : `1 Item added to your cart`
              : `1 Item added to your cart`}
          </h1>
        </div>
        <div className='  mx-2  flex justify-center items-center'>
          <div className='image mr-4'>
            <img
              src={"http://127.0.0.1:5000" + product.images[0]}
              alt=''
              className='min-h-[7vh] max-h-[7vh] min-w-[4vw] max-w-[4vw]'
            />
          </div>
          <div className='info'>
            <h1 className=' product-title text-[18px]'>{product.name}</h1>
            <h1 className='price font-sans font-light text-base'>
              ksh{product.price}
            </h1>
          </div>
        </div>
        <div className='  grid items-center justify-center'>
          <div className='bg-[#DDDDDD] px-[8vw] rounded-lg my-5  h-[2px]'></div>
          <div
            className=' flex  items-center justify-center button-23 mb-5'
            onClick={() => window.location.replace("/cart")}
          >
            View Cart
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartModal;
