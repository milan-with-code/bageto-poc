import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/pages/visit-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/pages/visit-us"!</div>
}
