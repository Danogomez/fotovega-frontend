import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const API = "https://fotovega-backend.onrender.com"

function authHeader() {
  return { Authorization: `Bearer ${localStorage.getItem("fotovega_admin_token")}` }
}

export default function AdminContactos() {
  const [contactos, setContactos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    axios.get(`${API}/api/admin/contactos`, { headers: authHeader() })
      .then(res => { setContactos(res.data); setCargando(false) })
      .catch(() => setCargando(false))
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 px-8 h-16 flex items-center gap-4">
        <Link to="/admin/dashboard" className="text-gray-500 hover:text-white text-sm transition">← Dashboard</Link>
        <h1 className="font-light tracking-widest">Mensajes de contacto</h1>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-10">

        {cargando ? (
          <p className="text-gray-500 animate-pulse">Cargando mensajes...</p>
        ) : contactos.length === 0 ? (
          <p className="text-gray-500">No hay mensajes todavía.</p>
        ) : (
          <div className="space-y-4">
            {contactos.map(c => (
              <div key={c.id} className="border border-white/10 rounded-xl p-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-lg">{c.name}</p>
                    <p className="text-gray-400 text-sm">{c.email}</p>
                  </div>
                  <p className="text-gray-600 text-xs">
                    {new Date(c.created_at).toLocaleDateString("es-AR", {
                      day: "numeric", month: "long", year: "numeric",
                      hour: "2-digit", minute: "2-digit"
                    })}
                  </p>
                </div>
                <p className="text-gray-300 mt-3 border-t border-white/5 pt-3">{c.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
