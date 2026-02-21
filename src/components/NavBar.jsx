import { Link } from "react-router-dom"
import { useCarrito } from "../context/CarritoContext"

export default function NavBar() {
  const { cantidad } = useCarrito()

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">

        <Link to="/" className="text-white font-light tracking-widest text-2xl">
          FOTOVEGA<span className="text-red-500">23</span>
        </Link>

        <div className="flex items-center gap-10 text-base text-gray-300">
          <Link to="/eventos" className="hover:text-white transition font-light tracking-wide">Eventos</Link>
          <Link to="/contacto" className="hover:text-white transition font-light tracking-wide">Contacto</Link>

          <Link to="/carrito" className="relative hover:text-white transition">
            <span className="text-xl">🛒</span>
            {cantidad > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cantidad}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  )
}
