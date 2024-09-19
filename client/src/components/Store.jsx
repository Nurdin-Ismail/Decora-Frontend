import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { action } from "@storybook/addon-actions";
import filter from "../filter2.png";
import x from "../x.png";
import Modal from "./Modal";
import CartModal from "./CartModal";
import Filter from "./Filter";
import arrow from "../arrow1.png";

import Card from "./Card";

import Slider from "@mui/material/Slider";
import Skeleton from "@mui/material/Skeleton";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Store(props) {
  const params = useParams();
  const [display, setdisplay] = useState();
  const [backup, setbackup] = useState();
  let productso = props.products;
  const [icon, seticon] = useState(filter);
  const [filtero, setfilter] = useState(false);
  const [header, setheader] = useState([]);
  const [child_categ, setchild_categ] = useState();
  const [sibling_categ, setsibling_categ] = useState();
  const [clicked, setclicked] = useState();
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0);

  useEffect(() => {
    let k = (max * 2) / 4;

    let l = (max * 3) / 4;

    setValue([k, l]);
  }, [max]);

  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  useEffect(() => {
    if (props.products) {
      if (params.sub_categ && params.sub_categ != "-") {
        console.log(props.products);
        let filtered = props.products.filter(
          (item) => item.sub_category == params.sub_categ
        );

        console.log(filtered);
        setdisplay(filtered);
        setbackup(filtered);

        setheader(["Home", arrow, params.category, arrow, params.sub_categ]);
        let child = filtered.map((item) => item.tag);
        let unique = [...new Set(child)];
        setchild_categ(unique);
        let backup2 = [...filtered];

        backup2.sort((a, b) => a.price - b.price);
        setmin(backup2[0]["price"]);
        let backup3 = [...filtered];

        backup3.sort((a, b) => b.price - a.price);
        setmax(backup3[0]["price"]);
      } else {
        let filtered = props.products.filter(
          (item) => item.category == params.category
        );
        console.log(filtered);
        setdisplay(filtered);
        setbackup(filtered);
        setheader(["Home", arrow, params.category]);
        let child = filtered.map((item) => item.sub_category);
        let unique = [...new Set(child)];
        setchild_categ(unique);

        let backup2 = [...filtered];

        backup2.sort((a, b) => a.price - b.price);
        setmin(backup2[0]["price"]);

        let backup3 = [...filtered];

        backup3.sort((a, b) => b.price - a.price);
        setmax(backup3[0]["price"]);
      }
    }
  }, [productso]);

  console.log(header);
  console.log(child_categ);

  if (display) {
    console.log(display);
  }

  function handleIconChange() {
    if (icon == filter) {
      seticon(x);
    } else {
      seticon(filter);
    }
  }

  let modaldata;
  if (props.products) {
    modaldata = props.products.filter((item) => item.id == props.cardinfo);
  }

  function handlesort(e) {
    console.log(e);
    if (display) {
      if (e === "Default Sorting") {
        if (backup) {
          setdisplay(backup);
        }
      } else if (e === "Sort by latest") {
        function handleNew() {
          const arr = [...display];

          arr.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
          });
          return arr;
        }

        console.log(handleNew());

        setdisplay(handleNew());
      } else if (e === "Sort by price: High-Low") {
        let backup2 = [...backup];

        backup2.sort((a, b) => b.price - a.price);
        setdisplay(backup2);
      } else if (e === "Sort by price: Low-High") {
        let backup2 = [...backup];

        backup2.sort((a, b) => a.price - b.price);
        setdisplay(backup2);
      }
    }
  }

  function handleFilterbyPrice() {
    let filteredbyprice;
    if (display) {
      filteredbyprice = backup.filter(
        (item) => item.price < value[1] && item.price > value[0]
      );
      console.log(filteredbyprice, min, max);

      if (filteredbyprice) {
        setdisplay(filteredbyprice);
      }
    }
  }

  return (
    <div className=' filtery grid grid-flow-row '>
      <h1 className='grid place-self-center my-10 '>
        {header && header.length << 3 ? (
          <h1 className=' flex place-items-center text-2xl font-thin '>
            <a href='/'>{header[0]}</a>{" "}
            <span className='mx-5'>
              <img src={header[1]} alt='' />
            </span>{" "}
            <a href={"/product-category/" + header[2] + "/-"}>{header[2]}</a>{" "}
            <span className='mx-5'>
              <img src={header[3]} alt='' />
            </span>{" "}
            <a href={"/product-category/" + header[2] + "/" + header[4]}>
              {header[4]}
            </a>
          </h1>
        ) : null}

        {/* {header && header.length >> 4 ? 
        <h1 className=' flex place-items-center '>
            {header[0]}  <span className='mx-5'><img src={header[1]} alt="" /></span>    {header[2]} <span className='mx-5'><img src={header[3]} alt="" /></span>  {header[4]}
        </h1>
        

        : null} */}
      </h1>

      {/* Filter */}

      <div className='  mt-[2vh]  flex justify-between mx-[125px] mb-10'>
        <div
          className=' select-none w-[5.6vw] rounded-md flex items-center justify-center bg-gray-100 '
          onClick={() => {
            handleIconChange();
            setfilter(!filtero);
          }}
        >
          <div className=' w-[20px] '>
            <img src={icon} alt='' className=' icon ' />
          </div>

          <h1 className='product-title font-bold ml-1'>Filter</h1>
        </div>

        <div className=' w-[12vw] bg-gray-100 rounded-md  flex items-center justify-center'>
          <h1></h1>

          <select
            name=''
            id=''
            className='minimal  bg-gray-100 w-[12vw] pl-4    text-sm h-[3.5vh]'
            onChange={(e) => handlesort(e.target.value)}
          >
            <option value='Default Sorting' className=' text-sm'>
              Default Sorting
            </option>
            <option value='Sort by latest' className=''>
              Sort by latest
            </option>
            <option value='Sort by price: High-Low' className=''>
              Sort by price: High-Low
            </option>
            <option value='Sort by price: Low-High' className=''>
              Sort by price: Low-High
            </option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className='besto grid grid-flow-col grid-cols-[1fr_14fr_1fr]  '>
        <div className='grid'></div>

        <div className='  grid grid-flow-col place-content-center  '>
          {filtero ? (
            <div className=' grid gap-[6px]  filter-div mr-[10px] '>
              <div
                className=' grid place-content-center border-[1px] border-black hover:border-white w-[285px] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'
                onClick={() => {
                  setclicked("Price Range");
                }}
              >
                Price Range
              </div>

              {clicked == "Price Range" ? (
                <div>
                  <div className='w-[95%] ml-[8px]'>
                    <Slider
                      value={value}
                      min={min}
                      max={max}
                      onChange={handleChange}
                      size='small'
                      aria-label='Small'
                      color='black'
                    />
                  </div>

                  <div className='flex justify-between items-center'>
                    <button
                      className=' best mr-2 border-[2px] border-gray-300 px-3 py-1 text-md hover:border-black rounded-lg'
                      onClick={() => handleFilterbyPrice()}
                    >
                      Confirm
                    </button>

                    <h1 className='text-sm'>
                      Price:Ksh{value[0].toLocaleString()} — Ksh
                      {value[1].toLocaleString()}
                    </h1>
                  </div>
                </div>
              ) : null}

              <div
                className=' grid place-content-center border-[1px] border-black hover:border-white w-[285px] h-[60px] cursor-pointer hover:bg-[#2f215ecc] hover:text-white'
                onClick={() => setclicked("Categories")}
              >
                Categories
              </div>
              {clicked == "Categories" ? (
                <div className='besto grid grid-flow-row ml-6'>
                  {child_categ
                    ? child_categ.map((item) => {
                      return (
                        <div className=''>
                          <li>
                            <a
                              href={
                                "/product-category/" +
                                params.category +
                                "/" +
                                item
                              }
                              className=' hover:text-[#552ae0fb]'
                            >
                              {item}
                            </a>
                          </li>
                        </div>
                      );
                    })
                    : null}
                </div>
              ) : null}
            </div>
          ) : null}


          <div className=' grid grid-cols-4 gap-10 mb-10'>
            {display
              ? display.map((item) => {
                return (
                  <div className=' '>
                    <Card
                      key={item.id}
                      img={"http://127.0.0.1:5000" + item.images[1]}
                      name={item.name}
                      price={item.price.toLocaleString()}
                      id={item.id}
                      setcardinfo={props.setcardinfo}
                      handleis={props.handleis}
                      onClickItem={action("click")}
                      is={props.is}
                      type={filtero ? null : "large"}
                    />
                  </div>
                );
              })
              : [...Array(8)].map((item) => {
                return (
                  <div className='bg-white grid '>
                    <div className='bg-white rounded-sm   flex flex-col gap-[5px] mb-6'>
                      <Skeleton variant='rounded' width={388} height={400} />
                      <Skeleton variant='caption' width={180} />
                      <Skeleton variant='caption' width={100} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className='grid '></div>
      </div>

      {props.is ? (
        <Modal
          setis={props.setis}
          data={modaldata}
          is={props.is}
          setadd={props.setadd}
          user={props.user}
          cart={props.cart}
          patched={props.updated}
          setpatched={props.setupdated}
        />
      ) : null}

      {props.add ? (
        <CartModal
          setadd={props.setadd}
          count={props.counter}
          product={modaldata[0]}
        />
      ) : null}
    </div>
  );
}
export default Store;
