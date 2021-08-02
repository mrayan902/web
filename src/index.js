import React from "react";
import ReactDOM from "react-dom" ;
import Card from "./Card.jsx";
import "./index.css";
import Sdata from "./Sdata.jsx";

// function ncard(val){
  // console.log(val);
  

// }


ReactDOM.render(
  <>
  <h1 className="heading_style"> List of top 6 Images in 2020 </h1>

  
{Sdata.map((val,index) => {
  console.log(index);
  return(
    <Card
    key={val.id}
 imgsrc={val.imgsrc}
 title={val.title}
 sname={val.sname}
 link={val.links}
 />

  );
})}


</>,
  document.getElementById("root")
  );