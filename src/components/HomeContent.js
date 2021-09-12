import React, { useContext } from "react";
import Count from './Count';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { loginContext } from "../context/context";
import { products } from "../products/products";
import DialogBox from "./DialogBox";

const HomeContent = (props) => {
  const history = useHistory();

  const { login } = useContext(loginContext);
  const [open, setOpen] = React.useState(false);

  const bacon = Array.from(Array(props.counter.Bacon).keys())
  const lettuce = Array.from(Array(props.counter.Lettuce).keys())
  const cheese = Array.from(Array(props.counter.Cheese).keys())
  const meat = Array.from(Array(props.counter.Meat).keys())



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  console.log("counter props main", props.counter)
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

          {(!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? <div><h1 className="t-center">No Ingrediant Added</h1></div> : <div >
            <div>

              {lettuce?.map((val, id) => { return <div key={id} className="w-40 h-05 bg-lettuce m-02"></div> })}
              {bacon?.map((val, id) => { return <div key={id} className="w-40 h-05 bg-bacon m-02"></div> })}
              {cheese?.map((val, id) => { return <div key={id} className="w-40 h-05 bg-cheese m-02"></div> })}
              {meat?.map((val, id) => { return <div key={id} className="w-40 h-05 bg-meat m-02"></div> })}
            </div>
          </div>}


          <div className="burger-bottom ">
          </div>



        </div>
      </div>
      <div className="bg-yellow pt-5 pb-5">
        <div className="w-40 m-0-auto t-center">
          <p className="f-2">Current price:  ${3+0}</p>

          <div className="w-40">
            <table>
              <thead>
                <tr className="head">
                <td>Items</td>
                <td>Price</td>
                <td>Quantity</td>
                </tr>
              </thead>         
              <tbody>    {products.map((val) => {
                return <tr className="body" key={val.id}>
                  <Count title={val.title} price={val.price} />
                </tr>

              })}
              </tbody>
            </table>

            {!login ? <button
              style={{
                background: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "#83591a" : "#D8AC68",
                cursor: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "not-allowed" : "pointer"
              }}
              disabled={!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese}
              onClick={() => { history.replace('userLogin') }}
              className="w-80per b-1-brown white f-2 p-1 mt-2 text-capitalize f-family-monospace">Sign in to order
            </button> :
              <button style={{ background: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "#83591a" : "#D8AC68", cursor: (!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese) ? "not-allowed" : "pointer" }}
                disabled={!props.counter.Bacon && !props.counter.Lettuce && !props.counter.Meat && !props.counter.Cheese}
                onClick={handleClickOpen}
                className="w-80per b-1-brown white f-2 p-1 mt-2 text-capitalize f-family-monospace">Order Now
              </button>}
          </div>

        </div>

      </div>

      <DialogBox onClose={handleClose} open={open} onClick={handleClose} lettuce={props.counter.Lettuce} bacon={props.counter.Bacon} meat={props.counter.Meat} cheese={props.counter.Cheese} remove={() => { props.remove() }} />
    </>
  );
}
const mapStateToProps = (state) => {
  return { counter: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (key) => {
      dispatch({ type: "INCREMENT", payload: key });
    },
    decrement: (key) => {
      dispatch({ type: "DECREMENT", payload: key });
    },
    remove: () => {
      dispatch({ type: "REMOVE" });
    },
  };
};

const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction(HomeContent);

