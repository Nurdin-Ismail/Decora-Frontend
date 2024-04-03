import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { action } from '@storybook/addon-actions';
import filter from '../filter2.png'
import x from '../x.png'
import Modal from './Modal';
import CartModal from './CartModal';
import Filter from './Filter';
import arrow from '../arrow1.png'

import Card from './Card';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Store(props) {
    const params = useParams();
    const [display, setdisplay] = useState()
    let productso = props.products
    const [icon, seticon] = useState(filter)
    const [filtero, setfilter] = useState(false)
    const [header, setheader] = useState([])
    const [child_categ, setchild_categ] = useState()
    const [sibling_categ, setsibling_categ] = useState()
    const [clicked, setclicked] = useState()



    

    useEffect(() => {
        if(props.products){
            if(params.sub_categ && params.sub_categ != '-'){
                console.log(props.products)
                let filtered = props.products.filter(item => item.sub_category == params.sub_categ)
                
                
                console.log(filtered)
                setdisplay(filtered)
                setheader(['Home', arrow, params.category, arrow, params.sub_categ])
                let child = filtered.map((item) => item.tag)
                let unique = [...new Set(child)]
                setchild_categ(unique)
            }else{
                let filtered = props.products.filter(item => item.category == params.category)
                console.log(filtered)
                setdisplay(filtered)
                setheader(['Home', arrow ,params.category])
                let child = filtered.map((item) => item.sub_category)
                let unique = [...new Set(child)]
                setchild_categ(unique)

            }
        }

    }, [productso])

    console.log(header)
    console.log(child_categ)

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
    <div className=' filtery grid grid-flow-row '> 

    <h1 className='grid place-self-center my-10 '>

        {header && header.length << 3 ? 
        <h1 className=' flex place-items-center text-2xl font-thin '>
            <a href='/'>{header[0]}</a>  <span className='mx-5'><img src={header[1]} alt="" /></span>    <a href={"/product-category/" + header[2] + '/-'}>{header[2]}</a> <span className='mx-5'><img src={header[3]} alt="" /></span> <a href={"/product-category/" + header[2] + '/' + header[4]}>{header[4]}</a>
        </h1>
        

        : null}

        {/* {header && header.length >> 4 ? 
        <h1 className=' flex place-items-center '>
            {header[0]}  <span className='mx-5'><img src={header[1]} alt="" /></span>    {header[2]} <span className='mx-5'><img src={header[3]} alt="" /></span>  {header[4]}
        </h1>
        

        : null} */}

        
    </h1>

    {/* Filter */}

        <div className='  mt-[2vh]  flex justify-between mx-[125px] mb-10'>
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
    <div className='besto grid grid-flow-col grid-cols-[125px_1585px_125px] '>
        
        {/* <div className={filtero ? ' w-[274px] grid ' : 'filtery hidden'}>

            <div className=' border-[1px] border-black kol px-[70px] py-[20px] mr-[-250px] cursor-pointer hover:bg-[#554586b4] hover:text-white' onClick={() => {

            }}>
                Price Range

            </div>

        </div> */}

        <div className='grid min-w-[100px]'>

            
        </div>

        
        
        
        
        <div className='  grid grid-flow-col '> 
            {filtero ?

                <div className=' grid gap-[6px]  filter-div mr-[10px] '
                >
                     <div className=' grid place-content-center border-[1px] border-black hover:border-white w-[260px] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white' onClick={() => { setclicked('Price Range')

                        }}>
                        Price Range

                    </div>

                    <div className=' grid place-content-center border-[1px] border-black hover:border-white w-[260px] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white' onClick={() => setclicked('Categories')}>
                        Categories
                    </div>
                    {clicked == 'Categories' ? 

                    <div className='besto grid grid-flow-row ml-6'>
                        {child_categ ? 
                        
                        child_categ.map((item) => {

                            return <div className=''>
                               <li><a href={'/product-category/' + params.category + '/' + item} className=' hover:text-[#552ae0fb]'>{item}</a></li>
                            
                            </div>
                        })

                        
                        
                        : null}

                    </div>
                    
                    
                    : null}

                </div>

            : null}


            {/* {filtero && icon ? <Filter filtero={filtero} setfilter={setfilter} x={x} filter={filter} seticon={seticon} display={display}/> : null} */}

            <div className=' grid grid-cols-4 gap-[10px]'>

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
                            type={filtero ? null :'large'}
                
                
                
                
                        />
                    </div>
             

                }):<h1>Kanu</h1> }

            </div>
        </div>

        <div className='grid w-[100px]'>
           
        </div>


    </div>
        

    
    {props.is ? <Modal setis={props.setis} data={modaldata} is={props.is} setadd={props.setadd}/>: null}
    
    {props.add ? <CartModal setadd={props.setadd} count={props.counter} product={modaldata[0]}/>: null}
    
    
    
    </div>
  )
}
export default Store;