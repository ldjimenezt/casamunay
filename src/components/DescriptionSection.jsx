import React from "react";
import { exclusiveOffers } from "../assets/assets";

const DescriptionSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#F3F1ED] min-h-screen">
      <div className="md:w-1/2 md:pr-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Desconéctate del ruido.
          <br />
          Reconéctate con lo sagrado.
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          En Casa Munay, cada rincón está diseñado como un refugio para el alma.
          Aquí, el tiempo se detiene: respira con el ritmo del viento, escucha
          el murmullo de los árboles y permite que la sabiduría ancestral de la
          tierra te acompañe. No es solo descanso; es un retorno a lo esencial.
        </p>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={exclusiveOffers[0].image}
          alt="Casa Munay"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default DescriptionSection;
