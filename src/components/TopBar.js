import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { loginContext } from "../context/context";

const TopBar = () => {

  const { login, setLogin } = useContext(loginContext);

  return (

    <header className="header" style={styles.header}>
      <div style={styles.div}>
        <div >
          <NavLink to="/">
            <img
              alt={"logo"}
              src="/favicon-196x196.png"
              style={{ maxHeight: 40, }}
            />
          </NavLink>
        </div>
      </div>
      <div style={{ paddingRight: 20 }}>


        <NavLink  className="p-022-3-016-3 white t-decoration-none  f-family-monospace" activeClassName="active-menu" exact to='/'>Burger Builder</NavLink>
        {!login ? <NavLink  className="p-022-3-016-3 white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/login'>Login</NavLink> :
          <>
            <NavLink  className=" p-022-3-016-3 white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/order'>Order</NavLink>
            <NavLink onClick={()=>{setLogin(localStorage.removeItem("Islogin"))}}  className="p-022-3-016-3  white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/login'>Logout</NavLink>
          </>}



      </div>

    </header>
  );
}

const styles = {
  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    height: 60,
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#703B09",
    boxSizing: "border-box"
  },
};


export default TopBar;