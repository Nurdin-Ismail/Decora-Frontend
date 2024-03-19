import React, { useEffect, useState } from "react";
import bgimg from '../bgimg.avif'
import Search from "./Search";
import Popular from "./Popular";
import Categories from "./Categories";
import Modal from "./Modal";
import CartModal from "./CartModal";


function Home({products,setcardinfo, handleis, is, setis, cardinfo, add, setadd}){

    // const [search, setsearch] = useState('')


    
    // console.log(is)
    
    



    // function onSearchChange(value){
    //     setsearch(value)
    //     console.log(search)

        

    // }



    
    // let searchData
    // if(products){
    //     searchData = products.filter((item) => {
    //     if (item.name.toLowerCase().includes(search.toLowerCase())) {
    //       return item
    
    
    
    
    
    //     }
    //   })

    // }

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

    
    


    
    

   

    return <div >

        
        <section className="kanu  "
        >
            {/* <div className="search-dropdown flex flex-col  ">
                <Search search={search} setsearch={setsearch} onsearch={onSearchChange}/>
                <div className=" kon   max-h-[30vh] rounded-bl-3xl rounded-br-3xl overflow-x-clip flex-wrap  overflow-auto ml-[31vw] mr-[32vw]">
                    {search === '' ? null : searchData.map((item) =>{
                    return (
                        <div className=" ">
                            <div className="dropdown  flex bg-white w-[37vw]   rounded-[-20px] pt-1 h-[60px] hover:bg-[#fad8d8d7]">
                                <div className=" flex ml-2 h-[50px] w-[50px] items-center">
                                    <img src={'http://127.0.0.1:5555' + item.images[0]} alt="" className="max-h-[50px]  max-w-[50px]  rounded-full"/> 
                                </div>
                                <div className=" flex  w-[33vw] justify-between h-[50px] items-center  "> 
                                    <h1 className=" ml-5">{item.name}</h1> 
                                    <h1 className=" me-2 text-red-500">Ksh {item.price}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}

                </div>
                
                

            </div> */}
            



        </section>

        <section className=" underheader mt-20 h-[60vh] ml-[40px] mr-[60px]">

            <Popular products={products} cardinfo={cardinfo} setcardinfo={setcardinfo} handleis={handleis} is={is} />





        </section>

        <section className=" categories mt-10  h-[90vh] w-[100vw] ml-20 mr-20"  >
            
            <Categories products={products}/>

        </section>

        {is? <Modal setis={setis} data={modaldata} is={is} setadd={setadd}/>: null}
        
        {add ? <CartModal setadd={setadd} count={counter} product={product}/>: null}



    </div>
}
export default Home;