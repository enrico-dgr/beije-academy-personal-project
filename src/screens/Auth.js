import NavBar from "../components/funcComponents/NavBar";
import { Outlet } from "react-router-dom";

const Auth = () => {
	return (
		<div className={"auth"}>
			<NavBar
				paths={[
					{
						value: "/",
						name: "Home",
					},
					{
						value: "registration",
						name: "Registration",
					},
					{
						value: "",
						name: "Login",
					},
				]}
			/>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Auth;
