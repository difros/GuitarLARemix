import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import { GET } from "~/helpers/guitarLaApi.server"

// con solo exportar, se manda a llamar en automático
// Esto corre en el servidor, remix corre en el servidor.
// Recordar que loader es lo que se ejecuta cuando un componente carga (como un useEffect [])
export async function loader() {
  const resultado = await GET('guitars')
  return resultado
}

export function meta() {
  return [
    {
      title: "GuitarLA | Tienda de Guitarras"
    }
  ]
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
      <ListadoGuitarras
        guitarras={guitarras.data}
      />
  )
}

export default Tienda