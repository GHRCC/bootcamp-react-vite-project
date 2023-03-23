import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { NotepadId } from "./Pages/Notepad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/notepads/:id", element: <NotepadId /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
