import React from 'react'
import main from '../../api/gadgets/route'

const Gadgets = async() => {

    const getData = async () => {
  const resp = await fetch("http://localhost:3000/api/gadgets", {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed");
  }

  return resp.json();
};

  const data = await getData();
  console.log(data);

    
  return (
    <div>
        {data?.gadgets?.map((item) =>(
            <div>{item.name}</div>
        ))}
    </div>
  )
}

export default Gadgets