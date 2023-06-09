import { Link } from "@remix-run/react"

function Guitarra({ item }) {
    const { description, price, name, url, image } = item
    return (
        <div className="guitarra">
            <img src={image} alt={`Guitarra ${name}`} />
            <div className="contenido">
                <h3>{name}</h3>
                <p className="descripcion">{description}</p>
                <p className="precio">${price}</p>

                <Link className="enlace" to={`/guitarras/${url}`}>
                    Ver Producto
                </Link>
            </div>

        </div>
    )
}

export default Guitarra