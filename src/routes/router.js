import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NewHomePage from "../Pages/NewHomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'new',
        element: <NewHomePage />
    }
])

export default router