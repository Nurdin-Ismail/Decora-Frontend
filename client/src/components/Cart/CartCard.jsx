import React, { useEffect, useState } from 'react'

export default function CartCard({item, key, index, cart, setcart, changed, setchanged, id}) {


    const [counter, setcounter] = useState(item.quantity[1])
    const [quantity, setquantity] = useState(item.quantity[0])
    const [del_product, setdel_product] = useState(false)

    useEffect(() => {

      console.log(`${id} has been clicked`)

      if(del_product){
        fetch(`http://127.0.0.1:5555/cart/${id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((res) => {

        window.location.reload()
        
        console.log(res)});

      }

      


    }, [del_product])
    

    useEffect(() => {
        if(counter && counter != item.quantity[1]){
        let newCart = cart.map((item) => {
            if(cart.indexOf(item) == index){
                item.quantity[1] = counter


                if(!changed.includes(id)){
                    setchanged([...changed, id])
                }
                    
                
                return item
            }else{
                return item
            }
        })



        setcart(newCart)
        }else if(counter && counter ==item.quantity[1]){

          let newCart = cart.map((item) => {
            if(cart.indexOf(item) == index){
                item.quantity[1] = counter


                if(changed.includes(id)){
                  let arr = changed.filter((item) => item != id)
                    setchanged(arr)
                }
                    
                
                return item
            }else{
                return item
            }
        })



        setcart(newCart)
          
        }
        

    }, [counter])


 

    function handlecounter(target, product){
        if(target === "−"){
          if( counter > 1 ){

            setcounter(counter - 1)

            
            
          }
        }
  
        if(target === '+' ){
          if(product){
            if(counter < quantity){
              setcounter(counter + 1)
           }
          }
  
          
  
         
           
          
          
        }
        
    }



  return (
    <div className=' h-[160px]  grid  grid-cols-[60%_20%_10%_10%] border-b-[1px]'>
                    <div className=' grid grid-cols-[30%_70%]'>
                        <div className='place-self-center'>
                            <img src={"http://127.0.0.1:5555" + item.images[1]} alt="" className='h-[130px] ' />
                            
                        </div> 
                        <div className='grid cart-product-title'>

                            <a href={`/products/${item.name.split(` `).join(`-`)}/${item.id}`}><h1 className=''>{item.name}</h1></a>
                            
                        </div> 


                        
                    </div>
                    <div className='grid w-[80px] place-self-center place-content-center grid-cols-[40%_20%_40%] outline-1 border-black border-[1px]'>
                        <button className='' onClick={() => handlecounter('−', item)}>−</button>
                        <h1 className='place-self-center font-semibold text-lg'>{counter}</h1>
                        <button className=' text-lg' onClick={() => handlecounter('+' , item)}>+</button>
                    </div>
                    <div className=' cart-product-price'>
                        {item.price ? <h1>Ksh {item.price.toLocaleString()}</h1> : null}
                    </div>

                    <div className='grid place-content-center'>
                      <button className='hover:text-red-500' onClick={() => setdel_product(true)}>X</button>
                    </div>

    </div>
  )
}
