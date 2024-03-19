import React, { useRef, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Card from './Card';
import Modal from './Modal';


import { action } from '@storybook/addon-actions';
import { Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import CartModal from './CartModal';




function ProductPage({products,setcardinfo, handleis, is, setis, cardinfo, add, setadd}) {
    const params = useParams();
    const { ref: myRef, inView: isvisible } = useInView();
    const kanu = useRef()
    const fixedo = useRef()
    const navigate = useNavigate()

    const [product, setproduct] = useState()

    const location = useLocation()

    const [counter, setcounter] = useState(1)
    const mainGroupId = 'Main';




    

  




    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 3 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };



    useEffect(() => {
        fetch(`http://127.0.0.1:5555/product/${params.id}`)
        .then(res => res.json()) 
        .then(data => setproduct(data))
    
      }, [])
     
    let similar_products  
   
        if(product && products){
       

          similar_products = products.filter(item => item.id != product.id && item.sub_category == product.sub_category || item.tag == product.tag )
        
         
          
        
        


      }

     



     let modaldata
    if(products){
        modaldata = products.filter((item) => item.id == cardinfo)
    }

   
      
    
    let elo = 1
    

    const test = elo == 2  ? `bg-blue-500 w-[full] h-[4px]` : 'bg-gray-200 w-[full] h-[4px]' 

    

    function handleref(ref){
      if(ref.current){
        if(isvisible){
          // console.log(ref.current.offsetHeight)
          if(fixedo){
            fixedo.current.setAttribute("style", `margin-top:${ref.current.offsetHeight -600}px`)
            
          }
           
          return `absolute z-1`

        }else{

          if(fixedo){
            fixedo.current.setAttribute("style", `margin-top:7px`)
            
          }

          

          return 'fixed'
        }
      }
    }

    function handlecounter(target){
      console.log(target)
      if(target == "−"){
        if(counter > 1 ){
          setcounter(counter-1)
        }
      }

      if(target == '+'){
        console.log(product.quantity)

       
          setcounter(counter + 1)
        
        
      }
      
    }

    const [next , setnext] = useState(null)

    let slides = product ?  product.images.length : null
    console.log(slides)

    let lomi
    
    if(slides){
      if(next && next == 'next'){
        lomi = `lomi flex translate-x-[${-1}00%]`

      }else if(next == 'previous'){
        lomi = `lomi flex translate-x-[${3}00%]`

      }
      
    }

    

    
  return (
    <div className='flex flex-col'>

      <h1 className=' product-title text-[17px]  mb-[-50px] mt-[110px] font-serif ml-[90px] text-[#707262]'><span>Shop</span> / <span>{product? product.category: null}</span> / <span>{product? product.sub_category: null}</span></h1>

      <div ref={kanu} className='  flex mb-[2vh] pt-20 ml-[15vw] '>
      <div className='flex flex-col' >
        {product ? product.images.map((item) => {
        return <img key={product.images.indexOf(item)} src={"http://127.0.0.1:5555" + item} alt="" loading="lazy" className='  mt-1 mb-2   h-[700px] w-[600px] ' />
        


      }) : null}

      </div>

      <div className=' flex flex-col justify-between '>

          <div ref={fixedo} className={`theFixed   w-[30vw] ${isvisible ? handleref(kanu) : handleref(kanu)}  left-[50vw]`}>

           {product ?
           
           <div>
             <div className='modal'>
              <h1 className='mx-4 font-semibold' >{product.category}</h1>
              <h1 className=' product-title mx-4 my-4  font-normal font-sans text-2xl'>{product.name}</h1>
              <h1 className='mx-4 my-10  price font-sans font-light'>Ksh {product.price}</h1>
            </div>

            <div className=' mt-10 mr-10 ml-4'>
              <p>{product.description}</p>
            </div>

            <div className='mt-12'>
              <div className=' bg-[#DDDDDD] rounded-lg w-[28vw] h-[2px]'></div>
              <div className=' my-5  mr-10 ml-4 flex  '>
                <div className=' h-[5vh] w-[6vw] mr-5 border-solid select-none border-[#DDDDDD] border-[2px] rounded-full px-4 flex justify-between items-center'>
                  <h1 className='  text-lg hover:cursor-pointer ' onClick={(e) => handlecounter(e.target.innerHTML)}>&minus;</h1>
                  <div className=' font-light text-xl'>{counter}</div>
                  <h1 className='text-xl font-light hover:cursor-pointer' onClick={(e) => handlecounter(e.target.innerHTML)}>&#43;</h1>

                </div>
                <div className=' kol flex items-center justify-center h-[5vh] w-[12vw]  border-[#fad8d8] border-[2px] rounded-full text-xl select-none hover:cursor-pointer hover:bg-[#BED1CF] hover:border-[#BED1CF]  hover:text-[#300f0f] '
                onClick={() => setadd(true)}
                >
                  Add To Cart
                </div>
                {/* <div className=' h-[5vh] w-[2.7vw] border-solid border-[#DDDDDD] border-[2px] rounded-full'></div> */}

              </div>
              <div className=' bg-[#DDDDDD] rounded-lg w-[28vw] h-[2px]'></div>
            </div>
           </div>

           
           

            
            
            : null}
             
          </div>
          

          

      </div>
      
      

    </div>

    <div className=' mx-11  h-[70vh] '>

      <div className='   '>

        <div className=' flex flex-row mb-[-220px]'>
          <div ref={myRef} className=' mt-[320px] h-[1vh] w-[1vw] bg-yellow-200   '></div>
          <div className=' flex h-[1vh]   title pt-8 flex-row items-center mb-10'>
            <h1 className='mr-5 ml-5 font-medium'>Similar Products</h1>
            <div className='bg-[#f5bfbf] mt-1 h-[0.2vh] w-[70vw] rounded-lg'></div>

          </div>
        </div>
        

        
          <Carousel
          responsive={responsive}
          infinite={true}
          

          className='mx-[10vw]'
          >
          {similar_products? similar_products.map((item) => {
              return (<Card 
                  key={item.id}
                  img= {'http://127.0.0.1:5555' + item.images[0] } 
                  name={item.name} 
                  price={item.price}
                  id={item.id}
                  setcardinfo={setcardinfo}
                  handleis={handleis}
                  onClickItem={action('click')}
                  is={is}
                  />)
          }) : <h1></h1>

          }
          
            
            
          </Carousel>
        


      </div>
        

        

    </div>

    {is? <Modal setis={setis} data={modaldata} is={is} setadd={setadd}/>: null}

    {add ? <CartModal setadd={setadd} count={counter} product={product}/>: null}

    <section className=' h-[500vh] w-full'>

      <div className='ml-[200px] w-[20vw]'>

      
        <div className='rori w-[100%] h-[396px] bg-sky-200  text-4xl   '>
          <div className='koni flex items-center justify-between'> 
            <h1 className='  select-none hover:cursor-pointer' onClick={() => { setnext('previous')}}>&#8592;</h1>
            <h1 className='  select-none hover:cursor-pointer'onClick={() => { setnext('next')}}>&#8594;</h1>
          </div>
          
          <div className={lomi}>
            {product ? product.images.map((item) => {
                return <img key={product.images.indexOf(item)} id={product.images.indexOf(item)} src={"http://127.0.0.1:5555" + item} alt="" loading="lazy" className='  mt-1 mb-2   min-h-[396px] w-[392px] ' onClick={(e) => console.log(e.target.id)}/>
        


            }) : null}

          </div>


        </div>

        <div className={test}>

          <div  className=' w-[50%] bg-black  dsIndicatorKnob_2yUtU translate-x-[100%]'></div>


        </div>
      </div>

      



    </section>
    
    </div>
    
  )
  
}

export default ProductPage;
