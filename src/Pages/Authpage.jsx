import React, {useState, useEffect} from "react";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
// import { redirect } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useNavigate} from 'react-router-dom';

const Authpage =()=>{
	const navigate = useNavigate();
	const [isSignup, setIsSignup] = useState(false);
	const [authenticated, setauthenticated] = useState(null);
	const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
	}
	useEffect(() => {
		const loggedInUser = localStorage.getItem("profile");
		if (loggedInUser) {
		  setauthenticated(loggedInUser);
		}
	  }, []);
	
	  if (authenticated) {
			// return <Navigate replace to="/" />;
			navigate('/');
			// return <redirect to="https://secret-share.netlify.app/" />;
		} else {
	
	return(
		<div>
			{isSignup ? 
			<Register onChanging = {switchMode}/>
			: 
			<Login onChanging = {switchMode}/> 
			}
		</div>
	)
	}
}
export default Authpage;
