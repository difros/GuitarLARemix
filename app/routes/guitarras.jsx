import { Outlet, useOutletContext } from "@remix-run/react"
import guitarStyle from "~/styles/guitarras.css"

export function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarStyle
    }
  ]
}

function Tienda() {

  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()} />
    </main>
  )
}

export default Tienda