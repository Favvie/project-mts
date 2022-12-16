import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./config/theme";
import DragApp from "./components/DragApp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/dnd",
		element: <DragApp />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			{/* <App /> */}
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
