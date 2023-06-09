
export default function Curso({curso}) {

    const { description, image, name } = curso

    return (
        <section className="curso">
            <style jsx="true">{`
                .curso {
                   background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image})
                }
            `}</style>
            <div className="contenedor curso-grid">
                <div className="contenido">
                    <h2 className="heading">{name}</h2>
                    <p className="texto">{description}</p>
                </div>
            </div>
        </section>
    )
}
