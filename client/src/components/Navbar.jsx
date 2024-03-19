import React, { useEffect, useState } from "react";
import cart from '../cart2.png'
import Search from "./Search";
import logo from '../7.png'



function Navbar({products}){
    const [isShown, setIsShown] = useState(false)
    function getUniqueCategories(products) {
        let categories = []
        if(products){
            products.map((product) => {
                if(categories.includes(product.category) == false){
                    categories.push(product.category)

                }
            })
        }

        return categories
        
        
      }
     
      
      // Example usage
    let uniqueCategories = getUniqueCategories(products);
    console.log(uniqueCategories)
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
    
    
    return <div>

        <nav className="">
            <div className="  bg-[#F2F4FF] h-[9vh] flex justify-between">

                <div className="search-dropdown  ">
                    <Search search={search} setsearch={setsearch} onsearch={onSearchChange}/>
                    <div className=" kon   max-h-[30vh]  overflow-x-clip flex-wrap  overflow-auto ml-[4vw]  relative z-10">
                        {search === '' ? null : searchData.map((item) =>{
                        return (
                            <div className=" ">
                                <div className="dropdown  flex bg-white w-[22vw]    pt-1 h-[60px] ">
                                    <div className=" flex ml-2 h-[50px] w-[50px] items-center">
                                        <img src={'http://127.0.0.1:5555' + item.images[0]} alt="" className="max-h-[50px]  max-w-[50px]  "/> 
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
                
                

                </div>
                <div className=" ml-[]">
                     <img src={logo} alt="" className=" h-[18vh] w-[10vw] mt-[-40px] " />
                </div>

               

                <div className="flex justify-evenly items-center w-[16vw] mr-10 ml-20">
                    <h1 className=" text-xl font-medium text-cyan-900">Login</h1>
                    <h1 className=" text-xl font-medium h-[5vh] bg-[#4D3F74] flex items-center w-[5vw] justify-center text-white">Signup</h1>
                </div>





            </div>
            
                
                <div className=" relative z-2 h-[6vh] w-full flex justify-evenly items-center px-[9%] text-white bg-[#4D3F74] font-semibold text-lg font-serif ">
                    {uniqueCategories ? uniqueCategories.map((item) => {
                    return <h1 className="">{item}</h1>
                }): null}
                </div>

                

                

            

        </nav>

        {/* <div className="  bg-[#fad8d8ad]  h-[78px] w-full text-black nav  fixed z-10">
            <div className=" flex ">
                <div className="logo py-[14px]  h-[78px] w-[20vw] flex justify-between">
                    <div></div>
                    <a href="/"><h1 className=" text-5xl "> Decora</h1></a>

                </div>

                <div className="links    h-[78px] w-[60vw] flex justify-center items-center">
                    <ul className=" list-none  text-2xl font-medium  ">
                        <li className=" me-7 hover:font-semibold">Shop</li>
                        
                    </ul>
                    <div className="App">
                        <button className="h-[10vh] w-[15vw]"
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>
                                Hover over me!
                        </button>
                        {isShown && (
                        <div>
                            I'll appear when you hover over the button.
                        </div>
                        )}
                    </div>

                </div>

                <div className=" login  h-[78px] w-[23vw]  flex justify-center  ">
                    <ul className="list-none  text-2xl font-medium flex  items-center ">
                    <li className=" hover:font-semibold px-5 "> Login</li>
                    <li className=" hover:font-semibold px-5"> Signup</li>
                    <div className="flex ">
                        <img src={cart} alt="" className="h-[25px] w-[25px] z-10" />
                        <h1 className="z-20 ">1</h1>
                    </div>
                    

                    </ul>

                </div>
            </div>
            
             </div>
         */}


    </div>
}

export default Navbar;