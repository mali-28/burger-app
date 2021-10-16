import React from "react";
import { connect } from "react-redux";
const Count = (props) => {
    return (
        <>
            <div style={{ justifyContent: "space-between", height: 40, }} className="p-1 d-flex">
                <div className="mt-05"><span className="f-family-cursive">{props.title}</span></div>
                <div>
                    <button onClick={() => {
                        props.decrement(props.title);
                    }}
                    style={{background : !props.counter[props.title]? "#D8AC68" : "#df7f09", cursor : props.counter[props.title]? "pointer" : "not-allowed"}} className="mr-1 p-05-2  br-none  f-family-monospace b-1-brown white" disabled={props.title && !props.counter[props.title]}>Less</button>

                    <i className="mr-1">{props.counter[props.title]}</i>

                    <button 
                    onClick={() => {
                        props.increment(props.title);
                    }}
                    className="p-05-2  br-none f-family-monospace b-1-brown bg-brown cursor-pointer white">More</button>
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

export default returnedFunction( Count);