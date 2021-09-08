import { useContext, useEffect, useState } from "react";
import { loginContext } from "../context";
import { useParams, useHistory} from "react-router-dom";
import Button from "../components/Button";
import TopBar from '../components/TopBar';
import { Redirect } from 'react-router-dom';


const User = () => {
    const [isloaded, setIsLoaded] = useState(true);
    const {data, login} = useContext(loginContext);

    const { name } = useParams();
    let history = useHistory();
    const [singleData, setSingleData] = useState();

    const singleApi = () => {
        setSingleData(data[name])
        setIsLoaded(false);
    }

    useEffect(() => {
        setIsLoaded(true);
    }, [name])

    
    useEffect(() => {
        if(data?.length) singleApi();
    }, [data])

    console.log(singleData)



    return <>
    <TopBar/>
    {login ? (!singleData) ? null : (<><Button click={()=>{history.goBack()}} style={{ backgroundColor: "#f44336", color: "white" }}>
                           Go Back
                        </Button>

        {isloaded ? "Loading..." :  <div className="container">
            <div className="grid-7 element-animation">
                {/* card-1 */}
                <div className="card color-card">
                    
                    <img src={singleData.picture.medium} alt="profile-pic" className="profile" />
                    <p className="job-title"> {singleData.name.title}</p>
                    <h1 className="title">{singleData.name.first} _ {singleData.name.last}</h1>
                    <div className="desc top">
                        <p>{singleData.email}</p>
                    </div>
                    <button className="btn top"> Hire me</button>

                    <hr />
                    <div className="content">
                        <div className="grid-2">
                            <button className="color-b circule"> <i className="fab fa-dribbble fa-2x"></i></button>
                            <h2 className="title">12.3k</h2>
                            <p className="followers">Followers</p>
                        </div>
                        <div className="grid-2">
                            <button className="color-c circule"><i className="fab fa-behance fa-2x"></i></button>
                            <h2 className="title">16k</h2>
                            <p className="followers">Followers</p>
                        </div>
                        <div className="grid-2">
                            <button className="color-d circule"><i className="fab fa-github-alt fa-2x"></i></button>
                            <h2 className="title">17.8k</h2>
                            <p className="followers">Followers</p>
                        </div>
                        <div className="clear"></div>

                        
                    </div>
                </div>
            </div>
        </div> }</>) : <Redirect to='/home' />}
    

    </>
}

export default User;