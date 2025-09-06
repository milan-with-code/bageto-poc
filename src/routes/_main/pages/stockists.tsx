import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/pages/stockists')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/pages/stockists"!</div>
}
