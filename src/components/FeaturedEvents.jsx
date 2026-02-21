import { Link } from "react-router-dom"
import { eventos } from "../data/events"

function FeaturedEvents() {
  return (
    <section className="py-28 px-6 md:px-20 bg-black">

      <div className="flex justify-between items-end mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">
          Últimas fechas
        </h2>

        <Link
          to="/eventos"
          className="text-sm tracking-widest uppercase border-b border-white hover:text-red-500 transition"
        >
          Ver todas
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {eventos.slice(0,3).map((evento) => (
          <Link
            key={evento.id}
            to={`/eventos/${evento.id}`}
            className="relative group overflow-hidden"
          >

            {/* Imagen */}
            <img
              src={evento.imagen}
              className="w-full h-[550px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Texto */}
            <div className="absolute bottom-10 left-8 z-10">
              <h3 className="text-2xl font-light tracking-wide">
                {evento.nombre}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Ver álbum completo →
              </p>
            </div>

          </Link>
        ))}

      </div>

    </section>
  )
}

export default FeaturedEvents
