import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const filterService = services.find((service) => service.id === idInt);
  const handleBookNow = () => {
    toast("Thank You For Choosing US");
  };
  return (
    <div>
      <Helmet>
        <title>{filterService.service_name}</title>
      </Helmet>
      <div
        className="hero min-h-screen lg:rounded-xl lg:my-16"
        style={{
          backgroundImage: ` url(${filterService.image_url})`,
        }}
      >
        <div className="hero-overlay bg-opacity-90 lg:rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-5xl">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div>
                <h1 className="mb-5 text-5xl font-bold">
                  {filterService.service_name}
                </h1>
                <p className="text-xl ">
                  Price:{" "}
                  <span className="text-rose-400">{filterService.price}</span>
                </p>
              </div>
              <div>
                <p className="mb-5">{filterService.big_description}</p>
                <button
                  onClick={handleBookNow}
                  className="btn bg-black text-white hover:text-black border-none"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
