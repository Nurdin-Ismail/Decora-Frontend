import React from "react";

export default function Card({
  img,
  name,
  price,
  id,
  setcardinfo,
  handleis,
  is,
  type,
}) {
  return (
    <div
      className={type && type == 'large' ? ' flex flex-col justify-between mb-5  w-[388px] min-h-[452px]  ' : ' flex flex-col justify-between  mb-5  w-[17vw] h-[40vh] '}
      onClick={() => {
        setcardinfo(id)
        handleis(is)


      }}
    >
      <img src={img} alt='' className='min-h-[317px]  min-w-[317px]' />
      <h1 className='product--title text-md'>{name}</h1>
      <p className='pro--price text-gray-500 text-md '>Ksh {price}</p>
    </div>
  );
}
