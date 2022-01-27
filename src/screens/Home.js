import "./Home.css";

import { Navigate, Outlet } from "react-router-dom";

import { Component } from "react";

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
				<div className={"base-nav"}>
					<div onClick={this.goTo("todo-list")}>
						<span>ToDo list</span>
					</div>
					<div onClick={this.goTo("auth")}>
						<span>Login</span>
					</div>
				</div>
				{this.state.subRoute !== this.nullPath && (
					<Navigate to={this.state.subRoute} />
				)}
				<Outlet />
			</div>
		);
	}
}

export default Home;
