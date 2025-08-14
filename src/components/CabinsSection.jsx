import React from "react";
import { exclusiveOffers } from "../assets/assets";
import { Link } from "react-router-dom";

const CabinsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-14 md:py-16 gap-8 sm:gap-10 lg:gap-12 bg-[#EAE6DF] text-gray-800 min-h-screen">
      <div className="w-full lg:w-[561px] flex-shrink-0">
        <img
          src={exclusiveOffers[1].image}
          alt="Casa Munay Cabin"
          className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[680px] object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="flex-1">
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Silencio que sana.
          <br />
          Tierra que guía.
          <br />
          Tiempo que se detiene.
        </h2>

        <Link to="/cabins"  className="flex items-center gap-2 text-base sm:text-lg font-medium text-[#BAA78B] group mb-10 cursor-pointer transition-colors duration-300 hover:text-[#8e7c61]">
          Descubre la cabaña de Casa Munay
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
            →
          </span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Desconexión Consciente
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Aquí no hay pantallas, solo cielo abierto y fuego vivo. Tu mente
                se libera cuando el zumbido digital desaparece. Vuelve a
                escuchar el murmullo del viento: es más sabio que cualquier
                notificación.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Presencia Ancestral
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Un espacio tejido con saberes antiguos. El canto de los pájaros
                al amanecer, el humo del incienso, la voz suave de la tierra
                bajo tus pies. Aquí, todo es sagrado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Vínculos Reales
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Conversaciones alrededor del fuego. Miradas que no necesitan
                palabras. Compartir pan, risas, recuerdos. La humanidad vuelve a
                tener lugar entre montañas y estrellas.
              </p>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Ritmo Natural
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                El sol marca tu tiempo. Caminas despacio, respiras profundo y
                dejas que la tierra te abrace. Sin relojes ni calendarios, solo
                lo que tu cuerpo y alma necesitan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Medicina del Bosque
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Los árboles sanan no con palabras, sino con presencia. Cada
                hoja, cada piedra, cada sombra tiene algo que contarte. Solo
                necesitas silencio para escucharlo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2">
                Sabiduría Viva
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Casa Munay no es solo un lugar, es un espacio de memoria
                ancestral. Cada piedra, cada planta, cada rincón guarda el eco
                de antiguas ceremonias y el abrazo de la Pachamama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinsSection;
