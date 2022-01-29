import "./Routing.css";

import { Route, Routes } from "react-router-dom";

import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Login from "./screens/auth/Login";
import { Provider } from "react-redux";
import RedirectUser from "./components/funcComponents/RedirectUser";
import Registration from "./screens/auth/Registration";
import TodoList from "./screens/home/TodoList/TodoList";
import Welcome from "./screens/Welcome";
import applicationStore from "./applicationStore";

/**
 * ABOUT ROUTING
 * The `Routes` tag is the substitute for the older `Switch`
 * and is required by default. When changing the URL, `Routes`
 * will look for the first `path` matching the URL.
 * If there is no match, no route will be shown.
 * The router component wrapper ( `BrowserRouter`, `HashRouter`... )
 * is now located in `index.js` ( probably because `Routes` is now
 * required and by convention we move the Router
 * in the parent component to keep this file cleaner ).
 * !IMPORTANT
 * Differently from routing v5, the `Route` will take an `element` prop
 * (not a `component` prop) of tag type ( JSX.Element, a node ).
 * So you don't have access to `history` from props in the
 * `Route`'s element (props.history / props.location / .... / this.props.history ..... ).
 * !WORTH NOTING
 * The slash ( `/` ) in the path is no more needed,
 * because it is now implicit and it will be considered as
 * base `Route` for a list of `Route`s on the same level.
 * E.g. Below `Home` will be default route for `host:port`
 * while `Login` will be default route for
 * `host:port/auth`.
 */

/** */
function Routing() {
	return (
		<Provider store={applicationStore}>
			<RedirectUser />
			<Routes>
				<Route path="" element={<Welcome />} />
				<Route path="home" element={<Home />}>
					<Route path="todo-list" element={<TodoList />} />
				</Route>
				<Route path="auth" element={<Auth />}>
					<Route path="" element={<Login />} />
					<Route
						path="registration"
						element={<Registration />}
					/>
				</Route>
			</Routes>
		</Provider>
	);
}

export default Routing;
