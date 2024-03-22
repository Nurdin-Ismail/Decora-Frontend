import React,{useState,useEffect} from 'react'
import Card from './Card';
import 'animate.css';
import { action } from '@storybook/addon-actions';

export default function (props) {

    const [newest , setnewest] = useState()

    useEffect(() => {
       if(props.products){
            let productso = [...props.products]
            productso.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            // Set the 20 most recent products
            setnewest(productso.slice(0, 20));

            console.log(newest)
        }
    },[props.products])

    if(newest){
        props.setcards2(newest.length)
    }

    
    
    

   




  return (
    <div className=' h-[100%] mx-[130px] w-[85%] mt-10 overflow-x-hidden overflow-y-clip'>

<div className='flex best' 
      style={{transform: `translate(-${props.slide2 * 24.8}%)`}}
      >

     

       
            
{newest ? newest.map((item) => {
    return (
      <div className=' ml-[29.3px]'>
        <Card 
        key={item.id}
        img= {'http://127.0.0.1:5555' + item.images[0] } 
        name={item.name} 
        price={item.price}
        id={item.id}
        setcardinfo={props.setcardinfo}
        handleis={props.handleis}
        onClickItem={action('click')}
        is={props.is}
        
        
        
        />
      </div>
    )
}):<h1>Loading ...</h1>
}








</div> 

    </div>
  )
}
