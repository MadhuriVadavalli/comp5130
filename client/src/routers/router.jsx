import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from '../App.jsx'; 
import Home from '../home/Home';
import Shop from '../shop/Shop'; 
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBooks from "../dashboard/UploadBooks.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import Logout from "../components/Logout.jsx";
import Users from "../dashboard/Users.jsx";
import PromoCodes from "../home/PromoCodes.jsx";
import HelpPage from "../dashboard/HelpPage.jsx";



  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
          path:"/shop",
          element:<Shop/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },{
          path:"/book/:id",
          element:<SingleBook/>,
          loader:({params})=>fetch(`https://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBooks/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/> 
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`https://localhost:5000/book/${params.id}`)
        },
      {
        path: "/admin/dashboard/users",  // Route for the users page
        element: <Users />,  // UsersPage component to display users
      }
      ]
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "/createuser",
      element: <Signup/>
    },
    {
      path:"/logout",
      element: <Logout/>
    },
    {
      path: '/promocodes', // New route for the PromoCodes page
      element: <PromoCodes/>,
    },
    {
      path: "/help",
      element: <HelpPage/>,  // Add the HelpPage route
    }
  ]);

 export default router;