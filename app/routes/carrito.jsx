import { useOutletContext } from "@remix-run/react"
import styles from "~/styles/carrito.css"
import { ClientOnly } from "remix-utils" // -> lo que está dentro, se ejecutará sólo en el cliente

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export function meta() {
    return [
        {
            title: "GuitarLA | Carrito"
        }
    ]
}

export default function Carrito() {
    const context = useOutletContext()

    return (
        <ClientOnly fallback={"Cargando..."}>
            {() => (
                <main className="contenedor">
                    <h2 className="heading"> Carrito de compras</h2>

                    <div className="contenido">
                        <div className="carrito">
                            <h2>Artículos</h2>
                            {
                                context.carrito?.length === 0 ? 'Carrito vacío' : (
                                    context.carrito?.map(producto => (
                                        <div key={producto.id} className="producto">
                                            <div>
                                                <img src={producto.image} alt={`Guitarra ${producto.name}`} />
                                            </div>

                                            <div>
                                                <p className="nombre">{producto.name}</p>
                                                <p>Cantidad: </p>

                                                <select
                                                    className="select"
                                                    value={producto.cantidad}
                                                    onChange={e => context.fnModificarCantidad(producto.id, parseInt(e.target.value))}
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>



                                                <p className="precio">$ <span>{producto.price}</span></p>
                                                <p className="subtotal">Subtotal: $ <span>{producto.price * producto.cantidad}</span></p>
                                            </div>

                                            <button
                                                type="button"
                                                className="btn-eliminar"
                                                onClick={() => context.fnEliminarDelCarrito(producto.id)}
                                            >
                                                ELIMINAR

                                            </button>
                                        </div>
                                    ))
                                )
                            }
                        </div>


                        <aside className="resumen">
                            <h3>Resumen del Pedido</h3>
                            <p>Total a Pagar: $
                                {
                                    context.carrito?.length > 0 && (
                                        context.carrito?.reduce(
                                            (total, producto) =>
                                                total + (producto.price * producto.cantidad)
                                            , 0)
                                    )
                                }
                            </p>

                        </aside>
                    </div>


                </main>
            )}
        </ClientOnly>
    )
}
