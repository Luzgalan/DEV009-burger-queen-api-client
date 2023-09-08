import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layout/admin";
import LoginLayout from "./layout/login";
//import { Children } from "react";
import UsuarioPage from "./pages/usuarios";
import ProductosPage from "./pages/productos";
import ChefLayout from "./layout/chef";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>
    },
    {
        path: '/chef',
        element: <ChefLayout/>
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children:[
            {
                path: '/admin/usuarios',
                element: <UsuarioPage/>
            },
            {
                path: '/admin/productos',
                element: <ProductosPage/>
            },
           
        ]
    },
])