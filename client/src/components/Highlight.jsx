import React from 'react'

export default function Highlight() {
  return (
    <div className=' flex h-[100%] justify-between'>
        <div className=' flex flex-col pl-20 max-w-[20%]  '>

            <h1 className=' flex flex-col text-3xl font-semibold'>
                <span className=''>Handpicked</span> <span className='pl-2'>Highlights</span>
            </h1>

            <p className=' mt-5'>Elevate your home with our curated selection of top-selling categories. From stunning rugs to captivating wall art, cozy throws to elegant vases. </p>

            <button className=' mt-10 borde-solid border-[1px] py-2 mr-10 '>Explore More</button>
             

        </div>

        <div className=' bg-cyan-300 h-[90%] w-[80%]'>

        </div>
    </div>
  )
}
