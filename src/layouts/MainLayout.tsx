import { Outlet } from '@tanstack/react-router'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 bg-background">
                <Header />
            </header>

            <main className="flex-1 max-w-[1440px] mx-auto px-5 w-full h-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout
