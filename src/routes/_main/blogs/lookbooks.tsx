import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/blogs/lookbooks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/blogs/lookbooks"!</div>
}
