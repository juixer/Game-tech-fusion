import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, image_url, service_name, short_description, price } = service;
  return (
    <>
      <div className="card bg-base-100 shadow-2xl border border-black">
        <figure>
          <img className="md:h-64 lg:h-80 w-full" src={image_url} alt={service_name} />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl">{service_name}</h2>
          <p className="mt-2">{short_description}</p>
          <p className="mt-2 text-indigo-500">{price}</p>
          <div className="card-actions justify-end mt-2">
            <Link to={`/service/${id}`}><button className="btn bg-black text-white hover:text-black">Service Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
