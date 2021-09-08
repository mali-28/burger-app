import React, { createContext, useEffect, useState } from "react";
import {api} from './utils'

const loginContext = createContext(false);

const Context = (props) =>{
    const [data, setData] = useState([]);

    const [login, setLogin] = useState(localStorage.getItem("Islogin"));


    const getData = async () => {
        const response = await api()
        setData(response.results)
    }


    useEffect(() => {
        if(!data.length) getData();
    }, [])

return<>
<loginContext.Provider value={{login,setLogin, data, setData}}>
    {props.children}
</loginContext.Provider></>

}

export default Context;
export {loginContext};