import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";
import {
  About,
  AdminHomePage,
  Login,
  NotFound,
  ServerError,
  ManageAdminsPage,
} from "./pages/index.js";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ServerError />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ServerError />,
  },
  {
    path: "/admin",
    element: <Login />,
    errorElement: <ServerError />,
  },
  {
    path: "/admin/home",
    element: <AdminHomePage />,
    errorElement: <ServerError />,
  },
  {
    path: "/admin/manage-admins",
    element: <ManageAdminsPage />,
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
