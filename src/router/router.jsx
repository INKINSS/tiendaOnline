import { createBrowserRouter } from "react-router-dom";
import Error404 from "../pages/error404";
import Products from "../components/products/products";
import Schema from "../templates/schema";
import App from "../App";

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