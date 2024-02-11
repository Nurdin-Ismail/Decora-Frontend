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
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
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

  
  

  




  
 
  

  return (
    <div className=''>

      <div className='title pt-8 flex flex-row items-center mb-10'>
        <h1 className='  mr-5 ml-5 font-medium'> Popular Items</h1>

        <div className='bg-[#f5bfbf] mt-1 h-[0.2vh] w-[70vw] rounded-lg'></div>

      </div>



        <Carousel 
        
        responsive={responsive}
        infinite={true}
        className=' carousel'
        
        
        >
            
            {popular_products.map((item) => {
                return (<Card 
                    key={item.id}
                    img= {'http://127.0.0.1:5555' + item.images[0] } 
                    name={item.name} 
                    price={item.price}
                    id={item.id}
                    setcardinfo={props.setcardinfo}
                    handleis={props.handleis}
                    onClickItem={action('click')}
                    is={props.is}
                    
                    
                    
                    />)
            })}
            

        </Carousel>

        



    </div>
  )
}
export default Popular;
