import { Link } from "react-router-dom"


const ServiceCard = ({service}) => {
    const {_id,title,price,img}=service
  return (
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <div>
        <img src={img} alt="" />
    </div>
    <h2 className="card-title text-2xl">{title}</h2>
    <p className="text-xl">$ {price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
  )
}

export default ServiceCard