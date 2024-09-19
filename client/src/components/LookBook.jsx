import React, { useState } from "react";
import one from "../1.jpg";

import shopthebath from "../shopthebath.jpeg";
import shopthecandle from "../shopthecandle.jpeg";
import shopthedecor from "../shopthedecor.jpeg";
import { useEffect } from "react";
import forward from "../forward.png";
import tag from "../tag4.png";
import Skeleton from "@mui/material/Skeleton";

export default function LookBook({ setcardinfo, handleis, is }) {
  const [current, setcurrent] = useState("Bathroom Accessories");
  const [currentslidebath, setcurrentslidebath] = useState(1);
  const [currentslidedecor, setcurrentslidedecor] = useState(0);
  const [currentslidecandle, setcurrentslidecandle] = useState(0);
  const [cards, setcards] = useState();

  // console.log(current);
  const [bath, setBath] = useState([]);
  const [decor, setDecor] = useState([]);
  const [candle, setCandle] = useState([]);

  const bathEndpoints = [
    "http://127.0.0.1:5000/product/1",
    "http://127.0.0.1:5000/product/2",
    "http://127.0.0.1:5000/product/3",
    "http://127.0.0.1:5000/product/4",
    "http://127.0.0.1:5000/product/8",
    "http://127.0.0.1:5000/product/10",
  ];
  const decorEndpoints = [
    "http://127.0.0.1:5000/product/53",
    "http://127.0.0.1:5000/product/24",
    "http://127.0.0.1:5000/product/21",
    "http://127.0.0.1:5000/product/28",
  ];
  const candleEndpoints = [
    "http://127.0.0.1:5000/product/26",
    "http://127.0.0.1:5000/product/53",
    "http://127.0.0.1:5000/product/52",
  ];
  const [showcase, setshowcase] = useState(false);
  const [index, setindex] = useState();
  const [active, setactive] = useState("Bathroom Accessories");

  // Handling multiple fetch calls for the LookBook data in one code block
  useEffect(() => {
    const fetchAndSetData = async (endpoints, setData) => {
      try {
        const promises = endpoints.map((url) =>
          fetch(url).then((response) => response.json())
        );
        const data = await Promise.all(promises);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndSetData(bathEndpoints, setBath);
    fetchAndSetData(decorEndpoints, setDecor);
    fetchAndSetData(candleEndpoints, setCandle);
  }, []);

  // console.log(bath, decor, candle);

  //Handles the pressing of the SHOP THE LOOK buttons and assigns values to specific states that deal with this component

  function handlebuttons(button) {
    if (button == "Bathroom Accessories") {
      if (bath) {
        setcards(bath.length);
        setcurrent("Bathroom Accessories");
        setactive("Bathroom Accessories");
      }
    } else if (button == "Decor") {
      if (decor) {
        setcards(decor.length);
        setcurrent("Decor");
        setactive("Decor");
      }
    } else if (button == "Candle Holders") {
      if (candle) {
        setcards(candle.length);
        setcurrent("Candle Holders");
        setactive("Candle Holders");
      }
    }
  }

  // Handle the chsnging of cards in slides from left to right and viceversa

  function handleslides(direction, current) {
    if (current == "Bathroom Accessories") {
      if (direction == "left") {
        if (currentslidebath != 0) {
          setcurrentslidebath(currentslidebath - 1);
        }
      } else if (direction == "right") {
        // console.log(cards);

        if (currentslidebath != cards - 1) {
          setcurrentslidebath(currentslidebath + 1);
        }
      }
    } else if (current == "Decor") {
      if (direction == "left") {
        if (currentslidedecor != 0) {
          setcurrentslidedecor(currentslidedecor - 1);
        }
      } else if (direction == "right") {
        if (currentslidedecor != cards - 1) {
          setcurrentslidedecor(currentslidedecor + 1);
        }
      }
    } else if (current == "Candle Holders") {
      if (direction == "left") {
        if (currentslidecandle != 0) {
          setcurrentslidecandle(currentslidecandle - 1);
        }
      } else if (direction == "right") {
        if (currentslidecandle != cards - 4) {
          setcurrentslidecandle(currentslidecandle + 1);
        }
      }
    }
  }

  function handlecurrent(current, div) {
    if (div == "image") {
      if (current == "Bathroom Accessories") {
        return (
          <div className=' shopthelook-bath grid'>
            <img
              src={shopthebath}
              alt=''
              className='shop'
              onClick={() => console.log("clickedo")}
            />
            <div className=' grid grid-cols-12 h-[499.50px] w-[666px]'>
              <img
                src={tag}
                alt=''
                className='pulse  tumbler'
                onMouseEnter={() => {
                  setcurrentslidebath(3);
                  setindex(3);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)

                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse cotton-jar'
                onMouseEnter={() => {
                  setcurrentslidebath(0);
                  setindex(0);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse tissue-box-cover'
                onMouseEnter={() => {
                  setcurrentslidebath(4);
                  setindex(4);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse towel-tray'
                onMouseEnter={() => {
                  setcurrentslidebath(5);
                  setindex(5);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  setcurrentslidebath(0);
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse soap-dish'
                onMouseEnter={() => {
                  setcurrentslidebath(2);
                  setindex(2);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  setcurrentslidebath(0);
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse soap-dispenser'
                onMouseEnter={() => {
                  setcurrentslidebath(1);
                  setindex(1);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
            </div>
          </div>
        );
      } else if (current == "Decor") {
        return (
          <div className='shopthelook-decor grid'>
            <img src={shopthedecor} alt='' className='shop' />
            <div className=' grid grid-cols-9 h-[499.50px] w-[666px]'>
              <img
                src={tag}
                alt=''
                className='pulse-decor  dark-grey-ceramic'
                onMouseEnter={() => {
                  setcurrentslidedecor(3);
                  setindex(3);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)

                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse-decor black-brutalist'
                onMouseEnter={() => {
                  setcurrentslidedecor(1);
                  setindex(1);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse-decor ema-ceramic-vase'
                onMouseEnter={() => {
                  setcurrentslidedecor(2);
                  setindex(2);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse-decor lorin-medium'
                onMouseEnter={() => {
                  setcurrentslidedecor(0);
                  setindex(0);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
            </div>
          </div>
        );
      } else if (current == "Candle Holders") {
        return (
          <div className='shopthelook-candle grid'>
            <img src={shopthecandle} alt='' className='shop' />
            <div className=' grid grid-cols-11 h-[499.50px] w-[666px]'>
              <img
                src={tag}
                alt=''
                className='pulse  lorin-large'
                onMouseEnter={() => {
                  setcurrentslidebath(2);
                  setindex(2);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)

                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse lorin-medium-two'
                onMouseEnter={() => {
                  setcurrentslidebath(1);
                  setindex(1);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
              <img
                src={tag}
                alt=''
                className='pulse lorin-small'
                onMouseEnter={() => {
                  setcurrentslidebath(0);
                  setindex(0);
                  setshowcase(true);
                }}
                onMouseLeave={() => {
                  // setcurrentslidebath(0)
                  setshowcase(false);
                }}
              />
            </div>
          </div>
        );
      }
    } else if (div == "carrousel") {
      if (current == "Bathroom Accessories") {
        return (
          <div className=' grid grid-rows-[100px_300px_100px]'>
            <div className=' ml-[20px] bg-white text-2xl  font-semibold shopthelook-title grid grid-cols-2'>
              <h1>Shop The Look</h1>

              <div className='shopthelook-arrows  mr-[15px]'>
                <img
                  className=' forward-one cursor-pointer rotate-180 h-[30px]'
                  src={forward}
                  alt=''
                  onClick={() => handleslides("left", current)}
                />
                <img
                  className=' forward-two cursor-pointer h-[30px]'
                  src={forward}
                  alt=''
                  onClick={() => handleslides("right", current)}
                />
              </div>
            </div>
            <div>
              <div className='grid h-[100%] w-[650px]  overflow-x-hidden'>
                <div
                  className='besto ml-[20px]  flex gap-[18px] grid-flow-col  '
                  style={{
                    transform: `translate(-${currentslidebath * 17.2}%)`,
                  }}
                >
                  {bath.length != 0
                    ? bath.map((item) => {
                      return (
                        <div
                          className=' grid '
                          onClick={() => {
                            setcardinfo(item.id);
                            handleis(is);
                          }}
                        >
                          <div className=''>
                            <img
                              src={"http://127.0.0.1:5000" + item.images[1]}
                              alt=''
                              className={
                                showcase && index == bath.indexOf(item)
                                  ? "h-[200px] min-w-[200px] border-[1px] border-black"
                                  : "h-[200px] min-w-[200px]"
                              }
                            />
                          </div>
                          <div className=' grid grid-rows-[50px_50px]'>
                            <h1 className='grid place-self-start font-semibold'>
                              {item.name}
                            </h1>
                            <h1 className='grid place-self-start'>
                              Ksh {item.price}
                            </h1>
                          </div>
                        </div>
                      );
                    })
                    : [...Array(5)].map((item) => {
                      return (
                        <div className='bg-white rounded-sm   flex flex-col gap-[5px]'>
                          <Skeleton
                            variant='rounded'
                            width={200}
                            height={200}
                          />
                          <Skeleton variant='caption' width={180} />
                          <Skeleton variant='caption' width={100} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className='bg-white'></div>
          </div>
        );
      } else if (current == "Decor") {
        return (
          <div className='grid grid-rows-[100px_300px_100px]'>
            <div className=' ml-[20px] bg-white text-2xl  font-semibold shopthelook-title grid grid-cols-2'>
              <h1>Shop The Look</h1>

              <div className='shopthelook-arrows  mr-[15px]'>
                <img
                  className=' forward-one cursor-pointer rotate-180 h-[30px]'
                  src={forward}
                  alt=''
                  onClick={() => handleslides("left", current)}
                />
                <img
                  className=' forward-two cursor-pointer h-[30px]'
                  src={forward}
                  alt=''
                  onClick={() => handleslides("right", current)}
                />
              </div>
            </div>
            <div>
              <div className='grid h-[100%] w-[650px]  overflow-x-hidden'>
                <div
                  className='besto ml-[20px]  flex gap-[18px] grid-flow-col  '
                  style={{
                    transform: `translate(-${currentslidedecor * 26}%)`,
                  }}
                >
                  {decor.length != 0
                    ? decor.map((item) => {
                      return (
                        <div
                          className=' grid '
                          onClick={() => {
                            setcardinfo(item.id);
                            handleis(is);
                          }}
                        >
                          <div className=''>
                            <img
                              src={"http://127.0.0.1:5000" + item.images[2]}
                              alt=''
                              className={
                                showcase && index == decor.indexOf(item)
                                  ? "h-[200px] min-w-[200px] border-[1px] border-black"
                                  : "h-[200px] min-w-[200px]"
                              }
                            />
                          </div>
                          <div className=' grid grid-rows-[50px_50px]'>
                            <h1 className=' grid place-self-start font-semibold'>
                              {item.name}
                            </h1>
                            <h1 className='grid place-self-start'>
                              Ksh {item.price}
                            </h1>
                          </div>
                        </div>
                      );
                    })
                    : [...Array(4)].map((item) => {
                      return (
                        <div className='bg-white rounded-sm   flex flex-col gap-[5px]'>
                          <Skeleton
                            variant='rounded'
                            width={200}
                            height={200}
                          />
                          <Skeleton variant='caption' width={180} />
                          <Skeleton variant='caption' width={100} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className='bg-white'></div>
          </div>
        );
      } else if (current == "Candle Holders") {
        return (
          <div className='grid grid-rows-[100px_300px_100px]'>
            <div className=' ml-[20px] bg-white text-2xl  font-semibold shopthelook-title grid grid-cols-2'>
              <h1>Shop The Look</h1>

              <div className='shopthelook-arrows  mr-[15px]'>
                {/* <img className=" forward-one cursor-pointer rotate-180 h-[30px]" src={forward} alt="" onClick={() => handleslides('left', current)} />
                                 <img className=" forward-two cursor-pointer h-[30px]" src={forward} alt="" onClick={() => handleslides('right', current)} /> */}
              </div>
            </div>
            <div>
              <div className='grid h-[100%] w-[660px]  overflow-x-hidden'>
                <div
                  className='besto ml-[20px]  flex gap-[18px] grid-flow-col  '
                  style={{
                    transform: `translate(-${currentslidecandle * 17.2}%)`,
                  }}
                >
                  {candle.length != 0
                    ? candle.map((item) => {
                      return (
                        <div
                          className=' grid '
                          onClick={() => {
                            setcardinfo(item.id);
                            handleis(is);
                          }}
                        >
                          <div className=''>
                            <img
                              src={"http://127.0.0.1:5000" + item.images[1]}
                              alt=''
                              className={
                                showcase && index == candle.indexOf(item)
                                  ? "h-[200px] min-w-[200px] border-[1px] border-black"
                                  : "h-[200px] min-w-[200px]"
                              }
                            />
                          </div>
                          <div className='grid grid-rows-[50px_50px]'>
                            <h1 className=' grid place-self-start font-semibold'>
                              {item.name}
                            </h1>
                            <h1 className='grid place-self-start'>
                              Ksh {item.price}
                            </h1>
                          </div>
                        </div>
                      );
                    })
                    : [...Array(3)].map((item) => {
                      return (
                        <div className='bg-white rounded-sm   flex flex-col gap-[5px]'>
                          <Skeleton
                            variant='rounded'
                            width={200}
                            height={200}
                          />
                          <Skeleton variant='caption' width={180} />
                          <Skeleton variant='caption' width={100} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className='bg-white'></div>
          </div>
        );
      }
    }
  }

  return (
    <div>
      {/* <h1 className=' grid place-self-center'>Shop These Designer - Curated Collections</h1> */}
      <div className=' grid grid-flow-row grid-rows-[50px_100px_501px]'>
        <div className='  grid grid-cols-1'>
          <h1 className='font-semibold font-serif grid place-self-center text-3xl italic'>
            Shop These Designer - Curated Collections
          </h1>
        </div>
        <div className='  grid grid-cols-3'>
          <div></div>
          <div className=' grid grid-cols-3'>
            <button
              className={
                active == "Bathroom Accessories"
                  ? "borde-solid border-[1px] my-6 mx-4 bg-[#47367cec] text-white"
                  : "borde-solid border-[1px] my-6 mx-4 hover:bg-[#47367cec] hover:text-white"
              }
              onClick={() => handlebuttons("Bathroom Accessories")}
            >
              Bathroom Accesories
            </button>
            <button
              className={
                active == "Decor"
                  ? "borde-solid border-[1px] my-6 mx-4 bg-[#47367cec] text-white"
                  : "borde-solid border-[1px] my-6 mx-4 hover:bg-[#47367cec] hover:text-white"
              }
              onClick={() => handlebuttons("Decor")}
            >
              Decor
            </button>
            <button
              className={
                active == "Candle Holders"
                  ? "borde-solid border-[1px] my-6 mx-4 bg-[#47367cec] text-white"
                  : "borde-solid border-[1px] my-6 mx-4 hover:bg-[#47367cec] hover:text-white"
              }
              onClick={() => handlebuttons("Candle Holders")}
            >
              Candle Holders
            </button>
          </div>
          <div></div>
        </div>
        <div className='  grid grid-cols-[250px_1340px_250px]'>
          <div className=''></div>
          <div className=' grid grid-cols-2 gap-2'>
            <div className=' '>{handlecurrent(current, "image")}</div>

            <div>{handlecurrent(current, "carrousel")}</div>
          </div>
          <div className=' '></div>
        </div>
      </div>
    </div>
  );
}
