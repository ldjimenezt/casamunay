import React from "react";
import { GalleryImgs } from "../assets/assets";

const Gallery = () => {
  return (
    <section className="bg-[#F3F1ED] py-16 px-6 pt-32 md:px-12">
      {/* Título */}
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
        Galería de Casa Munay
      </h1>

      {/* Texto introductorio */}
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 leading-relaxed text-base md:text-lg">
        Recorre visualmente cada rincón de nuestras cabañas y su entorno natural.
        Aquí encontrarás la inspiración que necesitas para planificar tu próxima escapada.
      </p>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GalleryImgs.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={item.image}
              alt={`Imagen ${index + 1} de Casa Munay`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
