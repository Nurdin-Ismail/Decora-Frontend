import React,{useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link, NavLink, useLocation, useNavigate} from 'react-router-dom';





function Modal({setis, data, is, setadd}) {

  const location = useLocation()
  const navigate = useNavigate()


  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // const images = data[0].images

  // console.log(images)

  console.log(data)
  return (
    <div>
      <div
      
      
      id="" className=" modal fixed h-[100vh] top-[0vh] flex justify-center items-center  left-[0vw] w-[100vw] modalo " onClick={() => setis(false)}>
            
      </div>

        <div 
        data-aos="zoom-in-up" 
        id="" className=" modal fixed text-black  text-xl  flex h-[40vh] top-[30vh] left-[26vw] w-[44vw] bg-white "  >
              <div className=' h-[40vh]  w-[20vw]  border-zinc-300 border-r-[1px] '>

                <Carousel responsive={responsive} showDots={true}  className=''>

                  {data[0].images.map((item) => {
                    
                    
                    return <img key={data[0].images.indexOf(item)} src={"http://127.0.0.1:5555" + item} alt=""  className=' mt-11 mb-7 mx-9'/>
                    
                    })}

                    





                </Carousel>



                




              </div>
              <div className=' flex flex-col justify-around'>

                <div>
                  <h1 className=' w-[18vw] mx-4 mt-6'>{data[0].category}</h1>
                
                  <h1 className=' w-[23vw] mx-4 my-2  font-normal font-sans text-2xl'>{data[0].name}</h1>
                  <h1 className=' w-[18vw] mx-4  price font-sans font-light'> Ksh {data[0].price}</h1>
                
                </div>
                

                <h1 className=' w-[18vw] mx-4  '>In-Stock: <span className='font-sans'>{data[0].quantity}</span></h1>
                <h1 className=' w-[18vw] mx-4 mt-[-20px] '>tag: <span className='font-sans'>{data[0].tag}</span></h1>

                <div className='flex justify-around w-[20vw]'>
                     <a href={`/products/${data[0].name.split(` `).join(`-`)}/${data[0].id}`}><button class="button-60"  role="button" onClick={() => {setis(!is)
                   }}>View Full Details</button></a>
                     
                    <button class="button-60" role="button"
                    onClick={() => {
                      setis(false)
                      setadd(true)
                    }}
                    >Add to Cart</button>

                </div>



                

              </div>
                
            </div>
    
    </div>
  )
}
export default Modal;