import React from 'react'
import decor from '../decor.jpeg'
import kids from '../kids.jpg'
import bath from '../bath.jpg'
import kitchen from '../kitchen.webp'

function Categories() {
  return (

    <div>
        <div className='title mt-8 flex flex-row items-center mb-10'>
        <h1 className='  mr-5 ml-5 font-medium'> Categories</h1>

        <div className='bg-[#f5bfbf] mt-1 h-[0.2vh] w-[73vw] rounded-lg'></div>

      </div>

      <div className='categ flex  h-[70vh] w-[70vw] ml-[5vw] overflow-auto '>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" 
     className="decor  ml-40 mt-10 flex items-center justify-center    "
     >
        <h1 className=' text-white text-4xl font-semibold '>DÉCOR & ARTS</h1>

     </div>
        <div className=' bg-white h-[60vh] w-[35vw] mt-10 ml-10 flex flex-col'>
            <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            
            className='kitchen flex items-center justify-center  '>
                <h1 className=' text-white text-4xl font-semibold '>Kitchen & Dining</h1>


            </div>
                

            <div className='flex mt-5 justify-between overflow-clip'>
                <div data-aos="fade-right"
                    data-aos-duration="300"
                    data-aos-easing="ease-in" 
                    className='kids flex items-center justify-center '>
                        <h1 className=' text-white text-4xl font-semibold '>Kids Decor</h1>
                        


                    </div>
                <div 
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-easing="ease-in" 
                className='bath flex items-center justify-center '>
                    <h1 className=' text-white text-3xl font-semibold '>Bathroom     &       Laundry</h1>



                </div>
            </div>

        </div>


    </div>


    </div>
    
  )
}

export default Categories;

