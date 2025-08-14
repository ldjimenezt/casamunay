import React from "react";
import { exclusiveOffers } from "../assets/assets";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-14 md:py-16 gap-8 sm:gap-10 lg:gap-12 bg-[#EAE6DF] text-gray-800 min-h-screen">
      {/* Contenido de texto - Izquierda */}
      <div className="flex-1 w-full lg:max-w-[600px]">
        {/* Título principal */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800">
          Contáctanos
        </h2>

        {/* Subtítulo Casa Munay */}
        <div className="mb-6">
          <h3 className="font-semibold text-xl sm:text-2xl mb-2 text-gray-800">
            Casa Munay – Tu refugio natural
          </h3>
        </div>

        {/* Subtítulo Desconexión Consciente */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg sm:text-xl mb-4 text-gray-800">
            Desconexión Consciente
          </h4>
          
          {/* Descripción */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Un espacio para desconectar, reconectar y respirar. Aquí, la tierra te abraza, el fuego te acompaña y el alma encuentra descanso.
          </p>
        </div>

        {/* Información de contacto */}
        <div className="space-y-4 mb-8">
          <div className="text-gray-700">
            <p className="font-medium text-lg mb-2">📍 Ubicación</p>
            <p className="text-gray-600 ml-6">
              Tabacundo, Comunidad San Joaquín<br/>
              A solo 55 minutos de Quito<br/>
              Pedro Moncayo, Ecuador 🇪🇨
            </p>
          </div>
          
          <div className="text-gray-700">
            <p className="font-medium text-lg mb-2">📱 Teléfono</p>
            <p className="text-gray-600 ml-6">+593 98 773 6197</p>
          </div>
          
          <div className="text-gray-700">
            <p className="font-medium text-lg mb-2">✉️ Email</p>
            <p className="text-gray-600 ml-6">casamunay593@gmail.com</p>
          </div>
        </div>

        {/* Botón de contacto */}
        <div className="mt-8">
          <Link to="/contact" className="flex items-center max-w-max gap-2 px-6 py-2 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group cursor-pointer">
            Contáctanos
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Imagen - Derecha */}
      <div className="w-full lg:w-[561px] flex-shrink-0 ">
        <img
          src={exclusiveOffers[4].image}
          alt="Casa Munay - Contacto"
          className="w-full h-auto  sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactSection;