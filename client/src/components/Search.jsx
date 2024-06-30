import React, { useEffect, useState } from "react";

import searcho from "../search.png";

function Search({ search, setsearch, onsearch }) {
  let rounded =
    "bg-white flex align-middle h-full items-center shadow-lg flex placeholder:text-black w-[383px] ml-[4vw]   placeholder:text-2xl pl-1 border-black border-solid border-[1px]";
  let rounded_full =
    "bg-white flex align-middle h-full items-center shadow-lg placeholder:text-black w-[383px]  ml-[4vw]  placeholder:text-2xl pl-1 border-grey-200 border-solid border-[1px] ";

  return (
    <div className=' z-1'>
      {/* <input
        type="search"
        className=' focus:border-black border-sky-400 rounded-3xl  h-12 w-[30vw] placeholder:text-black ml-[35vw] mt-[38vh] placeholder:text-2xl'
        placeholder=""
        
        
        /> */}

      <form className={search ? rounded : rounded_full}>
        <img
          src={searcho}
          alt='kanuuuuuuuuuu'
          className='h-[30px] w-[30px] ml-2 mr-[-5px] '
        />
        <input
          type='text'
          placeholder='What Are You Looking For?'
          className='h-12 w-[20vw] mx-4 focus:outline-none  '
          onChange={(e) => onsearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
