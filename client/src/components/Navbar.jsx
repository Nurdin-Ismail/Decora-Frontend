import React, { useEffect, useState } from "react";
import searcho from "../search.svg";
import user from "../user.svg";
import signup from "../signup.svg";
import cart from "../cart.svg";
import logo from "../logo.svg";
import logout from "../logout.png";

import Search from "./Search";

import Skeleton from "@mui/material/Skeleton";

function Navbar({ products, quantity, setcurrent, isloggedIn }) {
  const [isShown, setIsShown] = useState(false);
  const [items, setitems] = useState(0);
  const [isAccountClicked, setIsAccountClicked] = useState(false);
  const [is, setis] = useState(false);

  useEffect(() => {
    if (quantity) {
      setitems(quantity);
    }
  });

  // console.log(isloggedIn);

  function handleIcon() {
    if (isloggedIn) {
      return user;
    } else {
      return signup;
    }
  }

  function getUniqueCategories(products) {
    let categories = [];
    if (products) {
      products.map((product) => {
        if (categories.includes(product.category) == false) {
          categories.push(product.category);
        }
      });
    }

    return categories;
  }

  let mostSearchedProducts;
  if (products) {
    mostSearchedProducts = [products[55], products[33]];
  }

  // Example usage
  let uniqueCategories = getUniqueCategories(products);
  const [search, setsearch] = useState("");

  function onSearchChange(value) {
    setsearch(value);
    console.log(search);
  }

  let searchData;
  if (products) {
    searchData = products.filter((item) => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
  }
  // console.log(searchData);

  let categ = [1, 2, 3, 4, 5, 6];

  // console.log(uniqueCategories);

  return (
    <div>
      <nav className=''>
        <div className=' topnav  bg-white h-[9vh] grid grid-cols-[15%_85%] mx-[210px]'>
          <div>
            <img src={logo} alt='' />
          </div>

          <div className=' grid grid-cols-2'>
            <div className=' grid center-end  '>
              <ul className='flex gap-10 text-lg montserrat'>
                <li
                  className=' cursor-pointer'
                  onClick={() => {
                    window.location.replace("/");
                  }}
                >
                  Home
                </li>
                <li className=' cursor-pointer'>About</li>
                <li className=' cursor-pointer'>Contact</li>
              </ul>
            </div>
            <div className=' grid center-end mr-10 '>
              <ul className='flex h-12 gap-10 place-items-center'>
                <li>
                  <img
                    src={handleIcon()}
                    alt=''
                    className='cursor-pointer h-[20px]'
                    onClick={() => {
                      if (isloggedIn) {
                        setIsAccountClicked(!isAccountClicked);
                      } else {
                        window.location.replace("/signupOrLogin");
                      }
                    }}
                  />
                </li>
                <li>
                  <img
                    src={searcho}
                    alt=''
                    className='cursor-pointer h-[22px]'
                    onClick={() => setis(!is)}
                  />
                </li>

                <li className=' grid cart h-12 place-items-center'>
                  <img
                    src={cart}
                    alt=''
                    onClick={() => {
                      if (isloggedIn) {
                        window.location.replace("/cart");
                      } else {
                        window.location.replace("/signupOrLogin");
                      }
                    }}
                    className='cursor-pointer h-[20px] '
                  />
                  <h1
                    className={
                      items
                        ? "text-xs grid place-content-center rounded-full pt-[1px]   w-[16px] h-[15px] bg-[#cbc0fa] mb-[-5px]"
                        : "hidden"
                    }
                  >
                    {items}
                  </h1>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=' lower-nav relative z-2 h-[6vh] w-full flex justify-evenly items-center px-[9%] text-white bg-black font-semibold text-md montserrat '>
          {uniqueCategories.length > 0
            ? uniqueCategories.map((item) => {
                let name1 = item.toLowerCase().split(" ");
                let name2 = name1.map((item1) => {
                  if (item1.length > 1) {
                    let newterm =
                      item1.slice(0, 1).toUpperCase() +
                      item1.toLowerCase().slice(1);
                    return newterm;
                  } else {
                    return item1;
                  }
                });
                name2 = name2.join(" ");

                let name3 = name2;

                return (
                  <a href={"/product-category/" + name3 + "/-"}>
                    <h1 className=''>{name3}</h1>
                  </a>
                );
              })
            : categ.map((item) => {
                return (
                  <div className='bg-black '>
                    <Skeleton
                      sx={{ bgcolor: "grey.800" }}
                      variant='rounded'
                      width={160}
                      height={15}
                    />
                  </div>
                );
              })}
        </div>

        {isAccountClicked ? (
          <div className='grid absolute  top-[7%] left-[79.7%] '>
            <div className=''>
              <div className='absolute grid  w-[160px] top-0 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md shadow-black   z-[2]'>
                <a href='/user'>
                  <h1 onClick={() => setcurrent("Account Information")}>
                    My Profile
                  </h1>
                </a>
                {/* <a href="/user" ><h1 onClick={() => setcurrent('Wishlist')}>Wishlist</h1></a> */}
                <a
                  href='/signupOrLogin'
                  onClick={() => localStorage.setItem("isloggedIn", false)}
                >
                  <h1 className='flex place-items-center gap-1'>
                    Logout{" "}
                    <span>
                      <img src={logout} alt='' className='' />
                    </span>
                  </h1>
                </a>
              </div>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 '>
                <div className='w-6 h-6 bg-white border-t-4 border-l-4 border-transparent transform rotate-45 shadow-sm  shadow-black relative z-[-2]'></div>
              </div>
            </div>
          </div>
        ) : null}
      </nav>

      {is ? (
        <Search
          setis={setis}
          is={is}
          search={search}
          setsearch={setsearch}
          mostSearched={mostSearchedProducts}
          searchData={searchData}
        />
      ) : null}
    </div>
  );
}

export default Navbar;
