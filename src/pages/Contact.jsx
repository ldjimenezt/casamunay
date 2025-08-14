import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#EAE6DF] text-gray-800 min-h-screen  px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-14 md:py-16">
      {/* Sección superior: Texto + Mapa */}
      <div className="flex flex-col lg:flex-row items-center pt-8 justify-center gap-8 sm:gap-10 lg:gap-12">
        {/* Texto - Izquierda */}
        <div className="flex-1 w-full lg:max-w-[600px]">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl pt-24 lg:text-6xl font-bold mb-8">
            Contáctanos
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-xl sm:text-2xl mb-2">
              Casa Munay – Tu refugio natural
            </h3>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg sm:text-xl mb-4">
              Desconexión Consciente
            </h4>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Un espacio para desconectar, reconectar y respirar. Aquí, la
              tierra te abraza, el fuego te acompaña y el alma encuentra
              descanso.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <p className="font-medium text-lg mb-2">📍 Ubicación</p>
              <p className="text-gray-600 ml-6">
                Tabacundo, Comunidad San Joaquín
                <br />
                A solo 55 minutos de Quito
                <br />
                Pedro Moncayo, Ecuador 🇪🇨
              </p>
            </div>

            <div>
              <p className="font-medium text-lg mb-2">📱 Teléfono</p>
              <p className="text-gray-600 ml-6">+593 98 773 6197</p>
            </div>

            <div>
              <p className="font-medium text-lg mb-2">✉️ Email</p>
              <p className="text-gray-600 ml-6">casamunay593@gmail.com</p>
            </div>
          </div>

          
        </div>

        {/* Mapa - Derecha */}
        <div className="w-full lg:w-[561px] flex-shrink-0">
          <iframe
            title="Ubicación Casa Munay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8151929419655!2d-78.22473572495274!3d0.07173859992755723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a0be09f9f2c91%3A0xcd5881096e53e89a!2sCasa%20Munay%20%7C%20Glamping%20%7C%20Eventos!5e0!3m2!1ses!2sec!4v1755108616265!5m2!1ses!2sec"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Formulario debajo */}
      <div className="bg-[#F3F1ED]">
        <form className="flex flex-col items-center text-sm mt-16 ">
          <p className="text-lg text-[#BAA78B] font-medium pb-2">Escríbenos</p>
          <h1 className="text-4xl font-playfair font-semibold text-gray-800 pb-4">
            Ponte en contacto con nosotros
          </h1>
          <p className="text-sm text-gray-600 text-center pb-10 max-w-2xl">
            En Casa Munay queremos escucharte. Cuéntanos tus ideas, preguntas o
            solicitudes y nos pondremos en contacto contigo lo antes posible.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
            <div className="w-full">
              <label className="text-gray-700" htmlFor="name">
                Tu Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ej. Ana Pérez"
                required
                className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-[#BAA78B] transition"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700" htmlFor="email">
                Tu Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ejemplo@correo.com"
                required
                className="h-12 p-2 mt-2 w-full border border-gray-300 rounded outline-none focus:border-[#BAA78B] transition"
              />
            </div>
          </div>

          <div className="mt-6 w-[350px] md:w-[700px]">
            <label className="text-gray-700" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              required
              className="w-full mt-2 p-2 h-40 border border-gray-300 rounded resize-none outline-none focus:border-[#BAA78B] transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 bg-[#BAA78B] text-white h-12 w-56 px-4 rounded-[25px] active:scale-95 transition hover:bg-[#a29277]"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
