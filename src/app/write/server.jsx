'use client'
import React, { useState } from "react";

const gadgetData = async () => {
  const resp = await fetch(`http://localhost:3000/api/gadgets`, {cache: "no-store"});

  if(!resp.ok){
    throw new Error("Failed")
  }

  return resp.json()
}
const Write = async() => {

  const [category, setCategory] = useState({
    title: "",
    category: "",
    content: "",
    rating: 0,
  })

  let tempString = "";


  const getValue = (e) =>{
    tempString = string;
    console.log(tempString);
  }

  const data = await gadgetData();

  console.log(data, 'response');

  return (
    <div className="border w-screen h-screen grid grid-rows-6 justify-center  mt-50">
      <div className="border w-screen category-container row-span-2 grid justify-center content-center">
        <div className="flex flex-col gap-4">
          <button  onClick={() => getValue('Phones')} >Phone</button>
          <button  onClick={() => getValue('Laptops')} >Laptop</button>
          <button  onClick={() => getValue('Computer Gears')} >Computer Gear</button>
        </div>
        {/* <div>
          {data.map((item) =>(
            <div>{item.name}</div>
          ))}
        </div> */}
      </div>
      <div className="row-span-1 grid justify-center content-center">
        rating
      </div>
      <div className="row-span-3 grid justify-center content-center">
        Content
      </div>
    </div>
  );
};

export default Write;
