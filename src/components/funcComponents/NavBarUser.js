import NavBar from "./NavBar";
import React from "react";

/**
 * Navigation bar for logged users
 */
const NavBarUser = () => {
	return (
		<NavBar
			classNameLinkDiv={"home__nav-link"}
			paths={[
				{
					value: "/home",
					name: "Home",
				},
				{
					value: "/home/todo-list",
					name: "ToDo-List",
				},
			]}
		/>
	);
};

export default NavBarUser;
