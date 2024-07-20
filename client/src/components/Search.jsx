import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import fire from "../fire.gif";

import searchimg from "../search.svg";

function Search({ is, setis, search, setsearch, mostSearched, searchData }) {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <div className='montserrat'>
      <div
        className='modal fixed h-[100vh] top-[0vh] flex justify-center items-center  left-[0vw] w-[100vw] modalo '
        onClick={() => {
          setis(!is);
        }}
      ></div>
      <div
        data-aos='zoom-in-up'
        id=''
        className=' modal fixed text-black  text-xl  grid rounded-md  top-[9vh] left-[30vw] w-[33vw] bg-white '
      >
        <div className='grid grid-cols-[7%_83%_10%]   my-4 '>
          <img
            src={searchimg}
            alt=''
            className='h-[23px] grid place-self-center'
          />
          <div>
            <input
              type='text'
              value={search}
              className='grid w-full outline-none placeholder:text-[18px] text-[18px] pl-2'
              placeholder="What're you looking for?"
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <h1
            onClick={() => setis(!is)}
            className=' cursor-pointer text-sm border-[2px] border-[#3a0350e0] grid place-self-center px-1 font-bold rounded-md'
          >
            esc
          </h1>
        </div>

        {/* end of search section */}

        {search.length > 0 ? (
          <div className='overflow-auto max-h-[80vh]'>
            <div className=' '></div>

            <div className=' '>
              {searchData
                ? searchData.map((item) => {
                    return (
                      <div
                        className=' flex  text-sm gap-2 my-2  ml-10 cursor-pointer'
                        onClick={() =>
                          window.location.replace(
                            `/products/${item.name.split(` `).join(`-`)}/${
                              item.id
                            }`
                          )
                        }
                      >
                        <img
                          src={
                            "https://decora-backend.onrender.com/" +
                            item.images[1]
                          }
                          alt=''
                          className='h-[90px]'
                        />
                        <div className=''>
                          <h1 className=' opacity-[60%]'>{item.name}</h1>
                          <h1>Ksh {item.price.toLocaleString()}</h1>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        ) : (
          <div
            className=' ml-5 mb-10
         '
          >
            <div className='grid'>
              <h1 className='ml-2 my-3 font-semibold'>Popular Searches</h1>
              <div className=' flex gap-3'>
                <div
                  onClick={() => setsearch("vase")}
                  className=' text-sm grid grid-flow-col mb-4 ml-2 border-[0.5px] border-[#c4c2c2] pl-3 pr-4 py-1 rounded-2xl cursor-pointer '
                >
                  <img src={fire} alt='' className=' h-[20px]' />
                  <h1 className='grid place-self-end '>vase</h1>
                </div>
                <div
                  onClick={() => setsearch("candle holder")}
                  className=' text-sm grid grid-flow-col mb-4 ml-2 border-[0.5px] border-[#c4c2c2] pl-3 pr-4 py-1 rounded-2xl cursor-pointer '
                >
                  <img src={fire} alt='' className=' h-[20px]' />
                  <h1 className='grid place-self-end '>candle holder</h1>
                </div>
                <div
                  onClick={() => setsearch("canvas")}
                  className=' text-sm grid grid-flow-col mb-4 ml-2 border-[0.5px] border-[#c4c2c2] pl-3 pr-4 py-1 rounded-2xl cursor-pointer '
                >
                  <img src={fire} alt='' className=' h-[20px]' />
                  <h1 className='grid place-self-end '>canvas</h1>
                </div>
                <div
                  onClick={() => setsearch("planter")}
                  className=' text-sm grid grid-flow-col mb-4 ml-2 border-[0.5px] border-[#c4c2c2] pl-3 pr-4 py-1 rounded-2xl cursor-pointer '
                >
                  <img src={fire} alt='' className=' h-[20px]' />
                  <h1 className='grid place-self-end '>planter</h1>
                </div>

                <div
                  onClick={() => setsearch("lamp")}
                  className=' text-sm grid grid-flow-col mb-4 ml-2 border-[0.5px] border-[#c4c2c2] pl-3 pr-4 py-1 rounded-2xl cursor-pointer '
                >
                  <img src={fire} alt='' className=' h-[20px]' />
                  <h1 className='grid place-self-end '>lamp</h1>
                </div>
              </div>
            </div>

            {/* <div>
              <h1 className='ml-2 my-3 font-semibold'> Trending Categories</h1>
              <div className=' flex gap-5 ml-2 '>
                <div className='flex flex-col justify-center place-items-center text-sm'>
                  <img
                    src='https://picsum.photos/80'
                    alt=''
                    className='rounded-full'
                  />
                  <h1 className=''>Categ</h1>
                </div>
                <div className='flex flex-col justify-center place-items-center text-sm'>
                  <img
                    src='https://picsum.photos/80'
                    alt=''
                    className='rounded-full'
                  />
                  <h1 className=''>Categ</h1>
                </div>
                <div className='flex flex-col justify-center place-items-center text-sm'>
                  <img
                    src='https://picsum.photos/80'
                    alt=''
                    className='rounded-full'
                  />
                  <h1 className=''>Categ</h1>
                </div>
                <div className='flex flex-col justify-center place-items-center text-sm'>
                  <img
                    src='https://picsum.photos/80'
                    alt=''
                    className='rounded-full'
                  />
                  <h1 className=''>Categ</h1>
                </div>
                <div className='flex flex-col justify-center place-items-center text-sm'>
                  <img
                    src='https://picsum.photos/80'
                    alt=''
                    className='rounded-full'
                  />
                  <h1 className=''>Categ</h1>
                </div>
              </div>
            </div> */}

            <div>
              <h1 className='ml-2 my-3 font-semibold'>
                Most Searched Products
              </h1>
              <div className='flex gap-2 ml-4 my-4'>
                {mostSearched ? (
                  mostSearched.map((item) => {
                    return (
                      <div
                        className='text-sm'
                        onClick={() =>
                          window.location.replace(
                            `/products/${item.name.split(` `).join(`-`)}/${
                              item.id
                            }`
                          )
                        }
                      >
                        <img
                          src={
                            "https://decora-backend.onrender.com/" +
                            item.images[0]
                          }
                          alt=''
                          className='h-[150px]'
                        />
                        <h1 className='w-[150px] font-bold'>
                          Ksh {item.price.toLocaleString()}
                        </h1>
                        <h1 className='w-[150px]'>{item.name}</h1>
                      </div>
                    );
                  })
                ) : (
                  <h1>hfhffhf</h1>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
