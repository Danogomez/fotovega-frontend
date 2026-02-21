import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const API = "https://fotovega-backend.onrender.com"

function Home() {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    axios.get(`${API}/api/eventos`)
      .then(res => setEventos(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center px-6 md:px-20">
        <img
          src="/fotos/hero.jpg"
          alt="Karting"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          onError={e => e.target.style.display = 'none'}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-light leading-tight mb-8">
            Capturando
            <span className="block border-b-2 border-red-600 w-fit pb-2">
              la velocidad.
            </span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-12 font-light">
            Fotografía artística en competencias de karting.
            <br />Cada curva cuenta una historia.
          </p>
          <Link
            to="/eventos"
            className="border border-white/50 hover:border-white hover:bg-white hover:text-black text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 font-medium"
          >
            Ver eventos →
          </Link>
        </div>
      </section>

      {/* EVENTOS DESTACADOS */}
      {eventos.length > 0 && (
        <section className="py-24 px-6 md:px-20 bg-zinc-950">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-4 font-semibold">Últimos eventos</p>
          <h2 className="text-3xl md:text-5xl font-light mb-16">Álbumes disponibles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eventos.slice(0, 3).map(evento => (
              <Link
                to={`/eventos/${evento.id}`}
                key={evento.id}
                className="group relative overflow-hidden"
              >
                {evento.imagen_portada ? (
                  <img
                    src={`${API}${evento.imagen_portada}`}
                    alt={evento.nombre}
                    className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-[500px] bg-zinc-900 flex items-center justify-center">
                    <span className="text-gray-600 text-6xl">📸</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 z-10">
                  <h3 className="text-2xl font-light tracking-wide">{evento.nombre}</h3>
                  {evento.fecha && (
                    <p className="text-gray-400 text-sm mt-1">
                      {new Date(evento.fecha).toLocaleDateString("es-AR", {
                        day: "numeric", month: "long", year: "numeric"
                      })} — {evento.lugar}
                    </p>
                  )}
                  <span className="text-sm text-red-500 tracking-widest mt-3 block font-medium">
                    VER ÁLBUM →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}

export default Home
