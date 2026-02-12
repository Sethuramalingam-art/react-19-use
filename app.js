import "./App.css";
import React, { useState, Suspense } from "react";
import FeatureFlagProvider from "../src/FeatureFlag";
import Example from "./Example";

import MultistepComp from "./MultistepComp";
import AutoComplete from "./AutoComplete";
import InfiniteScroll from "./InfiniteScroll";
import CustomSwitch from "./CustomSwitch";
import CustomCase from "./CustomCase";
import DefaultCase from "./DefaultCase";
import Pagination from "./Pagination";
import Timer from "./Timer";
import ClockTimer from "./ClockTimer";
import ContinuePress from "./ContinuePress";
import TodoList from "./TodoList";
import ResponsiveSlide from "./ResponsiveSlide";
import Traffic from "./Traffic";
import FileExplorer from "./FileExplorer";
import Cursor from "./Cursor";
import Login from "./Login";
import BatchApi from "./BatchApi";
import ImageZoom from "./ImageZoom";
import ScrollIndicator from "./ScrollIndicator";
import GroupAccordian from "./GroupAccordian";
import Fetch from "./Fetch";

function App() {
  // const [arr, setArr] = useState([1,2,3]);
  // const [val, setVal] = useState(4);
  // const click = () => {
  //   console.log(arr)
  //   setArr([...arr, 4])
  //   setVal(val+1);
  //   setVal(val+1);
  //   setVal( val+1);
  //   setVal(val+1);
  //   setVal(val+1);
  //   setVal( val+1);
  //   console.log(val)
  // }
  // return (
  //   <div className="App">
  //     {arr.map((a) => {
  //       return <>{a}</>
  //     })}
  //     <button onClick={click}>click</button>
  //   </div>
  // );
  // return <FeatureFlagProvider>
  //   <Example/>
  // </FeatureFlagProvider>
  // return <MultistepComp list="5"></MultistepComp>
  // return <AutoComplete></AutoComplete>
  // return <InfiniteScroll></InfiniteScroll>;
  // return (
  //   <>
  //     <CustomSwitch value="30">
  //       <CustomCase value={(e) => e < 10}>
  //         <div>Hello 20</div>
  //       </CustomCase>
  //       <CustomCase value="20">This is 20</CustomCase>
  //       <CustomCase value="30">This is 30</CustomCase>
  //       <DefaultCase>This is Default Case</DefaultCase>
  //     </CustomSwitch>
  //   </>
  // );
  // return <Pagination></Pagination>;
  // return <Timer></Timer>;
  // return <ClockTimer></ClockTimer>;
  // return <ContinuePress></ContinuePress>;
  // return <TodoList></TodoList>;
  // return <ResponsiveSlide></ResponsiveSlide>;
  // return <Traffic></Traffic>;
  // return <FileExplorer></FileExplorer>;
  // return <Cursor></Cursor>;
  // return <Login></Login>;
  // return <BatchApi></BatchApi>;
  // const url =
  //   "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg";
  // return <ImageZoom url={url}></ImageZoom>;
  // return <ScrollIndicator></ScrollIndicator>;
  // const list = [
  //   {
  //     id: 1,
  //     name: "Group 1",
  //     parentId: null,
  //   },
  //   {
  //     id: 2,
  //     name: "subGroup 1.1",
  //     parentId: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "subGroup 1.2",
  //     parentId: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "Group 2",
  //     parentId: null,
  //   },
  //   {
  //     id: 5,
  //     name: "subGroup 2.1",
  //     parentId: 4,
  //   },
  //   {
  //     id: 6,
  //     name: "subGroup 2.2",
  //     parentId: 4,
  //   },
  //   {
  //     id: 7,
  //     name: "Group 3",
  //     parentId: null,
  //   },
  //   {
  //     id: 8,
  //     name: "subGroup 3.1",
  //     parentId: 7,
  //   },
  //   {
  //     id: 9,
  //     name: "subGroup 3.2",
  //     parentId: 7,
  //   },
  // ];
  // const getChildren = (id, list) => {
  //   const items = list.filter((e) => {
  //     return e.parentId === id;
  //   });
  //   return items;
  // };
  // const sampleList = getChildren(null, list);
  // return (
  //   <>
  //     {sampleList.map((e) => (
  //       <GroupAccordian key={e.id} list={e} originalList={list} level={0} />
  //     ))}
  //   </>
  // );

  // const handleClick = () => {
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   setVal(val + 1);
  //   setVal(val + 1); // react batching
  // };
  // const [val, setVal] = useState(0);

  const getUsers = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/");
    if (!response.ok) throw new Error("Failed");
    return response.json();
  };

  const dataListPromise = getUsers();
  return (
    <>
      <Suspense fallback={<p>Loading products...</p>}>
        <Fetch dataListPromise={dataListPromise} />
      </Suspense>
    </>
  );
}

export default App;
