import React from "react";
const Auth = () => {
 
  return (
        <div className="w-40 box-shadow-ccc b-1-c9  p-2 m-3-auto d-flex flex-d-column flex-align-center">
            <input className="input mb-2  f-family-monospace" placeholder="E-mail-Address"/>
            <input className="input mb-2 f-family-monospace" placeholder="Password"/>
            <button className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2"> Submit</button>
            <button className="f-bold f-family-monospace  bg-white outline-none b-none brown"> Register</button>
        </div>
    
  );
}

export default Auth;