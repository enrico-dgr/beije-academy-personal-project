import NavBarGuest from "../components/funcComponents/NavBarGuest";
import { Outlet } from "react-router-dom";

const Auth = () => {
	return (
		<div className={"auth"}>
			<NavBarGuest />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Auth;
