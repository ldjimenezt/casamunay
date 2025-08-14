import React from "react";
import { exclusiveOffers } from "../assets/assets";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-14 md:py-16 gap-8 sm:gap-10 lg:gap-12 bg-[#EAE6DF] text-gray-800 min-h-screen">
      
      {/* Imagen más reducida para dar más espacio al texto */}
      <div className="w-full lg:w-[480px] flex-shrink-0">
        <img
          src={exclusiveOffers[2].image}
          alt="Casa Munay"
          className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[560px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Texto con max-width para que se vea más largo */}
      <div className="flex-1 max-w-3xl">
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Escape simple, conexión profunda
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          No importa si este es tu primer retiro o si ya has recorrido el camino
          de la desconexión. En Casa Munay, no vienes a huir del mundo, sino a
          recordar tu lugar en él. Pon tu teléfono en silencio. Aquí, el canto
          de los pájaros reemplaza las notificaciones y el viento entre los
          árboles se convierte en tu guía.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Nuestro hogar honra la filosofía de "menos es más". Cada detalle ha
          sido elaborado artesanalmente para que lo innecesario desaparezca y lo
          esencial florezca. Nada es superfluo; todo respira. Rodeado de
          árboles, fuego, agua y tierra viva, el lujo aquí es el silencio… y tu
          propia presencia.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Cambia pantallas por paisajes. Sustituye el desplazamiento infinito
          por caminatas lentas, fuegos compartidos y conversaciones reales. Ya
          sea que busques claridad, creatividad o simplemente una pausa, en Casa
          Munay encontrarás un espacio ritual, donde cada elemento te invita a
          volver al ritmo de la naturaleza y a ti mismo.
        </p>

        {/* Botón alineado a la izquierda */}
        <div className="p-6 ">
          <Link to="/about" className="flex items-center max-w-max gap-2  px-6 py-2 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group cursor-pointer">
            Nuestra Historia
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
