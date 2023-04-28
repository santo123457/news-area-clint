import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../layout/MainPage";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News";
import Category from "../../Pages/Category/Category";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Others/Profile/Profile";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news/"),
      },
      {
        path: "category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "news/:id",
        element:<PrivateRoute> <News></News></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path : "/terms",
        element : <TermsAndConditions></TermsAndConditions>
      },
      {
        path : "/profile",
        element : <PrivateRoute><Profile></Profile></PrivateRoute>
      }
     
    ],
  },
]);
