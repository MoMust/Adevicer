'use client'
import React, { useState, useEffect } from "react";

const gadgetData = async (category) => {
  const resp = await fetch(`http://localhost:3000/api/gadgets?cat=${category}`, {cache: "no-store"});

  if(!resp.ok){
    throw new Error("Failed")
  }

  return resp.json()
}
const Write = () => {

  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Phones");

  // const [category, setCategory] = useState({
  //   title: "",
  //   category: "",
  //   content: "",
  //   rating: 0,
  // })

  // let tempString = "";


  // const getValue = (e) =>{
  //   tempString = string;
  //   console.log(tempString);
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await gadgetData(selectedCategory);

        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  
    
  }, [selectedCategory])
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Clicked", category);
  };
  

  // const data = await gadgetData();

  console.log(data, 'response');

  return (
    <div className="border w-screen h-screen grid grid-rows-6 justify-center  mt-50">
      <div className="border w-screen category-container row-span-2 grid justify-center content-center">
        <div className="flex flex-col gap-4">
          <button onClick={() => handleCategoryClick("Phones")}>Phone</button>
          <button onClick={() => handleCategoryClick("Laptops")}>Laptop</button>
          <button onClick={() => handleCategoryClick("Computer Gears")}>
            Computer Gear
          </button>
        </div>
        <div>
          {data?.gadgets?.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
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
