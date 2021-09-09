import React from "react";
import Button from "./Button";
import {NavLink} from 'react-router-dom';


const TopBar = () => {
  
  

  return (
    
    <header className="header" style={styles.header}>
      <div style={styles.div}>
      <div >
        <NavLink to="/">
          <img
            alt={"logo"}
            src="/favicon-196x196.png"
            style={{ maxHeight: 40,}}
          />
        </NavLink>
      </div>
      {/* <div style={{ color: "#fff", fontSize: 16 }}>
        {"Geeks of Kolachi"}
      </div> */}
      </div>
      <div style={{ paddingRight: 20 }}>
      

      <NavLink style={{padding : "22px 30px 16px 30px", }} className=" white t-decoration-none  f-family-monospace" activeClassName="active-menu" exact to='/'>Burger Builder</NavLink>
      <NavLink style={{padding : "22px 30px 16px 30px", }} className=" white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/userLogin'>Login</NavLink>

        
      </div>
      
    </header>
  );
}

const styles = {
  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "space-between"
  },
  header: {
    height: 60,
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent : "space-between",
    backgroundColor: "#703B09",
    boxSizing : "border-box"
  },
};


export default TopBar;