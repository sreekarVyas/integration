import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { Children } from "react";
import Users from "./components/Users";

function App() {
  const routerObject = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { 
          path: "/users",
          element: <Users /> 
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerObject}></RouterProvider>
    </>
  );
}

export default App;
