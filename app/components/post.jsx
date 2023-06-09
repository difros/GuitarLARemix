import { Link } from "@remix-run/react"
import { DateFormat} from "~/helpers/formaters"


export default function Post({post}) {

    const {title, text, image, created, url } = post

    return (
        <article className="post">
            <img className="imagen img-small" src={image} alt={`imagen blog ${title}`} />
            <div className="contenido">
                <h3>{title}</h3>
                <p className='fecha'>{DateFormat(created)}</p>
                <p className="resumen">{text}</p>
                <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}
