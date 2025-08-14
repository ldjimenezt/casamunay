import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    // Navegación del navbar
    const navLinks = [
        { name: "Inicio", path: "/" },
        { name: "Cabañas", path: "/cabins" },
        { name: "Galería", path: "/gallery" },
        { name: "Nosotros", path: "/about" },
        { name: "Contacto", path: "/contact" },
    ];

    const linkSections = [
        {
            title: "Navegación",
            links: navLinks
        },
        {
            title: "Servicios",
            links: [
                { name: "Reservas", path: "#" },
                { name: "Experiencias", path: "#" },
                { name: "Retiros", path: "#" },
                { name: "Ceremonias", path: "#" },
                { name: "Actividades", path: "#" }
            ]
        },
        {
            title: "Síguenos",
            links: [
                { name: "Instagram", path: "#" },
                { name: "Facebook", path: "#" },
                { name: "WhatsApp", path: "#" },
                { name: "YouTube", path: "#" }
            ]
        }
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#FFFFFB]">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-600">
                {/* Logo y descripción */}
                <div className="max-w-[400px]">
                    <Link to="/">
                        <img
                            src={assets.logo}
                            alt="logo"
                            className="h-22 invert opacity-80 pb-4"
                        />
                    </Link>

                    <p className="text-gray-600 leading-relaxed">
                        Tu refugio natural en las montañas. Un espacio sagrado donde la
                        desconexión digital se convierte en reconexión espiritual. Aquí, la
                        tierra abraza, el fuego acompaña y el alma encuentra su hogar.
                    </p>

                    {/* Información de contacto básica */}
                    <div className="mt-6 space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#BAA78B]" />
                            Tabacundo, Pedro Moncayo, Ecuador
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} className="text-[#BAA78B]" />
                            +593 98 773 6197
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} className="text-[#BAA78B]" />
                            casamunay593@gmail.com
                        </p>
                    </div>
                </div>

                {/* Enlaces de navegación */}
                <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-8">
                    {linkSections.map((section, index) => (
                        <div key={index} className="min-w-[120px]">
                            <h3 className="font-semibold text-base text-gray-800 md:mb-5 mb-3">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        {section.title === "Navegación" ? (
                                            <Link
                                                to={link.path}
                                                className="hover:text-[#BAA78B] transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.path}
                                                className="hover:text-[#BAA78B] transition-colors duration-300 hover:underline"
                                                target={section.title === "Síguenos" ? "_blank" : undefined}
                                                rel={section.title === "Síguenos" ? "noopener noreferrer" : undefined}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="py-6 text-center">
                <p className="text-sm md:text-base text-gray-600/80">
                    © 2025 Casa Munay. Todos los derechos reservados.
                    <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                        Creado con amor para reconectar contigo mismo.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;