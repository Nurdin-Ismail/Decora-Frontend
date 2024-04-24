import React, { useState } from 'react'

import forward from '../../forward.png'

export default function User({user}) {
  const [current, setcurrent] = useState('Account Information')

  function handleButtonChange(target){
    if(target == 'Account Information'){
      return <h1>
        Account Information
      </h1>

    }else if(target == 'Adress'){
      return <h1>
        Adress
      </h1>

    }else if(target == 'Edit Information'){
      return <h1>
        Edit Information
      </h1>
      
    }else if(target == 'Orders'){
      return <h1>Orders</h1>
      
    }else if(target == 'Wishlist'){
      return <h1>Wishlist</h1>
      
    }

  }





  return (
    <div>
      <div className='h-[100vh] grid grid-cols-[30%_70%] gap-5'>

        <div className=' grid item-center-end'>

          <div className='  h-[70%] w-[50%] sticky top-4 overflow-x-hidden '>
            <ul className=' grid gap-2 '>
              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Account Information' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Account Information' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Account Information' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  console.log(current) 
                  setcurrent('Account Information')

                        }}>
                        Account Information

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Adress' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Adress' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Adress' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Adress')
                  console.log(current) 

                        }}>
                        Adress

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Edit Information' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Edit Information' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Edit Information' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Edit Information')
                  console.log(current) 

                        }}>
                        Edit Information

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Orders' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Orders' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Orders' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Orders')
                  console.log(current) 

                        }}>
                        Orders

                    </div>
              </li>

              <li className='grid grid-cols-[20%_80%] smooth'
              style={current == 'Wishlist' ? {transform: `translate(-${0}%)`} : {transform: `translate(-${20}%)`}}
              
              >
                 <img src={forward} alt="" className={current == 'Wishlist' ? ' w-[24px] grid place-self-center' : 'invisible'}/>

                <div className={current == 'Wishlist' ? ' grid place-content-center border-[1px] border-white w-[100%] h-[60px] cursor-pointer bg-[#2f215ecc] text-white': ' grid place-content-center border-[1px] border-black hover:border-white w-[100%] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'} onClick={() => { 
                  setcurrent('Wishlist')
                  console.log(current) 

                        }}>
                        Wishlist

                    </div>
              </li>

              
            </ul>

          </div>

        </div>

        <div className='  grid item-center-start'>


          <div className=' bg-gray-100 w-[90%] h-[70%]'>
            {handleButtonChange(current)}


          </div>

        </div>


      </div>
    </div>
  )
}
