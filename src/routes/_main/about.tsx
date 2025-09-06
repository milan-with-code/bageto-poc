import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_main/about')({
    component: About,
})

function About() {
    return <div>Hello from About!</div>
}

