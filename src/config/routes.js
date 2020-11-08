import Home from "../pages/Home";
import Login from "../pages/Login";

export default {
    HOME: {
        path: '/',
        component: Home,
        exact: true,        
    },
    LOGIN: {
        path: '/login',
        component: Login,
    },
}