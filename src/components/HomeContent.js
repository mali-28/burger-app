import React, {useContext } from "react";
import Count from  './Count';
import {useHistory} from 'react-router-dom';
import { connect } from "react-redux";
const HomeContent = (props) => {
  const history = useHistory();
  console.log("counter props main",props.counter)
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

          <button style={{background: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese)? "#83591a": "#D8AC68", cursor :(!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese)? "not-allowed": "pointer"}} disabled={!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese} onClick={()=>{ history.replace('userLogin')  }} className="w-80per b-1-brown white f-2 p-1 mt-2 text-capitalize f-family-monospace">Sign up to order</button>
          </div> 

        </div>

      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (key) => {
      dispatch({ type: "INCREMENT", payload : key });
    },
    decrement: (key) => {
      dispatch({ type: "DECREMENT", payload : key});
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction( HomeContent);

