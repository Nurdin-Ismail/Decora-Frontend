import React, { useState, useEffect } from 'react'
import CartCard from './CartCard'
import trash from '../../trash.png'
import { useLocation, useNavigate } from 'react-router-dom'


export default function ({user}) {

    const navigate = useNavigate


    const [display, setdisplay] = useState()
    const [cart, setcart] = useState()
    const [updated, setupdated] = useState()
    const [changed, setchanged] = useState([])
    const [delete_cart, setdelete_cart] = useState()
 
    console.log(changed)

    console.log(cart)

    useEffect(() => {
        if(user){
            fetch(`http://127.0.0.1:5555/user/${user}`)
            .then(res => res.json()) 
            .then(data => {
                setdisplay(data.cart)
                setcart(data.cart)
            })

            
        }
        

    }, [])

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
        

    }, [updated])



    useEffect(() => {

        if(cart){
            let endpoints = cart.map((item) => `http://127.0.0.1:5555/cart/${item.cart_id}`)
            console.log(delete_cart)
            console.log(endpoints)
            const DeleteData = async (endpoints) => {
                try {
                     const promises = endpoints.map((url) => {
                        return fetch(url, {
                            method: 'DELETE'
                        })
                        .then(response => response.json())

                     })

                        
                    
                    const deletepromises = await Promise.all(promises);

                    if(deletepromises){
                         console.log(deletepromises)
                         window.location.replace('/')

                    }

                   
                    
                } catch (error) {
                    console.error(error);
                }
            };

            DeleteData(endpoints)

        }



        
    
    }, [delete_cart])

    

    


    function handleCartProducts(){
        if(display){
            let listo = display.map((item) => {

                
                
                return <div key={item.cart_id}>

                     <CartCard key={item.cart_id} item={item}  id={item.cart_id} index={display.indexOf(item)} cart={cart} setcart={setcart} setchanged={setchanged} changed={changed}/>

                </div>
                
            })

            return listo
        }
    }


  return (
    <div className='h-[100%]'>
        <div className='h-[15vh]'></div>
        <div className='grid grid-flow-col  gap-10'>
            <div className='w-[200px] '></div>
            <div className='w-[930px] '>
                <div className=' cart-header h-[50px] grid grid-cols-[60%_20%_10%_10%] border-b-[1px]'>
                    <div className='one'>Product</div>
                    <div className='two'>Quantity</div>
                    <div className='three'> Price</div>


                </div>
                <div className='grid grid-flow-row gap-2'>
                    {handleCartProducts()}
                    
                </div>

                <div className='grid grid-cols-[80%_20%]  h-[10vh]'>

                    <div className=''>
                        <div className='grid grid-cols-[85%_15%]'>
                            <img src={trash} alt="" className='grid place-self-end' onClick={() => setdelete_cart(true)}/>
                        <h1 className='grid place-self-end'>Empty Cart</h1>
                        </div>
                        
                    </div>
                    <div>
                        <button className='border-solid border-black border-[1px]' onClick={() => setupdated(cart)}>Update Cart</button>
                    </div>
                    
                    
                </div>
            </div>
            <div className=' w-[400px] '>
                <div className='bg-white  h-[20vh] grid sticky top-[4%]'>
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
