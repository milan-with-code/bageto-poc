import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/pages/terms-and-conditions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/pages/terms-and-conditions"!</div>
}
