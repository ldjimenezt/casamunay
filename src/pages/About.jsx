import React from "react";
import { CabinsImgs, GalleryImgs } from "../assets/assets";
import {
  Wifi,
  Coffee,
  Thermometer,
  Tv,
  Mountain,
  BedDouble,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleEmptyClick = () => {
    navigate("/no-existe"); // Redirige a tu NotFound 404
  };

  return (
    <div className="flex flex-col">
      {/* Primera sección */}
      <section className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/cabinImg5.png')] bg-no-repeat bg-cover bg-center h-screen">
        <div className="px-6 py-16 bg-[rgba(243,241,237,0.8)] text-left max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Sobre Casa Munay
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Casa Munay es más que un lugar para dormir: es un refugio en el que la
            calma se convierte en tu única rutina. Nuestro espacio ha sido creado
            para que cada amanecer te despierte con luz suave y cada atardecer te
            envuelva con la serenidad de las montañas.
          </p>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#F3F1ED] min-h-screen">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            En Casa Munay creemos que la verdadera comodidad nace de la simplicidad.
            Nuestro propósito es ofrecerte un espacio donde puedas reconectar con la
            naturaleza, contigo mismo y con quienes amas. No solo ofrecemos un lugar
            para dormir, sino un entorno diseñado para inspirar calma y bienestar.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-4">
            Desde el aroma a madera al entrar, hasta el silencio profundo de la noche
            bajo el cielo estrellado, cada detalle ha sido pensado para que vivas una
            experiencia única. Aquí, no hay prisa… solo momentos para disfrutar.
          </p>
          <div className="mt-8">
            <button
              onClick={handleEmptyClick}
              className="flex items-center gap-2 px-6 py-2 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group cursor-pointer"
            >
              Reserva tu estadía
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={GalleryImgs[5].image}
            alt="Vista de Casa Munay"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Sección Nuestra Historia */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 bg-[#EAE6DF] text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Nuestra Historia
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Casa Munay nació del sueño de crear un refugio donde el tiempo se detuviera
          y la naturaleza fuera la protagonista. Inspirados por los paisajes de
          montaña y la tranquilidad del bosque, transformamos un rincón especial en
          un espacio que combina tradición y confort moderno.
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Cada piedra, cada viga y cada detalle fue elegido con amor, buscando
          transmitir la calidez de un hogar y la magia de lo simple. Hoy, recibimos a
          quienes buscan más que un lugar para quedarse: una experiencia que queda en
          el corazón.
        </p>
        <img
          src={GalleryImgs[11].image}
          alt="Nuestra Historia - Casa Munay"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
        />
      </section>

      {/* Sección Nuestro Equipo */}
      <section className="bg-[#F3F1ED] py-16 px-6 md:px-12 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-8 max-w-3xl mx-auto">
          Nuestro Equipo: Corazón y alma de Casa Munay
        </h2>

        <img
          src={GalleryImgs[4]?.image}
          alt="Nuestro Equipo - Casa Munay"
          className="w-full max-w-3xl h-auto object-cover rounded-lg shadow-lg mx-auto mb-12"
        />

        <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-8">
          Detrás de cada detalle, cada bienvenida y cada experiencia inolvidable,
          hay un equipo apasionado que vive y respira la esencia de Casa Munay.
          Somos anfitriones, soñadores y cuidadores de este espacio, dedicados a que
          cada huésped se sienta como en casa desde el primer momento.
        </p>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl mx-auto mb-8">
          Nuestro compromiso es simple: hacer de tu estadía algo más que un descanso.
          Queremos que te lleves memorias llenas de calidez, conexión y alegría.
        </p>

        {/* Botón Contáctanos (con enlace válido) */}
        <Link
          to="/contact"
          className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] group"
        >
          Contáctanos
          <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </section>
    </div>
  );
};

export default About;
