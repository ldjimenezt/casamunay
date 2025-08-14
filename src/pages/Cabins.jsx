import React from "react";
import { CabinsImgs } from "../assets/assets";
import {
  Wifi,
  Coffee,
  Thermometer,
  Tv,
  Mountain,
  BedDouble,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cabins = () => {
  const navigate = useNavigate();

  const handleEmptyClick = () => {
    navigate("/no-existe"); // Esto activará tu NotFound404
  };

  return (
    <div className="flex flex-col">
      {/* Primera sección */}
      <section className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/ContactImage.png')] bg-no-repeat bg-cover bg-center h-screen">
        <div className="px-6 py-16 bg-[rgba(243,241,237,0.8)] text-left max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Cabañas de Silencio y Alma
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            En nuestras cabañas, el tiempo se detiene para que puedas reconectar
            contigo mismo y con la esencia más pura de la vida.
          </p>
        </div>
      </section>

      {/* Segunda sección */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#F3F1ED] min-h-screen">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Tu refugio te espera
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Descubre el lugar donde el silencio abraza y la naturaleza susurra
            historias antiguas. En nuestra cabaña, cada detalle está pensado
            para que te desconectes del ruido y te reconectes contigo mismo.
            Despierta con el canto de los pájaros, respira aire puro y permite
            que la calma sea tu compañera. Es más que una estadía, es un regreso
            a lo esencial.
          </p>
          <div className="mt-8">
            <button
              onClick={handleEmptyClick}
              className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group cursor-pointer"
            >
              Reservar ahora
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={CabinsImgs[0].image}
            alt="Casa Munay"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Resto del contenido sin cambios */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#EAE6DF] text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Cabañas, Suit & Confort
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Un refugio en el bosque con alma y propósito. Cada rincón de esta
          cabaña te invita a bajar el ritmo: desde la luz de la mañana danzando
          sobre los pisos de madera, hasta las sombras de la tarde jugando en
          las paredes cálidas. Aquí, la naturaleza no termina en la puerta… se
          entrelaza con cada instante de tu estancia.
        </p>
        <img
          src={CabinsImgs[2].image}
          alt="Características de la cabaña"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
        />
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#F3F1ED]">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Casa Munay
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            En Casa Munay cada detalle está pensado para que vivas una estadía
            única, rodeado de naturaleza y con todo el confort que mereces.
          </p>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <Wifi className="text-[#BAA78B]" /> Wi-Fi de alta velocidad
            </li>
            <li className="flex items-center gap-3">
              <Coffee className="text-[#BAA78B]" /> Desayuno incluido
            </li>
            <li className="flex items-center gap-3">
              <Thermometer className="text-[#BAA78B]" /> Calefacción
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={CabinsImgs[1].image}
            alt="Casa Munay Vista"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#F3F1ED]">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Tu refugio te espera
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
            Disfruta de más comodidades en nuestras cabañas para que tu estadía
            sea inigualable.
          </p>

          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <Tv className="text-[#BAA78B]" /> Televisión
            </li>
            <li className="flex items-center gap-3">
              <Mountain className="text-[#BAA78B]" /> Balcón con vista
              panorámica
            </li>
            <li className="flex items-center gap-3">
              <BedDouble className="text-[#BAA78B]" /> Ropa de cama y toallas
              premium
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={CabinsImgs[3].image}
            alt="Casa Munay Vista"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#EAE6DF] py-16 px-6 md:px-12 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-8 max-w-3xl mx-auto">
          Un refugio sencillo y bien equipado, diseñado para la relajación, la
          comodidad y una vida sin complicaciones
        </h2>

        <img
          src={CabinsImgs[4].image}
          alt="Casa Munay"
          className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-lg mx-auto mb-12"
        />

        <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-8">
          En Casa Munay encontrarás más que una estadía: un espacio pensado para
          que te desconectes del estrés, disfrutes de la naturaleza y recuperes
          la calma. Cada detalle está diseñado para tu comodidad, combinando la
          calidez rústica con servicios modernos que harán de tu visita una
          experiencia inolvidable.
        </p>

        <a
          href="/faqs"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group"
        >
          Ver Preguntas Frecuentes
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </section>
    </div>
  );
};

export default Cabins;
