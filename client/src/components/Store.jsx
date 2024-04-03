import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { action } from '@storybook/addon-actions';
import filter from '../filter2.png'
import x from '../x.png'
import Modal from './Modal';
import CartModal from './CartModal';
import Filter from './Filter';

import Card from './Card';
function Store(props) {
    const params = useParams();
    const [display, setdisplay] = useState()
    let productso = props.products
    const [icon, seticon] = useState(filter)
    const [filtero, setfilter] = useState(false)



    

    useEffect(() => {
        if(props.products){
            if(params.sub_categ && params.sub_categ != '-'){
                console.log(props.products)
                let filtered = props.products.filter(item => item.sub_category == params.sub_categ)
                console.log(filtered)
                setdisplay(filtered)
            }else{
                let filtered = props.products.filter(item => item.category == params.category)
                console.log(filtered)
                setdisplay(filtered)

            }
        }

    }, [productso])

    if (display){
        console.log(display)
    }

    function handleIconChange(){
        if(icon == filter){
            seticon(x)
        }else{
            seticon(filter)
        }
        
    }

    

    let modaldata
    if(props.products){
        modaldata = props.products.filter((item) => item.id == props.cardinfo)
    }

  return (
    <div className=' grid grid-flow-row'> 

    <h1>KAnuuuu</h1>

    {/* Filter */}

        <div className='  mt-[2vh] flex justify-between mx-[120px]'>
            <div className=' select-none w-[5.6vw] rounded-md flex items-center justify-center bg-gray-100 ' onClick={() => {
                handleIconChange()
                setfilter(!filtero)
            }}>
                <div className=' w-[20px] '>
                    <img src={icon} alt="" className=' icon ' />
                </div>
                
                <h1 className='product-title font-bold ml-1'>Filter</h1>


            </div>

            <div className=' w-[12vw] bg-gray-100 rounded-md  flex items-center justify-center'>
                <h1></h1>

                <select name="" id="" className='minimal  bg-gray-100 w-[12vw] pl-4   text-sm h-[3.5vh]'>
                    <option value="" className=' text-sm'>Default Sorting</option>
                    <option value="" className=''>Sort by latest</option>
                    <option value="" className=''>Sort by price: high to low</option>
                    <option value="" className=''>Sort by price: low to high</option>
                </select>

            </div>

        </div>

    {/* Products */}
        <div className='  grid grid-flow-col mt-10'>    
            {/* {filtero && icon ? <Filter filtero={filtero} setfilter={setfilter} x={x} filter={filter} seticon={seticon} display={display}/> : null} */}

            <div className=' grid grid-cols-4 mx-[120px] gap-[0px] '>

        {display ? display.map((item) => {
            return <div className=' '>
   <Card
                key={item.id}
                img= {'http://127.0.0.1:5555' + item.images[1]} 
                name={item.name} 
                price={item.price}
                id={item.id}
                setcardinfo={props.setcardinfo}
                handleis={props.handleis}
                onClickItem={action('click')}
                is={props.is}
                type={'large'}
                
                
                
                
                />
</div>
             

        }):<h1>Kanu</h1> }

    </div>
        </div>

    
    {props.is ? <Modal setis={props.setis} data={modaldata} is={props.is} setadd={props.setadd}/>: null}
    
    {props.add ? <CartModal setadd={props.setadd} count={props.counter} product={modaldata[0]}/>: null}
    
    
    
    </div>
  )
}
export default Store;