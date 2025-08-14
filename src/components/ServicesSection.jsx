import React from "react";
import {
  FaWifi,
  FaUtensils,
  FaCampground,
  FaParking,
  FaCalendarAlt,
} from "react-icons/fa";
import {Link} from "react-router-dom"

const ServicesSection = () => {
  const services = [
    { icon: <FaWifi size={40} />, label: "WIFI" },
    { icon: <FaUtensils size={40} />, label: "RESTAURANTE" },
    { icon: <FaCampground size={40} />, label: "CAMPING" },
    { icon: <FaParking size={40} />, label: "PARKING" },
    { icon: <FaCalendarAlt size={40} />, label: "EVENTOS" },
  ];

  return (
    <section className="bg-[#F3F1ED] py-12 md:py-16 lg:py-20 h-auto lg:h-[480px] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-6 md:px-12 lg:px-24">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-gray-700 hover:text-[#BAA78B] transition-colors duration-300"
          >
            {service.icon}
            <p className="mt-3 font-medium text-lg">{service.label}</p>
          </div>
        ))}
      </div>
      <div className="p-6 mt-8">
        <Link to="/contact" className="flex items-center gap-2 mx-auto px-6 py-2 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group cursor-pointer">
          Contacto
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
