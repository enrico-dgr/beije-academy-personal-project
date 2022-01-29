import NavBarGuest from "../components/funcComponents/NavBarGuest";
import NavBarUser from "../components/funcComponents/NavBarUser";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	email: state.userMeDuck?.email,
});

const Welcome = (props) => {
	return (
		<section>
			{typeof props.email === "string" ? (
				<NavBarUser />
			) : (
				<NavBarGuest />
			)}
			<h1>Welcome</h1>
			<p>
				Here you'll learn the basics of <b>React.js</b>
				's tools.
			</p>
			<h3>
				<i> Let's begin!</i>
			</h3>
		</section>
	);
};

export default connect(mapStateToProps)(Welcome);
