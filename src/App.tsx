import { RouterProvider } from '@tanstack/react-router'
import router from '@/router'
import { QueryProvider } from '@/providers/QueryProvider'

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}

export default App
