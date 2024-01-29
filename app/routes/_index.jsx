import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "../components/listadoGuitarras";
import ListadoBlogs from "../components/listadoBlogs";
import Curso from "../components/curso";
import stylesGuitarras from "../styles/guitarras.css";
import stylesBlogs from "../styles/blog.css";
import stylesCurso from '../styles/curso.css'




export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesBlogs,
    }
    ,
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export function meta() {
  return[
    {title:'GuitarLA- Remix'},
  ]
}
export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section>
        <ListadoBlogs posts={posts} />
      </section>
    </>
  );
}

export default Index;
