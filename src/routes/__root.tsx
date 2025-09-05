import { Header } from '@/components/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
    <div className="min-h-screen">
        <header className="sticky top-0 z-50 bg-background">
            <Header />
        </header>

        <div className="flex-1 max-w-[1440px] mx-auto px-5 w-full">
            <Outlet />
        </div>
    </div>
)

export const Route = createRootRoute({ component: RootLayout })
