import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useReducer, useState, useEffect} from "react";
export default function AdminHome() {

  const [ad,setAd] = useState(null);
  useEffect(()=>{
 
  var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;
   fetch("http://localhost:8082/getuser?uid="+uid)
   .then(resp => resp.json())
   .then(obj => {
     localStorage.setItem("loggedAdmin", JSON.stringify(obj))
     setAd(obj);
   })
  } ,[])

    return(

<div>
<nav className="navbar navbar-expand-lg navbar-light fixed-right fixed-top ">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              ScoreZone
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Approve Tournament Manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Approve Team Manager
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={'/home'}>
                    Add Venues
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
            <h1>AdminHome</h1>
            <h1>Welcome {ad && ad.first_name}</h1>
        </div>
        </div>
    )
}