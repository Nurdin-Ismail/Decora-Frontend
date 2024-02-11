import React, { useEffect, useState } from "react";
import cart from '../cart.png'


function Navbar(){
    const [isShown, setIsShown] = useState(false)
    return <div>

        <div className="  bg-[#fad8d8ad]  h-[78px] w-full text-black nav  fixed z-10">
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
        


    </div>
}

export default Navbar;