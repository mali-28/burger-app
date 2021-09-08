import React, {useContext } from "react";
import Count from  './Count';
import {useHistory} from 'react-router-dom';

const HomeContent = () => {
  const history = useHistory();

  return (
    <>
    <div className="min-h-50 d-flex j-content-center pt-5">
      <div className="w-40 ">

      <div className="burger-top d-flex">
          <div className="bg-white h-4 w-08 ml-6 rotate-r-60 b-rad-5 box-shadow-gray"></div>
          <div className="bg-white h-4 w-08 ml-6 mt-4 rotate-l-50 b-rad-5 box-shadow-gray"></div>
          <div className="bg-white h-4 w-08 ml-6 rotate-l-120 b-rad-5 box-shadow-gray"></div>
          <div className="bg-white h-4 w-08 ml-6 mt-3 rotate-l-30 b-rad-5 box-shadow-gray"></div>
          <div className="bg-white h-4 w-08 ml-6 mt-2 rotate-r-30 b-rad-5 box-shadow-gray"></div>
        </div>

        <div className=" d-flex j-content-center"><h1 >No Ingrediant Added</h1></div>


        <div className="burger-bottom ">
        </div>



      </div>
    </div>
    <div className="bg-yellow pt-5 pb-5">
      <div className="w-26 m-0-auto t-center">
      <p className="f-2">Current price</p>

        <div  className="w-26">
      
          <Count title="Lettuce"/>
          <Count title="Bacon"/>
          <Count title="Cheese"/>
          <Count title="Meat"/>

          <button onClick={()=>{ history.replace('auth')  }} className="w-80per f-2 p-1 mt-2 text-capitalize f-family-monospace bg-lite-yellow">Sign up to order</button>
          </div> 

        </div>

      </div>
    </>
  );
}

export default HomeContent;
