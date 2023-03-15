import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'
import ClientLayout from '../layouts/ClientLayout/ClientLayout'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [{ path: '/admin', element: <div>Admin</div> }],
    },
])

export default router
