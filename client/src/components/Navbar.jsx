import React, { useEffect, useState } from "react";
import cart from "../cart2.png";
import Search from "./Search";
import logo from "../7.png";
import cartsmall from "../cartsmall.png";
import cartbig from "../cartbig.png";
import user from "../user2.png";
import logout from "../logout.png";

function Navbar({ products, quantity, setcurrent, isloggedIn }) {
  const [isShown, setIsShown] = useState(false);
  const [items, setitems] = useState(0);
  const [isAccountClicked, setIsAccountClicked] = useState(false);

  useEffect(() => {
    if (quantity) {
      setitems(quantity);
    }
  });

  console.log(isloggedIn);

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

  return (
    <div>
      <nav className=''>
        <div className=' topnav  bg-white h-[9vh] flex justify-between '>
          <div className='search-dropdown  '>
            <Search
              search={search}
              setsearch={setsearch}
              onsearch={onSearchChange}
            />
            <div className=' kon   max-h-[30vh]  overflow-x-clip flex-wrap  overflow-auto ml-[4vw]  relative z-10'>
              {search === ""
                ? null
                : searchData.map((item) => {
                    return (
                      <div className=' '>
                        <div className='dropdown  flex bg-white w-[22vw]    pt-1 h-[60px] '>
                          <div className=' flex ml-2 h-[50px] w-[50px] items-center'>
                            <img
                              src={
                                "https://decora-backend.onrender.com" +
                                item.images[0]
                              }
                              alt=''
                              className='max-h-[50px]  max-w-[50px]  '
                            />
                          </div>
                          <div className=' flex  w-[33vw] justify-between h-[50px] items-center  '>
                            <h1 className=' ml-5'>{item.name}</h1>
                            <h1 className=' me-2 text-red-500'>
                              Ksh {item.price}
                            </h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className=' logo  ml-[]'>
            <a href='/'>
              <img
                src={logo}
                alt=''
                className=' h-[18vh] w-[10vw] mt-[-40px] '
              />
            </a>
          </div>

          {isloggedIn == true ? (
            <div className='signup flex justify-evenly items-center w-[16vw] mr-10 ml-20 '>
              <div className='grid grid-cols-[30px_32px]'>
                <img
                  src={user}
                  alt=''
                  className='cursor-pointer grid self-center mb-[-6px] '
                  onClick={() => {
                    setIsAccountClicked(!isAccountClicked);
                  }}
                />
                <div className='grid cart  '>
                  <a href='/cart' className='grid place-content-center'>
                    <img src={cartsmall} alt='' className='cursor-pointer ' />
                  </a>
                  <h1 className='text-xs grid place-content-center rounded-full pt-[1px]   w-[16px] h-[15px] bg-[#cbc0fa] mb-[-5px]'>
                    {items}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className='signup flex justify-evenly items-center w-[16vw] mr-10 ml-20 '>
              <a href='/signupOrLogin'>
                <button className='button-23 my-7 hover:bg-[#101011] hover:text-white '>
                  {" "}
                  Sign-in
                </button>
              </a>
            </div>
          )}
        </div>

        <div className=' lower-nav relative z-2 h-[6vh] w-full flex justify-evenly items-center px-[9%] text-white bg-black font-semibold text-md font-serif '>
          {uniqueCategories
            ? uniqueCategories.map((item) => {
                // let name = item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)

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
            : null}
        </div>

        {isAccountClicked ? (
          <div className='grid absolute  top-[7%] left-[88.7%] '>
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
    </div>
  );
}

export default Navbar;
