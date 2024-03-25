import React,{useState} from 'react'
import wall from '../walldecor.jpg'
import home from '../home.jpg'
import serveware from '../serveware.jpg'
import lighting from '../lighting.jpg'
import bath from '../bath.jpg'
import kids from '../kidslight.jpg'
import forward from '../forward.png'

export default function High() {

  const [slide3, setslide3] = useState(0)
  


  const imagelist = [wall, home, serveware, lighting, bath, kids]
  let cards = imagelist.length

  function slidecls(index){
    if(slide3 == index){
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

      if(slide3 != cards - 1){
          setslide3(slide3 + 1)
      }else{
        setslide3(0)
      }


  }

  }
  
  
  
  return (
    <div className='  grid grid-flow-col  grid-rows-[0] grid-cols-[400px] h-[100%] justify-between  '>
        <div className=' grid grid-flow-row grid-rows-[40px_130px_100px_100px] '>

            <h1 className=' grid text-3xl font-semibold place-self-end mr-[73px]
            '>
                Handpicked Highlights
            </h1>

            <p className='grid place-self-end mr-14'>Elevate your home with our curated selection of top-selling categories. From stunning rugs to captivating wall art, cozy throws to elegant vases. </p>

            <button className=' mt-10 borde-solid border-[1px] py-2 mr-10 ' >Explore More</button>
             
        </div>
        

        <div className=' over   h-[100%]  overflow-x-hidden  '
        
        >


          <div className='besto  flex gap-[5px] '
          style={{transform: `translate(-${slide3 * 28}%)`}}
          >
            {imagelist ? imagelist.map((item) => {
            return <img key={imagelist.indexOf(item)} src={item} className={slidecls(imagelist.indexOf(item))} alt="" />
          }): <h1>Loading ...</h1>}
          </div>

         
          
          

        </div>
        <div className='over flex h-[655px] w-[98%] items-center justify-between '>
            <div className=' rounded-full bg-violet-50 h-[40px] w-[40px]  '  onClick={() => handleslides('left')}><img className=" cursor-pointer rotate-180 h-[25px] mx-[6px] my-[6px]  " src={forward} alt=""  />
</div> 
            <div className=' rounded-full bg-violet-50 h-[40px] w-[40px]  ' onClick={() => handleslides('right')}><img className=" cursor-pointer h-[25px] mx-[8px] my-[7.5px]" src={forward} alt=""  />
</div> 


          </div>
    </div>
  )
}
