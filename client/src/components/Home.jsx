import React, { useEffect, useState } from "react";
import bgimg from '../bgimg.avif'
import Search from "./Search";
import Popular from "./Popular";
import Categories from "./Categories";
import Modal from "./Modal";
import CartModal from "./CartModal";
import New from "./New";

import forward from '../forward.png'
import arrow from '../arrow1.png'


function Home({products,setcardinfo, handleis, is, setis, cardinfo, add, setadd}){

    const [slide, setslide] = useState(0)
    const [slide2, setslide2] = useState(0)
    const [cards, setcards] = useState()
    const [cards2, setcards2] = useState()

    let modaldata
    if(products){
        modaldata = products.filter((item) => item.id == cardinfo)
    }

    console.log(modaldata)
    let counter = 1

    let product 

    if(cardinfo){
        console.log(cardinfo)
        product= products.filter((item) => item.id == cardinfo)[0]
    }
    console.log(product)

    function handlearrows(direction){
        if(direction == 'left'){

            if(slide != 0){
                setslide(slide-1)
            }
            
                
            
             
            
        }else if(direction == 'right'){

            if(slide != cards - 4){
                setslide(slide + 1)
            }

        }

    }
    
    function handlearrows2(direction){
        if(direction == 'left'){

            if(slide2 != 0){
                setslide2(slide2-1)
            }
            
                
            
             
            
        }else if(direction == 'right'){

            if(slide2 != cards2 - 4){
                setslide2(slide2 + 1)
            }

        }

    }

    
    


    
    

   

    return <div >

        
        <section className="kanu"></section>

        <section className="highlight ml-[250px] my-10 bg-green-200 h-[657px]">


        </section>

        <section className="  flex h-[390px] my-20 ml-[200px]  ">

            <div className=" bg-white h-[200px]  min-w-[20%] max-w-[20%]">

                <h1 className=" font-semibold text-2xl">Most Wanted Products</h1>

                <p className="mt-2">
                Transform your living space with our handpicked collection of top-selling home decor essentials.
                </p>

                <div className=" flex w-[120px] justify-evenly mt-10">

                    <img className=" cursor-pointer rotate-180" src={arrow} alt="" onClick={() => handlearrows('left')} />
                    <img className=" cursor-pointer" src={arrow} alt="" onClick={() => handlearrows('right')} />


                </div>


            </div>

            <div className=" w-[80%] overflow-x-hidden overflow-y-clip">

                <Popular products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} slide={slide} setcards={setcards} />



            </div>






        </section>

        <section className=" lookbook mt-10 bg-black  h-[663px]  ml-[250px]"  >
            
            {/* <Categories products={products}/> */}

        </section>

        <section className="new  h-[430px] my-[100px] ml-[200px]">

            <div className="flex justify-between mr-[70px] ">
                <div className=" font-[19px] text-3xl ">New Arrivals

                </div>

                <div className="flex">
                    <img className=" cursor-pointer rotate-180 h-[30px]" src={forward} alt="" onClick={() => handlearrows2('left')} />
                    <img className=" cursor-pointer h-[30px]" src={forward} alt="" onClick={() => handlearrows2('right')} />


                </div>
            </div>

            <div className=" h-[100%]">

                <New products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} slide2={slide2} setcards2={setcards2}/>

            </div>


        </section>

        {is? <Modal setis={setis} data={modaldata} is={is} setadd={setadd}/>: null}
        
        {add ? <CartModal setadd={setadd} count={counter} product={product}/>: null}



    </div>
}
export default Home;