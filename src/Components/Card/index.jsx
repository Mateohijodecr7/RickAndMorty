import './cards.css'

export const Card = ({
  name,
  status,
  species,
  image,
  location
}) => {
  return (<>
  <div
  className='card'
>
  <img className='img' src={image} alt="" />
  <divg>
    <div className="contentName">{name}</div>
    <br/>
    <div>
      <div className="contentTittle">Ultimo lugar en el que fue visto:</div>
      <div className="fs-5">{location.name}</div>
    </div>
    <br/>
    <div>
      <div className="contentTittle">Estatus:</div>
      <div className="fs-5">{status}</div>
    </div>
    <br/>
    <div>
      <div className="contentTittle">Especie:</div>
      <div className="fs-5">{species}</div>
    </div>
  </divg>
</div>

  </>)
}
