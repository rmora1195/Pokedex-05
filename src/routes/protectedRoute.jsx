import { Navigate, Outlet } from 'react-router'
import { useName } from '../contexts/namecontexts'

function ProtectedRoute({ children }) {
    const { name } = useName()
    if (!name) {
        return <Navigate to="/" />
    }
    return children ? children : <Outlet />


}

export default ProtectedRoute