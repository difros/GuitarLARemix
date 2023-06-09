import { useEffect, useState } from "react";

import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link
} from "@remix-run/react";

import styles from '~/styles/index.css'
import Header from "~/components/header"
import Footer from "~/components/footer";

export function meta() {
  return [
    {
      charSet: "utf-8",
      title: "GuitarLa | Remix",
      viewport: "width=device-width,initial-scale=1"
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export default function App() {

  const carritoLS = typeof window !== 'undefined' ? (JSON.parse(localStorage.getItem("carrito")) ?? []) : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])

  const agregarAlCarrito = (pItem) => {

    if (carrito.some(item2 => item2.id === pItem.id)) {
      const newArray = carrito.map(item2 => {
        if (item2.id === pItem.id) {
          item2.cantidad = pItem.cantidad;
        }
        return item2
      })
      setCarrito(newArray)      
    } else {
      const newArray = [...carrito, pItem]
      setCarrito(newArray)
    }    
    
  }

  const modificarCantidadProd = (pIdProd, pCant) => {
    const newArray = carrito.map(item => {
      if (item.id === pIdProd) {
        item.cantidad = pCant;
      }
      return item
    })
    setCarrito(newArray)
  }

  const eliminarDelCarrito = pIdProd => {
    const newArray = carrito.filter( item => item.id !== pIdProd)
    setCarrito(newArray)
  }

  return (
    <Document>
      <Outlet 
        context={{
          fnAgregarAlCarrito: agregarAlCarrito,
          carrito,
          fnModificarCantidad: modificarCantidadProd,
          fnEliminarDelCarrito: eliminarDelCarrito
        }}
      />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}


/* MANEJO DE ERRORES */

export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <p className="error">{error.status} | {error.statusText}</p>
        <Link className="error-enlace" to='/'>Volver a la Home</Link>
      </Document>
    )
  }

}