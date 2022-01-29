import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	email: state.userMeDuck?.email,
});

export const RedirectUser = (props) => {
	const location = useLocation();
	const navigate = useNavigate();

	// component did update
	React.useEffect(() => {
		if (
			// logged user
			typeof props.email === "string" &&
			// path starts with `/auth`
			location.pathname.match(/^\/auth/) !== null
		) {
			navigate("/home");
		}

		if (
			// guest user
			props.email === undefined &&
			// path starts with `/home`
			location.pathname.match(/^\/home/) !== null
		) {
			navigate("/auth");
		}
	});

	return <></>;
};

export default connect(mapStateToProps)(RedirectUser);
