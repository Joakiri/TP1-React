import React from 'react'

export default function Cita({ cita }){
    return (
      <>
        <div className="cita">
          <p>Mascota: {cita.mascota}</p>
          <p>Dueño: {cita.propietario}</p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Sintomas: <span>{cita.sintomas}</span></p>
          <button className="button eliminar u-full-width">Eliminar ×</button>
        </div>
      </>
    )
}