import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const UserSignUp = () =>{ 
    
    const history = useHistory();
    let [signUpData, setSignUpData] = useState({
         name : '',
         email : '',
         password : '',
         gender : '',
    });

    const change = (event) => {
        event.preventDefault();
        let {name, value} = event.target;
        setSignUpData((preVal)=>{
            return {...preVal, [name] : value}
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

  
    const click = () =>{
        
    
        const url = 'https://bookofpositivity.herokuapp.com/auth/signup';

        console.log(signUpData);
      
    
      
        fetch(url,{
          method: 'POST', 
          body: JSON.stringify(signUpData),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => success(response))
        .catch(error => failure(error));


        setSignUpData({
          name : '',
          email : '',
          password : '',
          gender : '',
          });
        
    }

    useEffect(() => {
         fetch('https://bookofpositivity.herokuapp.com/auth/verify',{
           method : "GET",
           body : JSON.stringify()
         })
    });

    function back (){
        history.goBack()
    }

  
     return <>

<div className="w-40 box-shadow-ccc b-1-c9  p-3 m-3-auto d-flex flex-d-column flex-align-center">

            <span id="after" className="f-014 mb-2"></span>
            <input  type="text" onChange={change} name='name'  className="input mb-2  f-family-monospace" value={signUpData.email} placeholder="Enter your name " value={signUpData.name} />
            <input type="email" onChange={change} name='email' className="input mb-2  f-family-monospace" value={signUpData.email} placeholder="E-mail-Address" value={signUpData.email}/>
            <input type='password' onChange={change} name='password' className="input mb-2 f-family-monospace" value={signUpData.password} placeholder="Password" />
            <input type='text' onChange={change} name='gender' className="input mb-2 f-family-monospace" placeholder="Enter your gender" value={signUpData.gender} />
        
            <button onClick={() => { click() }} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2 cursor-pointer"> Submit</button>
            <button onClick={()=> back()} className="f-bold f-family-monospace f-017 bg-white  b-none brown cursor-pointer"> Go Back </button>
            
          
        </div>
     
    
    
    </>
}
export default UserSignUp;