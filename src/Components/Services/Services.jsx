import { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div
      className="my-28 mx-3"
    >
      <h1 className="text-center font-bold mb-10 text-3xl">Our Services</h1>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
