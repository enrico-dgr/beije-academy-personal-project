import "./Home.css";

import { Navigate, Outlet } from "react-router-dom";

import { Component } from "react";
import NavBar from "../components/funcComponents/NavBar";

class Home extends Component {
	constructor(props) {
		super(props);

		this.nullPath = "none";

		this.state = {
			subRoute: this.nullPath,
		};
	}

	componentDidUpdate() {
		if (this.state.subRoute !== this.nullPath) {
			this.goTo(this.nullPath);
		}
	}

	goTo = (subRoute) => () => {
		this.setState({ subRoute });
	};

	render() {
		return (
			<div className={"home"}>
				<NavBar
					classNameLinkDiv={"home__nav-link"}
					paths={[
						{
							value: "todo-list",
							name: "ToDo-List",
						},
						{
							value: "auth",
							name: "Login",
						},
					]}
				/>
				{this.state.subRoute !== this.nullPath && (
					<Navigate to={this.state.subRoute} />
				)}
				<Outlet />
			</div>
		);
	}
}

export default Home;
