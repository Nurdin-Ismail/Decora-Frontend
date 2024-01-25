import React from 'react'

export default function Card({img, name, price, id, setcardinfo, handleis, is}) {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" data-aos-easing="ease" className=' flex flex-col justify-between mx-[3.8vw] mb-1  w-[15vw] h-[38vh]'
    onClick={() => {
      setcardinfo(id)
      handleis(is)
      
      
    }}
    >
        <img src={img} alt="" className='max-h-[28vh] w-[15vw]'/>
        <h1 className='product--title'>{name}</h1>
        <p className='pro--price text-gray-500 '>Ksh {price}</p>
    </div>
  )
}
 