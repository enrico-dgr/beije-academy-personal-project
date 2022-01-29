import NavBar from "./NavBar";
import React from "react";

/**
 * Navigation bar for guest users,
 * there is no access to certain user related pages
 */
const NavBarGuest = () => {
	return (
		<NavBar
			paths={[
				{
					value: "/",
					name: "Welcome",
				},
				{
					value: "/auth/registration",
					name: "Registration",
				},
				{
					value: "/auth",
					name: "Login",
				},
			]}
		/>
	);
};

export default NavBarGuest;
