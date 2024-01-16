import React, { useEffect, useState } from "react";


function Search({search, setsearch, onsearch}){

    let rounded = 'bg-white flex placeholder:text-black w-[37vw]  ml-[31vw] mt-[38vh] placeholder:text-2xl pl-4 rounded-tl-3xl rounded-tr-3xl'
    let rounded_full = 'bg-white flex placeholder:text-black w-[37vw]  ml-[31vw] mt-[38vh] placeholder:text-2xl pl-4 rounded-3xl'

    return <div className=" z-1">
        <h1 className=" text-transparent">HALOOO</h1>

        {/* <input
        type="search"
        className=' focus:border-black border-sky-400 rounded-3xl  h-12 w-[30vw] placeholder:text-black ml-[35vw] mt-[38vh] placeholder:text-2xl'
        placeholder=""
        
        
        /> */}

        

        <form className={search ? rounded : rounded_full}>
            
                <svg width="30" height="50" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.423 13.79c3.547 0 6.423-2.863 6.423-6.395C13.846 3.863 10.97 1 7.423 1S1 3.863 1 7.395c0 3.532 2.876 6.396 6.423 6.396ZM17 16.931l-5.04-5.02" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" className=""></path></svg>
                
                <input type="text" placeholder="Search" className="h-12 w-[30vw] mx-4 focus:outline-none" onChange={e => onsearch(e.target.value)}/>
                    <button type="button"><svg width="30" height="25" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 15 15M16 1 1 16" fill="#000" stroke="#000"></path></svg></button>
                    </form>


    </div>
}

export default Search;