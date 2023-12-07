import { createBrowserRouter } from "react-router-dom";
import Products from "../components/products/products";
import Schema from "../templates/schema";
import App from "../App";
import Error404 from "../pages/404/404";

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
    }
])

export default router;