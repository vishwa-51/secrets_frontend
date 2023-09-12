import React from 'react'
// import Form from './components/Form/Form';
// import Posts from './components/Posts/Posts';
// import { useDispatch } from 'react-redux';
// import {getPosts} from './actions/posts'
import Nav from './components/Navcoponents/Nav'
import Homepage from './Pages/Homepage';
import { Routes, Route} from "react-router-dom";
import Authpage from './Pages/Authpage';
// import memories from './images/memories.jpg'

const App = () =>{

	return(
		<div>
			<Nav/>
			<Routes>
			<Route path="/" element={<Homepage/>}></Route>
			<Route path="/auth" element={<Authpage/>}></Route>
			</Routes>
		</div>
	);
}

export default  App;
