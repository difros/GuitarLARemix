import { useLoaderData } from "@remix-run/react"
import { GET } from "~/helpers/guitarLaApi.server"
import { DateFormat } from "~/helpers/formaters"

export async function loader({params}) {    
    const post = await GET(`posts/one-by-url?pUrl=${params.url}`)
    if (post.type === 'error') {
        throw new Response("",{
            status: 404,
            statusText: post.message
        })
    }
    return post.data
}

export function meta({data}) {
    return [
        {
            title: `GuitarLA | ${data.title}`
        }
    ]
}

function Articulo() {
    const post = useLoaderData()
    const {title, text, image, created} = post
  return (
    <article className="post">
        <img className="imagen mt-3 " src={image} alt={`imagen blog ${title}`} />
            <div className="contenido">
                <h3>{title}</h3>
                <p className='fecha'>{DateFormat(created)}</p>
                <p className="texto">{text}</p>
            </div>
    </article>
  )
}

export default Articulo