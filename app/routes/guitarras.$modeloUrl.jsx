import { useLoaderData, useOutletContext } from "@remix-run/react"
import { useState } from "react"
import { GET } from "~/helpers/guitarLaApi.server"

export async function loader({ params }) {
  const guitarResult = await GET(`guitars/one-by-url?pUrl=${params.modeloUrl}`)

  if (guitarResult.type === 'error') {
    throw new Response("", {
      status: 404,
      statusText: guitarResult.message
    })
  }

  return guitarResult.data
}

export function meta({ data }) {
  return [
    {
      title: `GuitarLA | Guitarra ${data.name}`,
      description: `Guitarras, venta de Guitarras, guitarra ${data.name}`
    }
  ]
}



function ModeloGuitarra() {
  const context = useOutletContext()

  const [cantidad, setCantidad] = useState(0)

  const guitar = useLoaderData()
  const { description, price, name, image, id } = guitar

  const handleSubmit = e => {
    e.preventDefault()
    
    if(cantidad === 0) {
      alert ("La cantidad debe ser mayor a 0")
      return
    }

    const guitarSel = {
      id,
      name,
      image,
      price,
      cantidad
    }

    context.fnAgregarAlCarrito(guitarSel)
  
  }

  return (
    <div className="guitarra">
      <img className="imagen" src={image} alt={`Guitarra ${name}`} />

      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>

        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            id="cantidad"
            value={cantidad}
            onChange={e => setCantidad(parseInt(e.target.value))}
          >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input 
            type="submit"
            value="Agragar al carrito"
          />
        </form>

      </div>
    </div>
  )
}

export default ModeloGuitarra