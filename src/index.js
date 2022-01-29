import "./index.css";

import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
