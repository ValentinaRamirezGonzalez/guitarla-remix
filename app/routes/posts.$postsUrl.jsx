import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";

export async function loader({ params }) {
  const { postsUrl } = params;

  const post = await getPost(postsUrl);

  return post;
}

export function meta({data}){
    return[
        {title:`GuitarLA-${data.data[0].attributes.titulo}`},
        {description:`GuitarLA- Nuestro Blog`}
    ]
}



function Posts() {
  const post = useLoaderData();
  const { contenido, imagen, titulo, publishedAt } = post?.data[0]?.attributes;

  const texto = contenido.map((contenidoTexto) => {
    return contenidoTexto.children.map((contenidoTexto) => {
      return contenidoTexto.text;
    });
  });

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`imagen blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{texto}</p>
        
      </div>
    </article>
  );
}

export default Posts;
