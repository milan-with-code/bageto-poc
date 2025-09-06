import { Outlet } from '@tanstack/react-router'

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <Outlet />
        </div>
    )
}

export default AuthLayout
