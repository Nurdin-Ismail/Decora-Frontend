import React from 'react'

function Filter({setfilter, filtero, seticon, x, filter}) {
  return (
    
    <div 
    data-aos="fade-right"
    data-aos-duration="300"
    data-aos-easing="ease-in" 
    className=' bg-slate-500 max-w-[40vw]  h-[20vh] w-[180vw] left-[10vw] bg-opacity-10' onClick={() => {
      setfilter(!filtero)
      seticon(filter)
    } }></div>
  )
}
export default Filter;

