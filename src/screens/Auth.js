import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
	const navigate = useNavigate();

	const goTo = (subRoute) => () => {
		navigate(subRoute);
	};

	return (
		<div className={"auth"}>
			<div>
				<Outlet />
			</div>
			<div className={"base-nav"}>
				<div onClick={goTo("registration")}>
					<span>Registration</span>
				</div>
				<div onClick={goTo("login")}>
					<span>Login</span>
				</div>
			</div>
		</div>
	);
};

export default Auth;
