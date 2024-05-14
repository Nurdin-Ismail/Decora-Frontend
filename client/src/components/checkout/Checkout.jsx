import React from 'react'

export default function Checkout() {
  return (
    <div className='grid h-[100vh]'>

        <div className=' grid place-self-center grid-cols-[70%_30%] w-[78%] h-[80%] '>

            <div className=' border-dotted border-r-[1px] border-r-black'></div>
            <div className=' grid px-5'>
                <div className='flex flex-col'>
                    <h1 className='font-sans text-[#733d88] text-xl font-semibold'>Your Order</h1>
                    <div className='grid grid-flow-row'>
                        <div className='flex justify-between h-[5vh] place-items-end pb-2 border-b-[1px] border-[#a5a2a2]'>
                            <h1>Product</h1>
                            <h1>Price</h1>
                        </div>
                        <div></div>

                    </div>
                    <div>l</div>

                </div>

            </div>
        </div>
      
    </div>
  )
}
