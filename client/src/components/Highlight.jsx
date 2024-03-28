import React,{useState} from 'react'
import wall from '../walldecor.jpg'
import home from '../home.jpg'
import serveware from '../serveware.jpg'
import lighting from '../lighting.jpg'
import bath from '../bath.jpg'
import kids from '../kidslight.jpg'
import forward from '../forward.png'
import arrow from '../arrow1.png'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Highlight() {

  const [slide3, setslide3] = useState(0)
  


  const imagelist = [wall, home, serveware, lighting, bath, kids, wall, home]
  let cards = imagelist.length

  function slidecls(index){
    if(slide3 == index && index != cards- 2){
      return ' highlight h-[550px] mx-5 max-w-[400px] min-w-[450px]'
    }else{
      return 'highlight h-[400px] mx-5 max-w-[300px] min-w-[300px]'
    }

  }

  function handleslides(direction){
    if(direction == 'left'){

      if(slide3 != 0){
          setslide3(slide3-1)
      }
      
          
      
       
      
  }else if(direction == 'right'){

      if(slide3 != cards - 3){
          setslide3(slide3 + 1)
      }else{
        setslide3(0)
      }


  }

  }

  function handlecateg(categ, link_or_title){

    if(link_or_title == 'title')
    {
      if(categ == 0){
      return 'Wall Decor'

    }else if(categ == 1){
      return 'Home Accessories'
      
    }else if(categ == 2){
      return 'Serveware'
      
    }else if(categ == 3){
      return 'Lamps & Lighting'
      
    }else if(categ == 4){
      return 'Bathroom Accessories'
      
    }else if(categ == 5){
      return "Kid's Lighting"
      
    }
  } else if(link_or_title == 'link'){
    if(categ == 0){
      return '/Décor & Arts/Wall Decor'

    }else if(categ == 1){
      return '/Décor & Arts/Home Accessories'
      
    }else if(categ == 2){
      return '/Kitchen & Dining/ServeWare & Dinnerware'
      
    }else if(categ == 3){
      return '/Décor & Arts/Lamps & Lighting'
      
    }else if(categ == 4){
      return '/Bathroom & Laundry/Bathroom Accessories'
      
    }else if(categ == 5){
      return "/Kids Decor/Decor & Lighting"
      
    }

  }
    }
    
  
  
  
  return (
    <div className=' grid grid-flow-col  grid-rows-[0] grid-cols-[400px] h-[100%] justify-between  '>
        <div className=' grid grid-flow-row grid-rows-[40px_130px_100px_100px] '>

            <h1 className=' grid text-3xl font-semibold place-self-end mr-[73px]
            '>
                Handpicked Highlights
            </h1>

            <p className='grid place-self-end mr-14'>Elevate your home with our curated selection of top-selling categories. From stunning rugs to captivating wall art, cozy throws to elegant vases. </p>

            <button className=' mt-10 borde-solid border-[1px] py-2 mr-10 w-[40%] hover:bg-[#47367cec] hover:text-white ' >Explore More</button>
            
             
        </div>

          <div className=' arrow1 rounded-full bg-violet-200 h-[40px] w-[40px]  '  onClick={() => handleslides('left')}><img className=" cursor-pointer rotate-180 h-[25px] mx-[6px] my-[6px]  " src={forward} alt=""  /></div> 
          <div className=' arrow2 rounded-full bg-violet-200 h-[40px] w-[40px]  ' onClick={() => handleslides('right')}><img className=" cursor-pointer h-[25px] mx-[8px] my-[7.5px]" src={forward} alt=""  /></div>
        

        <div className=' over  overflow-x-hidden grid'
        
        >

         


          <div className='besto grid gap-[5px] grid-flow-col '
          style={{transform: `translate(-${slide3 * 11.7}%)`}}
          >
            {imagelist ? imagelist.map((item) => {

            return  <div className=' jojo grid cursor:pointer '>
            {slide3 == imagelist.indexOf(item)? 
            
                  <div 
                    data-aos="fade-down"
                    data-aos-duration="2000"
                    // key={imagelist.indexOf(item)}
                    className=' ka grid grid-cols-1  mt-[400px] ml-10 w-[290px]   cursor-pointer h-[60px]' onClick={() => console.log('clicked')}
                  >
                      <div className=' grid  h-[60px] w-[250px] ki z-5 cursor-pointer '>
                          <h1 className=' grid text-2xl font-serif font-semibold place-content-center'>{handlecateg(imagelist.indexOf(item), 'title')}</h1>
                      </div>
                      <div
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine" 
                      className=' grid place-self-end  h-[40px] w-[40px] bg-[#47367cec] z-4 small'
                      >
                        <a href={'/product-category' + handlecateg(imagelist.indexOf(item), 'link') }><img src={arrow} alt="" className=' invert'/></a>
                        
                      </div>

      

                  </div>
              : null}
            <img key={imagelist.indexOf(item)} src={item} className={slidecls(imagelist.indexOf(item))} alt="" />
          
          </div>
          }): <h1>Loading ...</h1>}
          </div>

         
          
          

        </div>
       
    </div>
  )
}
