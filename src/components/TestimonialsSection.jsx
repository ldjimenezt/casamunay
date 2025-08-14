import React from "react";
import { exclusiveOffers } from "../assets/assets";

const TestimonialsSection = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-14 md:py-16 bg-[#FFFFFB]">
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Testimonios
        </h2>
        
        {/* Imagen decorativa */}
        <div className="flex justify-center mb-12">
          <img
            src={exclusiveOffers[3].image}
            alt="Montañas Casa Munay"
            className="w-full max-w-[839px] h-[200px] sm:h-[280px] md:h-[320px] lg:h-[395px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Testimonios */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-14">
        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img 
              className="h-24 w-24 absolute -top-14 rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="María Elena"
            />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">María Elena Rodríguez</h1>
              <p className="text-gray-800/80">Profesora de Yoga</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            Casa Munay me permitió reconectarme conmigo misma. El silencio de las montañas y la energía ancestral del lugar crearon el espacio perfecto para mi sanación interior.
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#BAA78B"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img 
              className="h-24 w-24 absolute -top-14 rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Carlos Mendoza"
            />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">Carlos Mendoza</h1>
              <p className="text-gray-800/80">Arquitecto</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            Después de meses de estrés urbano, Casa Munay fue como un bálsamo para el alma. La desconexión digital me ayudó a recuperar mi creatividad y paz mental.
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#BAA78B"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img 
              className="h-24 w-24 absolute -top-14 rounded-full object-cover" 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Ana Sofía"
            />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">Ana Sofía Herrera</h1>
              <p className="text-gray-800/80">Terapeuta Holística</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            La medicina del bosque y la sabiduría ancestral que se respira en Casa Munay transformaron mi perspectiva. Es un lugar donde el tiempo se detiene y el alma se renueva.
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z" fill="#BAA78B"/>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;