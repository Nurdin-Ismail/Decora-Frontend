import React, { useEffect, useState } from "react";
import bgimg from '../bgimg.avif'
import Search from "./Search";


function Home({products}){

    const [search, setsearch] = useState('')

    function onSearchChange(value){
        setsearch(value)
        console.log(search)

        

    }



    
    let searchData
    if(products){
        searchData = products.filter((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return item
    
    
    
    
    
        }
      })

    }
    

    console.log(searchData)
   

    return <div>
        <section className="kanu"
        >
            <div className="search-dropdown flex flex-col  ">
                <Search search={search} setsearch={setsearch} onsearch={onSearchChange}/>
                <div className=" kon   max-h-[30vh] rounded-bl-3xl rounded-br-3xl overflow-x-clip flex-wrap  overflow-auto ml-[31vw] mr-[32vw]">
                    {search === '' ? console.log('empty') : searchData.map((item) =>{
                    return (
                        <div className=" ">
                            <div className="dropdown  flex bg-white w-[37vw]   rounded-[-20px] pt-1 h-[60px] hover:bg-[#fad8d8d7]">
                                <div className=" flex ml-2 h-[50px] w-[50px] items-center">
                                    <img src={'http://127.0.0.1:5555' + item.image} alt="" className="max-h-[50px]  max-w-[50px]  rounded-full"/> 
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
                
                {/* <div className="">


                    <div className=" flex bg-white w-[37vw]  ml-[31vw] rounded-[-20px] pt-1 h-[50px] ">
                        <img src="https://dummyimage.com/50x50/000/ffff" alt="" className="max-h-[70px] max-w-[70px]"/>
                        <div className=" flex  w-[33vw] justify-between h-[46px] bg-blue-200 text-center align-middle "> 
                            <h1 className="">Titleiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1> 
                            <h1> Quantiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
                        </div>
                    </div>

                    
                </div> */}

            </div>
            



        </section>



    </div>
}
export default Home;