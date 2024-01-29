import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  console.log(guitarra);

  const { descripcion, imagen, precio, url, nombre } = guitarra;
  const texto = descripcion.map((descrip) => {
    return descrip.children.map((descrip) => {
      return descrip.text;
    });
  });

  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{texto}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto </Link>
      </div>
    </div>
  );
}

export default Guitarra;
