import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/ErrorPages/NotFound";
import ServerError from "./pages/ErrorPages/ServerError";
import About from "./pages/About/About";
import Login from "./pages/AdminLogin/Login";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ServerError />,
  },
  {
    path: "/about",
    element: <About></About>,
    errorElement: <ServerError />,
  },
  {
    path: "/admin",
    element: <Login />,
    errorElement: <ServerError />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ServerError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
