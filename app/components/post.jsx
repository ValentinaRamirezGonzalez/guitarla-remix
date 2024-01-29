import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";


function Post({post}) {
    const {contenido,imagen,titulo,createdAt,publishedAt,url}= post
    const texto = contenido.map((contenidoTexto)=>{
       return contenidoTexto.children.map((contenidoTexto)=>{
        return contenidoTexto.text;
       })
    }       
    )
  
    return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{texto}</p>
            <Link className="enlace" to={`/posts/${url}`}>leer </Link>

        </div>
    </article>
  )
}

export default Post
