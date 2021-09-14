import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginContext } from "../context/context";
import InputField from '../components/InputField';
import {
  validateEmail,
  validateUserName,
  validatePassword,
  validateGender,
} from "../utils/utils";
import Loader from '../components/Loader';
const UserSignUp = () => {
  const { login } = useContext(loginContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (login) {
      history.replace("/")
    }
  }, [login])


  const history = useHistory();
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const [errorTypeName, setErrorTypeName] = useState("");
  const [errorTypeMail, setErrorTypeMail] = useState("");
  const [errorTypePass, setErrorTypePass] = useState("");
  const [errorTypeGender, setErrorTypeGender] = useState("");

  const change = (event) => {
    setMessage("")
    event.preventDefault();
    const { name, value } = event.target;
    setSignUpData((preVal) => {
      return { ...preVal, [name]: value }
    })

  }


  // Save this as fetch.js --------------------------------------------------------------------------

  const click = () => {
    const nameError = validateUserName(signUpData.name);
    const emailError = validateEmail(signUpData.email);
    const passError = validatePassword(signUpData.password);
    const genderError = validateGender(signUpData.gender)
    // console.log("error", error)
    if (nameError !== "") {
      setErrorTypeName(nameError)
      setErrorTypeMail("");
      setErrorTypePass("");
      setErrorTypeGender("");

    } else if (emailError !== "") {
      setErrorTypeMail(emailError)
      setErrorTypeName("");
      setErrorTypePass("");
      setErrorTypeGender("");

    } else if (passError !== "") {
      setErrorTypePass(passError);
      setErrorTypeName("");
      setErrorTypeMail("");
      setErrorTypeGender("");


    } else if (genderError !== "") {
      setErrorTypeGender(genderError);
      setErrorTypeName("");
      setErrorTypeMail("");
      setErrorTypePass("");
    } else {

      setErrorTypeName("");
      setErrorTypeMail("");
      setErrorTypePass("");
      setErrorTypeGender("");

      const url = 'https://bookofpositivity.herokuapp.com/auth/signup';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(signUpData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => setMessage(response.message))
        .catch(error => setMessage("someThing went wrong"), setColor("red"))
        .finally(()=>{
          setLoading((pre)=> !pre);

          setColor("success")
      setSignUpData({
        name: '',
        email: '',
        password: '',
        gender: '',
      });
      })


    }
  }
  function back() {
    history.goBack()
  }


  return <>

    <div className="w-40 box-shadow-ccc b-1-c9  p-3 m-3-auto d-flex flex-d-column flex-align-center">

    {loading? <Loader/> : <><span className={`${color} f-014 mb-2`}>{message}</span>
      <InputField type="text" onChange={change} error={errorTypeName} name='name' placeholder="Name" value={signUpData.name} />
      <InputField type="email" onChange={change} error={errorTypeMail} name='email' placeholder="Email" value={signUpData.email} />
      <InputField type="password" onChange={change} error={errorTypePass} name='password' value={signUpData.password} placeholder="Password" />
      <InputField type="text" onChange={change} error={errorTypeGender} name='gender' placeholder="Gender {e.g. male,female or other}" value={signUpData.gender} />

      <button onClick={() => { click() }} className="f-bold f-family-monospace f-017 bg-white outline-none b-none green mb-2 mt-2 cursor-pointer"> Submit</button>
      <button onClick={() => back()} className="f-bold f-family-monospace f-017 bg-white  b-none brown cursor-pointer"> Back To Login </button></>}


    </div>



  </>
}
export default UserSignUp;