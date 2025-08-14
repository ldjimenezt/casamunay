import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Página de Error 404 — estilo coherente con tu paleta (#EAE6DF / #F3F1ED / #BAA78B)
// - TailwindCSS
// - Framer Motion para micro-interacciones
// - Botones redondeados y tipografía tipo "playfair" en títulos si la tienes cargada
// - Listado de accesos rápidos para guiar al usuario

const NotFound404 = () => {
  return (
    <div className="min-h-screen bg-[#EAE6DF] flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-[#F3F1ED] border border-black/5">
          {/* Decoración sutil */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#BAA78B]/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[#BAA78B]/10 blur-2xl" />

          <div className="relative z-10 p-8 md:p-12 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mx-auto mb-6 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-[#BAA78B] flex items-center justify-center shadow-md"
            >
              <span className="text-white text-2xl md:text-3xl font-bold">404</span>
            </motion.div>

            <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-4">
              Página no encontrada
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Parece que el sendero se desvió. La página que buscas no existe o fue movida.
              Regresa al inicio o usa los accesos rápidos para continuar tu viaje.
            </p>

            {/* Acciones principales */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2 text-base font-medium text-white bg-[#BAA78B] rounded-[25px] transition-all duration-300 hover:bg-[#a29277] focus:outline-none focus:ring-2 focus:ring-[#BAA78B]/50"
              >
                <Home className="h-5 w-5" />
                Ir al inicio
              </Link>
              <Link
                to="/reservas"
                className="inline-flex items-center gap-2 px-5 py-2 text-base font-medium text-[#BAA78B] bg-white/80 rounded-[25px] border border-[#BAA78B]/30 hover:bg-white transition-all"
              >
                <BookOpen className="h-5 w-5" />
                Reservar ahora
              </Link>
            </div>

            {/* Accesos útiles */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <Link
                to="/about"
                className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm p-4 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-800">Nuestra historia</p>
                <p className="text-sm text-gray-600">Conoce el espíritu de Casa Munay.</p>
              </Link>
              <Link
                to="/cabanas"
                className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm p-4 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-800">Cabañas</p>
                <p className="text-sm text-gray-600">Explora espacios y comodidades.</p>
              </Link>
              <Link
                to="/contacto"
                className="group rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm p-4 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-800">Contacto</p>
                <p className="text-sm text-gray-600">Estamos para ayudarte.</p>
              </Link>
            </div>

            {/* Enlace de retorno simple */}
            <div className="mt-10">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                aria-label="Volver a la página anterior"
              >
                <ArrowLeft className="h-4 w-4" /> Volver atrás
              </button>
            </div>

            {/* Ayuda */}
            <div className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" /> ¿Necesitas ayuda? Escríbenos desde la página de contacto.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound404;
