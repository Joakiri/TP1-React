import React from 'react'

export default function Cita({ cita, setCitas, citas }) {
  const handleEliminar = () => {
    const confirmar = window.confirm('¿Deseas eliminar esta cita?')
    if (confirmar) {
      const nuevasCitas = citas.filter(c => c.id !== cita.id)
      setCitas(nuevasCitas)
    }
  }

  return (
    <>
      <div className="cita">
        <p>Mascota: {cita.mascota}</p>
        <p>Dueño: {cita.propietario}</p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <button className="button eliminar u-full-width" onClick={handleEliminar}>Eliminar X</button>
      </div>
    </>
  )
}