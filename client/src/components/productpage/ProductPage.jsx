import React, { useRef, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Card from '../Card';
import Modal from '../Modal';
import AddOrUpdate from './AddOrUpdate';


import { action } from '@storybook/addon-actions';
import { Link, NavLink, useLocation, useNavigate} from 'react-router-dom';
import CartModal from '../CartModal';




function ProductPage({products,setcardinfo, handleis, is, setis, cardinfo, add, setadd, user, cart, setupdated, updated}) {
    const params = useParams();
    const [product, setproduct] = useState()
    const [slides, setslides] = useState(0)
    const [cards, setcards] = useState(0)
    const [counter, setcounter] = useState(1)

    
    const [thumbnail, setthumbnail] = useState(true)
    const [related, setrelated] = useState(0)
    const [changed, setchanged] = useState(false)
    
    const [incart, setincart] = useState()

    const [patched, setpatched] = useState(0)
    const [posted, setposted] = useState(0)

    

    useEffect(() => {

      setupdated(updated + 1)



    }, [patched])

   
 

  
  

    //checks if product is part of current user's cart

    

    useEffect(() => {
      if(cart && product){

        for(let i = 0; i < cart.length; i++){
          if(cart[i].id == product.id){
            setincart(cart[i])
          }
         }

        
      
      }
    })



    function partOfCart(){

      


      if(cart){
         let partOfCarto 

         for(let i = 0; i < cart.length; i++){
          if(cart[i].id == product.id){
            return true
          }
         }

        
        

        

        
      }
    }
    
    



    


    //fetch product
    useEffect(() => {
        fetch(`http://127.0.0.1:5555/product/${params.id}`)
        .then(res => res.json()) 
        .then(data => {
          setproduct(data)
          setcards(data.images.length)
        
        })
    
      }, [])
     
   

    //check for similar products
    let similar_products 
    let relatedcards 

        if(product && products){
       

          similar_products = products.filter(item => item.id != product.id && item.sub_category == product.sub_category || item.tag == product.tag )
          relatedcards = similar_products.length
         
          
        
        


      }

     



     let modaldata
    if(products){
        modaldata = products.filter((item) => item.id == cardinfo)
    }

    
    //switch slide after 3 secs
    setTimeout(() => {
      if(related != relatedcards - 4){
        setrelated(related+1)
      }else{
        setrelated(0)

      }
      
    }, 3000)


    function handleCart(){
      if(cart){

        let incart

        for(let i = 0; i < cart.length; i++){
          if(cart[i].id == product.id){

            incart = cart[i]

            


            
            
          }
         }

        if(incart){
          // console.log(incart.quantity[1]);
          return <AddOrUpdate product={incart} partofcart={true} quantity={incart.quantity[1]} user={user} setadd={setadd} counter={counter} setcounter={setcounter} setpatched={setpatched} patched={patched}/>
        }else{
          console.log('post');


          return <AddOrUpdate product={product}   user={user} setadd={setadd} counter={counter} setcounter={setcounter} setpatched={setpatched} patched={patched}/>


        }

        
      }

      //        return <AddOrUpdate product={incart} partofcart={true} quantity={incart.quantity[1]} user={user} setadd={setadd} counter={counter} setcounter={setcounter}/>


      
    }

   
      
    
    

    

    
  return (

    <div className=' '>
      <div className=' grid grid-cols-[255px_1340px_255px] mt-20'>
        {/* margins */}
        <div className=' grid h-[200px]'>

          <div className='grid mini-thumb '>

            <div className={thumbnail ? 'h-[60px] w-[50px] bg-neutral-200 grid grid-rows-[70%_30%] gap-[5px] px-[5px] py-[5px] border-[1px] border-black' : 'h-[60px] w-[50px] bg-neutral-200 grid grid-rows-[70%_30%] gap-[5px] px-[5px] py-[5px]'} onClick={() => setthumbnail(true)}>
              <div className=' bg-white '>

              </div>
              <div className=' grid grid-flow-col gap-[5px]'>
                <div className=' bg-white h-[10px]'></div>
                <div className=' bg-white h-[10px]'></div>
                <div className=' bg-white h-[10px]'></div>
              </div>
            </div>
            

          </div>

          <div className={thumbnail ? 'grid mini-scroll w-[50px]' : 'grid mini-scroll w-[50px] border-[1px] border-black'} onClick={() => setthumbnail(false)}>
            <div className='h-[60px] w-[40px] grid bg-neutral-200 grid-rows-[20%_50%_25%] gap-[5px] px-[5px] overflow-y-hidden'>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
              <div className="bg-white"></div>
            </div>
          </div>
          
        </div>
        {/* margins */}

        <div className='product-display grid grid-cols-[700px_700px]'>

         {thumbnail ? 
          <div className='display-thumbnail-carousel select-none grid grid-flow-row overflow-x-hidden gap-[20px]'>

          <div className='main-image h-[700px] min-w-[700px] grid grid-flow-col ease-in'
          style={{transform: `translate(-${slides * 100}%)`}}
          >

            {product ? product.images.map((pic) => {
              return <img key={product.images.indexOf(pic)} src={"http://127.0.0.1:5555" + pic} alt="" className=' h-[700px] min-w-[700px]' />

            }): null}


          </div>

          <div className='thumbnail grid grid-cols-5 place-items-center gap-[30px]'>
            {product ? product.images.map((pic) => {
              return <img key={product.images.indexOf(pic)} src={"http://127.0.0.1:5555" + pic} alt="" className=' h-[100px] min-w-[100px] cursor-pointer' onClick={() => setslides(product.images.indexOf(pic))} />

            }): null}


          </div>





        </div>



         :

         <div className='display-scroll select-none grid grid-flow-row overflow-x-hidden gap-[20px]'>

         <div className=' grid gap-[20px]'
         
         >

           {product ? product.images.map((pic) => {
             return <img key={product.images.indexOf(pic)} src={"http://127.0.0.1:5555" + pic} alt="" className=' h-[600px] min-w-[500px]' />

           }): null}


         </div>

        





       </div>


         
        }

          <div className={thumbnail ? ' display-product-info   mx-20' : ' display-product-info  ml-[-10px] mr-[184px]'}>
            {
              product ? 
              
              <div className='grid gap-[20px] sticky top-[76px]'>
                <div className=' grid  '>
                  <h1 className='  mt-[-14px] font-extrabold text-[40px] place-self-start opacity-[70%]'>{product.name}</h1>
            
                </div>

                <div>
                  <p>{product.description}</p>
                </div>


                <div>
                  <h1 className=' font-semibold text-3xl opacity-[60%]'>Ksh {product.price}.00</h1>
                </div>


                {/* {incart && incart.quantity[0]? 
                 
                 <AddOrUpdate product={incart} partofcart={partOfCart()} quantity={incart.quantity[1]} user={user} setadd={setadd} counter={counter} setcounter={setcounter}/>
                :
                
                <AddOrUpdate product={product} partofcart={false}  user={user} setadd={setadd} counter={counter} setcounter={setcounter}/>
                
                } */}

                {handleCart()}

                



              </div> 
            :
            null
            }
            
            

            
          </div>

        </div> 
        {/* margins */}
        <div></div>
        {/* margins */}

        


      </div>

      <div className=' similar-products mb-20 mt-40 overflow-x-hidden'
      
      >

        <h1 className='ml-[255px] mb-6 text-2xl font-semibold'>Related Products</h1>

        {
          similar_products ? 


          <div className=' grid grid-cols-[255px_1320px_255px] '>
            <div>
            </div>
            {/* margins */}

            <div className=' overflow-x-hidden'>
            <div className=' besto grid grid-flow-col gap-[20px]  '
          style={{transform: `translate(-${related * 25.35}%)`}}
          >

            {similar_products.map((item) => {
                return (
                  <div className=' '>
                    <Card 
                      key={item.id}
                      img= {'http://127.0.0.1:5555' + item.images[1] } 
                      name={item.name} 
                      price={item.price}
                      id={item.id}
                      setcardinfo={setcardinfo}
                      handleis={handleis}
                      onClickItem={action('click')}
                      is={is}
        
        
        
                    />
          </div>
                  )
        })}



          </div>

            </div>
            

          {/* margins */}

          <div>
          </div>
          </div> 


          :

          null

        }



      </div>


      {is? <Modal setis={setis} data={modaldata} is={is} setadd={setadd} cart={cart} user={user} setpatched={setpatched} patched={patched}/>: null}
        
      {add ? <CartModal setadd={setadd} count={counter} product={product}/>: null}



    </div>
   
  )
  
}

export default ProductPage;
 













 























// const { ref: myRef, inView: isvisible } = useInView();
    // const kanu = useRef()
    // const fixedo = useRef()
    // const navigate = useNavigate()

    // const [product, setproduct] = useState()

    // const location = useLocation()

    // const [counter, setcounter] = useState(1)
    // const mainGroupId = 'Main';








// let elo = 1
    

    // const test = elo == 2  ? `bg-blue-500 w-[full] h-[4px]` : 'bg-gray-200 w-[full] h-[4px]' 

    

    // function handleref(ref){
    //   if(ref.current){
    //     if(isvisible){
    //       // console.log(ref.current.offsetHeight)
    //       if(fixedo){
    //         fixedo.current.setAttribute("style", `margin-top:${ref.current.offsetHeight -600}px`)
            
    //       }
           
    //       return `absolute z-1`

    //     }else{

    //       if(fixedo){
    //         fixedo.current.setAttribute("style", `margin-top:7px`)
            
    //       }

          

    //       return 'fixed'
    //     }
    //   }
    // }

    // function handlecounter(target){
    //   console.log(target)
    //   if(target == "−"){
    //     if(counter > 1 ){
    //       setcounter(counter-1)
    //     }
    //   }

    //   if(target == '+'){
    //     console.log(product.quantity)

       
    //       setcounter(counter + 1)
        
        
    //   }
      
    // }

    // const [next , setnext] = useState(null)

    // let slides = product ?  product.images.length : null
    // console.log(slides)

    // let lomi
    
    // if(slides){
    //   if(next && next == 'next'){
    //     lomi = `lomi flex translate-x-[${-1}00%]`

    //   }else if(next == 'previous'){
    //     lomi = `lomi flex translate-x-[${3}00%]`

    //   }
      
    // }



















// <div className='flex flex-col'>

    //   <h1 className=' product-title text-[17px]  mb-[-50px] mt-[110px] font-serif ml-[90px] text-[#707262]'><span>Shop</span> / <span>{product? product.category: null}</span> / <span>{product? product.sub_category: null}</span></h1>

    //   <div ref={kanu} className='  flex mb-[2vh] pt-20 ml-[15vw] '>
    //   <div className='flex flex-col' >
    //     {product ? product.images.map((item) => {
    //     return <img key={product.images.indexOf(item)} src={"http://127.0.0.1:5555" + item} alt="" loading="lazy" className='  mt-1 mb-2   h-[700px] w-[600px] ' />
        


    //   }) : null}

    //   </div>

    //   <div className=' flex flex-col justify-between '>

    //       <div ref={fixedo} className={`theFixed   w-[30vw] ${isvisible ? handleref(kanu) : handleref(kanu)}  left-[50vw]`}>

    //        {product ?
           
    //        <div>
    //          <div className='modal'>
    //           <h1 className='mx-4 font-semibold' >{product.category}</h1>
    //           <h1 className=' product-title mx-4 my-4  font-normal font-sans text-2xl'>{product.name}</h1>
    //           <h1 className='mx-4 my-10  price font-sans font-light'>Ksh {product.price}</h1>
    //         </div>

    //         <div className=' mt-10 mr-10 ml-4'>
    //           <p>{product.description}</p>
    //         </div>

    //         <div className='mt-12'>
    //           <div className=' bg-[#DDDDDD] rounded-lg w-[28vw] h-[2px]'></div>
    //           <div className=' my-5  mr-10 ml-4 flex  '>
    //             <div className=' h-[5vh] w-[6vw] mr-5 border-solid select-none border-[#DDDDDD] border-[2px] rounded-full px-4 flex justify-between items-center'>
    //               <h1 className='  text-lg hover:cursor-pointer ' onClick={(e) => handlecounter(e.target.innerHTML)}>&minus;</h1>
    //               <div className=' font-light text-xl'>{counter}</div>
    //               <h1 className='text-xl font-light hover:cursor-pointer' onClick={(e) => handlecounter(e.target.innerHTML)}>&#43;</h1>

    //             </div>
    //             <div className=' kol flex items-center justify-center h-[5vh] w-[12vw]  border-[#fad8d8] border-[2px] rounded-full text-xl select-none hover:cursor-pointer hover:bg-[#BED1CF] hover:border-[#BED1CF]  hover:text-[#300f0f] '
    //             onClick={() => setadd(true)}
    //             >
    //               Add To Cart
    //             </div>
    //             {/* <div className=' h-[5vh] w-[2.7vw] border-solid border-[#DDDDDD] border-[2px] rounded-full'></div> */}

    //           </div>
    //           <div className=' bg-[#DDDDDD] rounded-lg w-[28vw] h-[2px]'></div>
    //         </div>
    //        </div>

           
           

            
            
    //         : null}
             
    //       </div>
          

          

    //   </div>
      
      

    // </div>

    // <div className=' mx-11  h-[70vh] '>

    //   <div className='   '>

    //     <div className=' flex flex-row mb-[-220px]'>
    //       <div ref={myRef} className=' mt-[320px] h-[1vh] w-[1vw] bg-yellow-200   '></div>
    //       <div className=' flex h-[1vh]   title pt-8 flex-row items-center mb-10'>
    //         <h1 className='mr-5 ml-5 font-medium'>Similar Products</h1>
    //         <div className='bg-[#f5bfbf] mt-1 h-[0.2vh] w-[70vw] rounded-lg'></div>

    //       </div>
    //     </div>
        

        
    //       <Carousel
    //       responsive={responsive}
    //       infinite={true}
          

    //       className='mx-[10vw]'
    //       >
    //       {similar_products? similar_products.map((item) => {
    //           return (<Card 
    //               key={item.id}
    //               img= {'http://127.0.0.1:5555' + item.images[0] } 
    //               name={item.name} 
    //               price={item.price}
    //               id={item.id}
    //               setcardinfo={setcardinfo}
    //               handleis={handleis}
    //               onClickItem={action('click')}
    //               is={is}
    //               />)
    //       }) : <h1></h1>

    //       }
          
            
            
    //       </Carousel>
        


    //   </div>
        

        

    // </div>

    // {is? <Modal setis={setis} data={modaldata} is={is} setadd={setadd}/>: null}

    // {add ? <CartModal setadd={setadd} count={counter} product={product}/>: null}

   
    
    // </div>
    