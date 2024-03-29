import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { loginContext } from "../context/context";

const TopBar = () => {

  const { login, setLogin,setUser } = useContext(loginContext);


  const func = () =>{
    if (!login) {
      return  <NavLink style={{ padding: "22px 30px 16px 30px", }} className=" white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/login'>Login</NavLink>
    }else{
          return <><NavLink  className="p-022-3-016-3 white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/order'>Order</NavLink>
            <NavLink onClick={()=>{setLogin(localStorage.removeItem("Islogin"), setUser(localStorage.removeItem("__USER__")))}}  className="p-022-3-016-3 white t-decoration-none  f-family-monospace" exact activeClassName="active-menu" exact to='/login'>Logout</NavLink> </>

    }
  }
  return (

    <header className="header" style={styles.header}>
      <div style={styles.div}>
        <div >
          <NavLink to="/">
            <img
              alt={"logo"}
              src="/logo.jpg"
              className="h-4 ml-2 br-2"
            />
          </NavLink>
        </div>
      </div>
      <div className="pr-2" >


        <NavLink className="p-022-3-016-3 white t-decoration-none  f-family-monospace" activeClassName="active-menu" exact to='/'>Burger Builder</NavLink>
       
          {func()}


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