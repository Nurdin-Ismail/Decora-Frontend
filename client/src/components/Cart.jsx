import React, { useState, useEffect } from 'react'

export default function ({user}) {

    const [display, setdisplay] = useState()
    const [counter, setcounter] = useState(1)


    useEffect(() => {
        if(user){
            fetch(`http://127.0.0.1:5555/user/${48}`)
            .then(res => res.json()) 
            .then(data => setdisplay(data.cart))
        }
        

    }, [])

    function handlecounter(target, product){
        console.log(target)
        if(target == "−"){
          if( counter > 1 ){

            
            
          }
        }
  
        if(target == '+' ){
          if(product){
            if(counter < product.quantity){
              setcounter(counter + 1)
           }
          }
  
          // if(counter < product.quantity){
          //    setcounter(counter + 1)
          // }
          // console.log(product.quantity)
  
         
           
          
          
        }
        
      }


    function handleCartProducts(){
        if(display){
            let listo = display.map((item) => {

                
                
                return <div className=' h-[160px]  grid  grid-cols-[60%_20%_20%] border-b-[1px]'>
                    <div className=' grid grid-cols-[30%_70%]'>
                        <div className='place-self-center'>
                            <img src={"http://127.0.0.1:5555" + item.images[1]} alt="" className='h-[130px] ' />
                            
                        </div> 
                        <div className='grid cart-product-title'>

                            <h1 className=''>{item.name}</h1>
                            
                        </div> 


                        
                    </div>
                    <div className='grid w-[80px] place-self-center place-content-center grid-cols-[40%_20%_40%] outline-1 border-black border-[1px]'>
                        <button className='' onClick={() => handlecounter('−', item)}>−</button>
                        <h1 className='place-self-center font-semibold text-lg'>{item.quantity[0]}</h1>
                        <button className=' text-lg' onClick={() => handlecounter('+' , item)}>+</button>
                    </div>
                    <div className=' cart-product-price'>
                        {item.price ? <h1>Ksh {item.price.toLocaleString()}</h1> : null}
                    </div>

                </div>
            })

            return listo
        }
    }


  return (
    <div className='h-[100%]'>
        <div className='h-[15vh]'></div>
        <div className='grid grid-flow-col h-[100vh] gap-10'>
            <div className='w-[200px] '></div>
            <div className='w-[930px] '>
                <div className=' cart-header h-[50px] grid grid-cols-[60%_20%_20%] border-b-[1px]'>
                    <div className='one'>Product</div>
                    <div className='two'>Quantity</div>
                    <div className='three'> Price</div>


                </div>
                <div className='grid grid-flow-row gap-2'>
                    {handleCartProducts()}
                    
                </div>
            </div>
            <div className=' w-[400px] '>
                <div className='bg-white h-[20vh] grid sticky top-[4%]'>
                    <h1 className='text-[#36196b] text-xl'>Cart Totals</h1>
                    <h1>Subtotal</h1>

                    <div className='border-[0.5px] border-grey-100 mx-2 h-[0.2px]'></div>

                    <h1>Total</h1>

                    <button className=' bg-[#2f284d] text-white rounded-xl '>Proceed to checkout</button>



                </div>
            </div>
            <div className='w-[250px]  '></div>


        </div>
    </div>
  )
}
