import React, { useEffect, useState } from "react";


function Navbar(){
    return <div>

        <div className=" hover:bg-[#fad8d8ad] h-[78px] w-full text-white hover:text-black nav fixed">
            <div className=" flex ">
                <div className="logo py-[14px] ml-[100px] ">
                    <h1 className=" text-5xl "> Decora</h1>

                </div>

                <div className="links ml-[320px] py-[34px] ">
                    <ul className=" list-none flex  flex-wrap items-center text-center justify-center text-lg font-medium  ">
                        <li className=" me-7 hover:font-semibold">DÉCOR & ARTS</li>
                        <li className="me-7 hover:font-semibold">Kids Decor</li>
                        <li className="me-7 hover:font-semibold">Bathroom & Laundry</li>
                        <li className="me-7 hover:font-semibold">Kitchen & Dining</li>
                    </ul>

                </div>

                <div className=" login py-[28px] float-right ml-[420px] ">
                    <ul className="list-none flex t  flex-wrap items-center text-center justify-center text-2xl font-medium">
                    <li className="me-3 hover:font-semibold px-9"> Login</li>
                    <li className="me-7 hover:font-semibold"> Signup</li>

                    </ul>

                </div>
            </div>
            
             </div>
        


    </div>
}

export default Navbar;