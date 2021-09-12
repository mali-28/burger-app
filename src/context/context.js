import React, { createContext,useEffect,useState } from "react";
import { getLocalStorage } from "../utils/utils";

const loginContext = createContext(false);

const Context = (props) =>{
    const [data, setData] = useState(false);
    
    
    const [login, setLogin] = useState(getLocalStorage("Islogin"));
    console.log(getLocalStorage("Islogin"))
    
    console.log("loginlogin", login)

    useEffect(()=>{
        
        const token = getLocalStorage("Islogin");
        console.log("tokentoken",token)
        
        setLogin(token);
        
    },)


return<>
<loginContext.Provider value={{login,setLogin, data, setData}}>
    {props.children}
</loginContext.Provider></>

}

export default Context;
export {loginContext};