import { createBrowserRouter } from "react-router-dom";
import Products from "../components/products/products";
import Schema from "../templates/schema";
import App from "../App";
import Error404 from "../pages/404/404";
import Login from "../pages/login/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Schema />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default router;