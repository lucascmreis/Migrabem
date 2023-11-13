import CardService from "./CardService";
import data from "../data/servicesSection2.json";

const Services2 = () => {
  return (
    <section className="services">
      <div className="container-services">
        <div className="grid-services">
          {data.blocks.map((service) => (
            <CardService
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
