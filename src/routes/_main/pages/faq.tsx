import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/pages/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/pages/faq"!</div>
}
