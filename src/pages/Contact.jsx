import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("https://fotovega-backend.onrender.com/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      console.log(data)

      alert("Mensaje enviado 🚀")

      setFormData({
        nombre: "",
        email: "",
        mensaje: ""
      })

    } catch (error) {
      console.error(error)
      alert("Error al enviar")
    }
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6"
      >

        <h1 className="text-4xl font-light mb-6">
          Contacto
        </h1>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-700 p-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-700 p-3"
          required
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-700 p-3 h-32"
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 py-3 hover:bg-red-700 transition"
        >
          Enviar
        </button>

      </form>

    </div>
  )
}

export default Contact
