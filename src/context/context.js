import React, { createContext,useState } from "react";

const loginContext = createContext(false);

const Context = (props) =>{
    const [data, setData] = useState([]);

    const [login, setLogin] = useState(JSON.stringify(localStorage.getItem("Islogin")));


   

return<>
<loginContext.Provider value={{login,setLogin, data, setData}}>
    {props.children}
</loginContext.Provider></>

}

export default Context;
export {loginContext};