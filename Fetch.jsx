"use client";
import React, { use } from "react";

const Fetch = ({ dataListPromise }) => {
  let dataList = [];

  dataList = use(dataListPromise);
  console.log(dataList);
  return (
    <div>
      {dataList.map((item, index) => (
        <div key={item.id || index}>
          {item.title} - ${item.price}
        </div>
      ))}
    </div>
  );
};

export default Fetch;
