import React from 'react'

export default function Card({img, name, price, id, setcardinfo, handleis, is, type}) {
  return (

    // data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" data-aos-easing="ease"
    <div  className={type && type == 'large' ? ' flex flex-col justify-between  mb-1  w-[392px] min-h-[452px]  ' : ' flex flex-col justify-between  mb-1  w-[17vw] h-[40vh] '}
    onClick={() => {
      setcardinfo(id)
      handleis(is)
      
      
    }}
    >
        <img src={img} alt="" className='min-h-[80%] max-h-[80%] min-w-[15vw]'/>
        <h1 className='product--title text-md'>{name}</h1>
        <p className='pro--price text-gray-500 text-md '>Ksh {price}</p>
    </div>
  )
}
 