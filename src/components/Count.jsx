import React from "react";
import { connect } from "react-redux";
const Count = (props) => {
    return (
        <>
                <td className=" f-family-cursive">{props.title}</td>
                <td>{`$${props.price}`}</td>
                <td>
                  <tr>
                    <td>
                    <button onClick={() => {
                        props.decrement(props.title,props.price);
                    }}
                    style={{background : !props.counter[props.title]["number"]? "#D8AC68" : "#df7f09", cursor : props.counter[props.title]["number"]? "pointer" : "not-allowed"}} className="mr-1 p-05-2  br-none  f-family-monospace b-1-brown white" disabled={!props.counter[props.title]["number"]}>Less</button>
                </td>
                <td>
                    <i className="mr-1">{props.counter[props.title]["number"]}</i>
                </td>
                <td>
                    <button 
                    onClick={() => {
                        props.increment(props.title,props.price);
                    }}
                    className="p-05-2  br-none f-family-monospace b-1-brown bg-brown cursor-pointer white">More</button>
                    </td>
                    </tr>
                </td>
                

        </>

    );
}
const mapStateToProps = (state) => {
    return { counter: state };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      increment: (key, price) => {
        dispatch({ type: "INCREMENT", payload : {title : key, price} });
      },
      decrement: (key,price) => {
        dispatch({ type: "DECREMENT", payload : {title: key, price}});
      },
    };
  };

  const returnedFunction = connect(mapStateToProps, mapDispatchToProps);

export default returnedFunction( Count);