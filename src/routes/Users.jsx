import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { loginContext } from "../context";
import TopBar from '../components/TopBar';
import { Redirect } from 'react-router-dom';
const Users = () => {
    const [isloaded, setIsLoaded] = useState(true);
    const {data, login} = useContext(loginContext);
    const style = {
        grey : {
        background : "#ccc",
        color : "#fff",
        fontSize : "1.1rem",
    }, light : {
        background : "#E8E8E8",
        color : "#333",
        fontSize : "1.1rem",
    } }
    useEffect(() => {
        setIsLoaded(false);

    }, [data])
    return <>
            <TopBar/>
            {login ? <table border="3px solid #ccc" cellPadding="7px" cellSpacing="0" style={{ border:"1px solid #ccc" , margin : "20px auto"}}>
            <thead>
                <tr style={{background: "black", color : "#fff", fontSize : "1.2rem"}}>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Info.</td>
                </tr>
            </thead>
            <tbody>
                {isloaded ?<tr><td> Loading...</td></tr>: data ?
                        data.map((val, id) => {
                            return <tr key={id}>
                                <td style={style.grey}>{val.name.first}</td>
                                <td style={style.light}>{val.name.last}</td>
                                <td style={style.grey}>{val.email}</td>
                                <td style={style.light}>{val.phone}</td>
                                <td ><NavLink to={`user/${id}`}><button className="btn-info">See profile</button></NavLink></td>


                            </tr>
                        })

                     : <tr><td>no data found</td></tr>
                }

            </tbody>
        </table> : <Redirect to='/home' />}
        
    </>
    
}

export default Users;