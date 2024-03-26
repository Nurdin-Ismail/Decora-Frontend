import React,{useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import 'animate.css';
import { action } from '@storybook/addon-actions';



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Popular(props) {
    const [carts, setcarts] = useState()
    

    useEffect(()=>{
        fetch('http://127.0.0.1:5555/carts')
        .then(res => res.json()) 
        .then(data => setcarts(data))

    },[])
   let re = []
   if(carts){
    for(let item in carts){
        re.push(carts[item].product_id)
    }
   }
   let popular = findAndSortRecurringNumbers(re)

   function findAndSortRecurringNumbers(numbers) {
    // Create an object to store the frequency of each number
    const numberFrequency = {};
  
    // Loop through the array and update the frequency
    numbers.forEach(number => {
      // Check if the number is already in the frequency object
      if (numberFrequency[number]) {
        numberFrequency[number]++;
      } else {
        numberFrequency[number] = 1;
      }
    });
  
    // Create an array of recurring numbers with their frequencies
    const recurringNumbersWithFrequency = Object.keys(numberFrequency)
      .filter(number => numberFrequency[number] > 1)
      .map(number => ({ number: Number(number), frequency: numberFrequency[number] }));
  
    // Sort the recurring numbers based on frequency in descending order
    recurringNumbersWithFrequency.sort((a, b) => b.frequency - a.frequency);
  
    // Extract the sorted recurring numbers
    const sortedRecurringNumbers = recurringNumbersWithFrequency.map(item => item.number);
  
    return sortedRecurringNumbers;
  }

  

  let popular_products = []

  if(props.products){
    
    
    for(let item in popular){
        


     for(let i = 0; i< props.products.length; i++){

         if(popular[item] == props.products[i].id ){
            popular_products.push(props.products[i])
        }
    }

  }
  }

  popular_products.pop()

  console.log(popular_products.length)
  if(popular_products.length > 0){
    props.setcards(popular_products.length)
  }
  
 
   

  
  

  




  
 
  

  return (

   

      <div className='flex best' 
      style={{transform: `translate(-${props.slide * 25.65}%)`}}
      >

     


       
            
{popular_products.map((item) => {
    return (
      <div className=' ml-[20px]'>
        <Card 
        key={item.id}
        img= {'http://127.0.0.1:5555' + item.images[1] } 
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
})}








</div> 

   
    
  )
}
export default Popular;
