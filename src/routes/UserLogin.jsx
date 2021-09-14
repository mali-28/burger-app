import React, {useState, useContext } from "react";
import { NavLink } from 'react-router-dom';
import { loginContext } from "../context/context";
import { useHistory} from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/utils";
import Loader from "../components/Loader";
const UserLogin = () => {
    const [loading, setLoading] = useState(false);
    const {login,setLogin} = useContext(loginContext);
    const [message, setMessage] = useState("");

    const {login,setLogin} = useContext(loginContext);
    const history = useHistory();

    let [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const change = (event) => {
        event.preventDefault();
        let { name, value } = event.target;
        console.log();
        setInputData((preVal) => {
            return { ...preVal, [name]: value }
        })

    }


    function failure(error) {
        document.getElementById('after').innerHTML = "ERROR: " + JSON.stringify(error);
        console.log("ERROR: " + error);
    } 

    const click = () => {

        setLoading((pre)=> !pre);
       
    
        // api fetching

        const url = 'https://bookofpositivity.herokuapp.com/auth/login';
       
        console.log(inputData);



        fetch(url, {
            method: 'Post',
            body: JSON.stringify(inputData),
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization':''
            }
        }).then(res => res.json())
            .then(response => {{setLocalStorage('Islogin' , response.token);
            setLogin(getLocalStorage('Islogin'));
            history.push('/')
            }})
            .catch(error => {
                console.log({error})
                setMessage(error)
            })
            .finally(()=>{
                setLoading((pre)=> !pre);

                setInputData({
                    email: '',
                    password: '',
                })
            })
            

        
    }

    
    return <>


        <div className="w-40 box-shadow-ccc b-1-c9  p-2 m-3-auto d-flex flex-d-column flex-align-center">
            
            {loading? <Loader/> : <><span  className="f-014 mb-2 success">{message}</span>
            <input type="email" onChange={change} name='email' className="input mb-2  f-family-monospace" value={inputData.email} placeholder="E-mail-Address" />
            <input type='password' onChange={change} name='password' className="input mb-2 f-family-monospace" value={inputData.password} placeholder="Password" />
            <button style={{cursor : (!inputData.email || !inputData.password)? "not-allowed" : "pointer"}} onClick={() => { click() }} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 " disabled={!inputData.email || !inputData.password}> Submit</button>
            <NavLink to='/signup' className="f-bold f-family-monospace  bg-white outline-none b-none brown"> Register</NavLink></>}
            
        </div>


    </>
}

export default UserLogin;