import React, { useState } from 'react'

export default function Formulario({ setCitas, citas }) {
  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!mascota || !propietario || !fecha || !hora || !sintomas) {
      setError(true)
      return
    }

    setError(false)

    const nuevaCita = {
      id: Date.now(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas
    }

    setCitas([...citas, nuevaCita])

    setMascota('')
    setPropietario('')
    setFecha('')
    setHora('')
    setSintomas('')
  }

  return (
    <>
      <h2>Crear mi cita</h2>
      {error && <p className="alerta-error">Todos los campos son obligatorios</p>}
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)} />
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)} />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </>
  )
}