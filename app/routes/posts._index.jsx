import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { GET } from "~/helpers/guitarLaApi.server"

export async function loader() {
  const posts = await GET('posts')
  return posts.data
}

export function meta() {
  return [
    {
      charSet: "utf-8",
      title: "GuitarLa | Blog",
      viewport: "width=device-width,initial-scale=1"
    }
  ]
}

function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts posts={posts} />
  )
}

export default Blog