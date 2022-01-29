import "./Home.css";

import { Component } from "react";
import NavBarUser from "../components/funcComponents/NavBarUser";
import { Outlet } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className={"home"}>
				<NavBarUser />
				<Outlet />
			</div>
		);
	}
}

export default Home;
