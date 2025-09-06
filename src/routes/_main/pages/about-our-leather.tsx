import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/pages/about-our-leather')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/pages/about-our-leather"!</div>
}
