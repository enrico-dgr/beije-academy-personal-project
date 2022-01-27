import "./App.css";

import { Route, Routes } from "react-router-dom";

import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Registration";
import TodoList from "./screens/home/TodoList/TodoList";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="todo-list" element={<TodoList />} />
			</Route>
			<Route path="auth" element={<Auth />}>
				<Route path="registration" element={<Registration />} />
				<Route path="login" element={<Login />} />
			</Route>
		</Routes>
	);
}

export default App;
