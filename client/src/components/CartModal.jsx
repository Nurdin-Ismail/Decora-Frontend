import React from 'react'
import itemadded from '../itemadded.png'

 function CartModal({setadd, count, product}) {

  setTimeout(() => {
    setadd(false)
    
  }, 5000);
  
  return (
    <div className='  '>
      <div className=' fixed h-[100vh] top-[0vh] flex justify-center items-center  left-[0vw] w-[100vw] '
      onClick={() => setadd(false)}
      >

      </div>

      <div 
      data-aos="zoom-in-up" 
      className=' slide-out-blurred-right cart-modal  shadow-black fixed text-black  text-xl    top-[10vh] left-[81vw] w-[18vw] bg-white '>
        <div className=' h-[7.27vh] mb-5 w-full flex justify-center items-center mt-2 '>
          <img src={itemadded} alt="" />
          <h1 className='product-title text-xl mr-5'>{count ? count > 1 ? `${count} Items added to your cart`: `1 Item added to your cart` : `1 Item added to your cart`}</h1>

        </div>
        <div className='  mx-2  flex justify-center items-center'>
          <div className='image mr-4'>
            <img src={'http://127.0.0.1:5555' + product.images[0]} alt="" className='min-h-[7vh] max-h-[7vh] min-w-[4vw] max-w-[4vw]'/>
          </div>
          <div className='info'>
            <h1 className=' product-title text-[18px]'>{product.name}</h1>
            <h1 className='price font-sans font-light text-base'>ksh{product.price}</h1>
          </div>
          
        </div>
        <div className='  flex flex-col items-center justify-center'>

          <div className='bg-[#DDDDDD] px-[8vw] rounded-lg my-5  h-[2px]'>

          </div>
          <div 
          data-aos="fade-down"
          className=' flex  items-center justify-center kol mb-8 h-[5vh] w-[12vw]  border-[#fad8d8] border-[2px] rounded-full text-xl select-none hover:cursor-pointer hover:bg-[#BED1CF] hover:border-[#BED1CF]  hover:text-[#300f0f]' >
            View Cart
          </div>


        </div>

      </div>
        
    </div>
  )
}
export default CartModal;