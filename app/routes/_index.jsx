import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"
import ListadoPosts from "~/components/listado-posts"
import { GET } from "~/helpers/guitarLaApi.server"
import styleGuitarras from "~/styles/guitarras.css"
import styleBlog from "~/styles/blog.css"
import styleCurso from "~/styles/curso.css"
import Curso from "~/components/curso"

export async function loader() {
  const [guitarras, posts, courses] = await Promise.all([
    GET("guitars"), GET("posts"), GET("courses") 
  ])

  return { guitarras: guitarras.data, posts: posts.data, courses: courses.data[0] }
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styleGuitarras
    },
    {
      rel: "stylesheet",
      href: styleBlog
    },
    {
      rel: "stylesheet",
      href: styleCurso
    }

  ]
}

export function meta() {
  return [
    {
      title: `GuitarLA | Home`
    }
  ]
}

function Index() {
  const { guitarras, posts, courses } = useLoaderData()
  return (
    <>
        <main className='contenedor'>
            <ListadoGuitarras 
                guitarras={guitarras}
            />
        </main>

        <Curso
            curso={courses}
        />

        <section className='contenedor'>
            <ListadoPosts
              posts={posts}
            />
        </section>
    </>
  )
}

export default Index