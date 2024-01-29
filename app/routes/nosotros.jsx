
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta(){
  return[{
    title:'GuitarLA-Sobre Nosotros',
    description:'venta de guitarras, blog de musica'
  }
  ]
}

export function links(){
  return[
    {
      rel:'stylesheet',
      href:styles
    },{
      rel:'preload',
      href:imagen,
      as:'image'
    }
  ]
}
  
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque excepturi at, mollitia dolorum eligendi sed debitis tenetur quis est necessitatibus non voluptates consequuntur aliquid dolores neque ipsum in molestiae odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequatur nemo? Nisi perferendis veniam quas laudantium veritatis sit officia deserunt, obcaecati voluptates officiis repellat consequatur quasi enim, explicabo adipisci. Excepturi.</p>

        </div>

      </div>

    </main>
  )
}

export default Nosotros
