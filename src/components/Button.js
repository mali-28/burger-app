import React  from "react";

const styles = {
  button : {
    border: "0",
    margin: "8px",
    padding: "12px 30px",
    fontSize: "12px",
    borderRadius: "5px",
    cursor : "pointer",
  },
};
const Button = (props) => {
    return (
      <button onClick={props.click}  style={ {...styles.button, ...props.style}} className={props.className} >
        {props.children}
      </button>
    );
  }

  export default Button;
