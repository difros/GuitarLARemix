import { Outlet } from "@remix-run/react"
import style from "~/styles/blog.css"


export function links() {
  return [
      {
          rel: "stylesheet",
          href:style
      }
  ]
}

function Blog() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}

export default Blog