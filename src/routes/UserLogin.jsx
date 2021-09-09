import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const UserLogin = () => {


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


    // Save this as fetch.js --------------------------------------------------------------------------

    function success(json) {
        document.getElementById('after').innerHTML = json.message;
        console.log("AFTER: " + JSON.stringify(json));
    } // ----------------------------------------------------------------------------------------------

    function failure(error) {
        document.getElementById('after').innerHTML = "ERROR: " + error;
        console.log("ERROR: " + error);
    } // --------------------------------------------------------------------------------------


    const click = () => {

        

    
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
            .then(response => success(response))
            .catch(error => failure(error));


        setInputData({
            email: '',
            password: '',
        })
    }

    
    return <>


        <div className="w-40 box-shadow-ccc b-1-c9  p-2 m-3-auto d-flex flex-d-column flex-align-center">
            
            <span id="after" className="f-014 mb-2"></span>
            <input type="email" onChange={change} name='email' className="input mb-2  f-family-monospace" value={inputData.email} placeholder="E-mail-Address" />
            <input type='password' onChange={change} name='password' className="input mb-2 f-family-monospace" value={inputData.password} placeholder="Password" />
            <button onClick={() => { click() }} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 "> Submit</button>
            <NavLink to='/userSignup' className="f-bold f-family-monospace  bg-white outline-none b-none brown"> Register</NavLink>
            
        </div>


    </>
}

export default UserLogin;