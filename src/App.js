import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import { Children } from "react";
import Users from "./components/Users";
import Form from "./components/form/Form";

function App() {
  const routerObject = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { 
          path: "/users",
          element: <Users /> 
        },
        {
          path: '/form',
          element: <Form />
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
