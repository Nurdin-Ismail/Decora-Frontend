import React, { useState, useEffect } from 'react'
import CartCard from './CartCard'


export default function ({user}) {

    const [display, setdisplay] = useState()
    const [cart, setcart] = useState()
    const [changed, setchanged] = useState([])
    console.log(changed)

    console.log(cart)

    useEffect(() => {
        setchanged(changed.filter((value, index) => changed.indexOf(value) === index))
        let endpoints = changed.map((item) => `http://127.0.0.1:5555/cart/${item}`)

        console.log(endpoints)


        
        


        const fetchAndPatchData = async(endpoints) => {
            try{


                const promises = endpoints.map((url) => {
                    console.log(Number(url.split('/').slice(-1)[0]))

                    let data = cart.filter((item) => {
                        console.log(Number(url.split('/').slice(-1)[0]), item.cart_id)
                        if(item.cart_id == Number(url.split('/').slice(-1)[0])){
                            return item
                        }
                    })
                    // console.log(data)


                    

                    let data2 = {
                        quantity : data[0].quantity[1]
                    }

                    // console.log(data2)

                    return fetch(url, {
                        method: 'PATCH',
                        headers: {
                                        'Content-Type': 'application/json'
                                                    // Add any additional headers if required
                                        },
                        
                        body: JSON.stringify(data2)
                    })
                    .then(response => response.json())
                    

                    

                    
                })

                const updatedData = await Promise.all(promises);
                console.log(updatedData)
                // await setchanged([])

                


            
        }catch (error) {
                                console.error(error);
                            }

                        }

                        fetchAndPatchData(endpoints)
        

    }, [cart])

    useEffect(() => {
        if(user){
            fetch(`http://127.0.0.1:5555/user/${48}`)
            .then(res => res.json()) 
            .then(data => {
                setdisplay(data.cart)
                setcart(data.cart)
            })

            
        }
        

    }, [])

    


    function handleCartProducts(){
        if(display){
            let listo = display.map((item) => {

                
                
                return <CartCard  item={item} key={item.cart_id} id={item.cart_id} index={display.indexOf(item)} cart={cart} setcart={setcart} setchanged={setchanged} changed={changed}/>
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

                <div>
                    
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
