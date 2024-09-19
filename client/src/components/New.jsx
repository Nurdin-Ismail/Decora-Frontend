import React, { useState, useEffect } from "react";
import Card from "./Card";
import "animate.css";
import { action } from "@storybook/addon-actions";

import Skeleton from "@mui/material/Skeleton";

export default function (props) {
  const [newest, setnewest] = useState();

  useEffect(() => {
    if (props.products) {
      let productso = [...props.products];
      productso.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // Set the 20 most recent products
      setnewest(productso.slice(0, 20));

      console.log(newest);
    }
  }, [props.products]);

  if (newest) {
    props.setcards2(newest.length);
  }

  return (
    <div className=' h-[100%] mx-[130px] w-[80%] mt-10 overflow-x-hidden overflow-y-clip'>
      <div
        className='flex best'
        style={{ transform: `translateX(-${props.slide2 * 18}vw)` }}
      >
        {newest ? (
          newest.map((item) => {
            return (
              <div className=' ml-[20px]'>
                <Card
                  key={item.id}
                  img={"http://127.0.0.1:5000" + item.images[1]}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  setcardinfo={props.setcardinfo}
                  handleis={props.handleis}
                  onClickItem={action("click")}
                  is={props.is}
                />
              </div>
            );
          })
        ) : (
          <div className='bg-white flex gap-5'>
            {[...Array(4)].map((item) => {
              return (
                <div className='bg-white rounded-sm   flex flex-col gap-[5px]'>
                  <Skeleton
                    animation='wave'
                    variant='rounded'
                    width={317}
                    height={317}
                  />
                  <Skeleton animation='wave' variant='caption' width={180} />
                  <Skeleton animation='wave' variant='caption' width={100} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
