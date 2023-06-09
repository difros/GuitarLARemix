import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return (
    [
      {
        title: "GuitarLA | Nosotros"
      }
    ]
  )
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading"> Nosotros </h2>

      <div className="contenido">
        <img src={imagen} alt="guitarra" />

        <div>
          <p>Velit dignissim sodales ut eu sem integer. Tincidunt tortor aliquam nulla facilisi cras fermentum. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Volutpat diam ut venenatis tellus in metus vulputate. Lorem ipsum dolor sit amet consectetur adipiscing.</p>

          <p>Eu turpis egestas pretium aenean pharetra. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. In hendrerit gravida rutrum quisque non tellus.</p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros