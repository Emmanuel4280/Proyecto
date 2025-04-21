import React, { useState } from "react";
import "../Hojas-de-estilo/modal.css";

function Modal({ isOpen, onClose, onSubmit, user }) {
  //definimos los estados
  const [imageFile, setImageFile] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [contacto, setContacto] = useState("");
  //si el modal no está abierto no se renderiza
  if (!isOpen) return null;
  //manejamos la subida de la card
  const handleUpload = () => {
    if (!descripcion || !nombre || !ubicacion || !contacto) {
      //si no llenamos un campo imprimimos un mensaje
      setMensaje("Por favor, completá todos los campos.");
      return;
    }
    //creamos la nueva card
    const newCard = {
      nombre,
      descripcion,
      ubicacion,
      contacto,
      imageUrl: imageFile ? URL.createObjectURL(imageFile) : "",
      createdAt: new Date(),
    };

    // Llamar a onSubmit para agregar la tarjeta al estado local
    onSubmit(newCard);
    // Limpiar los campos
    setImageFile(null);
    setNombre("");
    setDescripcion("");
    setUbicacion("");
    setContacto("");
  };

  return (
    <div className="modal-inicio">
      <div className="card-inicio modal-card">
        <div className="card-body text-center">
          <h2 className="card-title">Agregar nuevo perro</h2>
          <p className="card-text">
            Sube la información del perro que quieres agregar.
          </p>

          <input
            type="file"
            className="form-control mb-2"
            onChange={(e) => {
              const file = e.target.files[0];
              {
                /* Obtiene el primer archivo que el usuario selecciona en el input de tipo file. */
              }
              if (file) {
                setImageFile(file);
                {
                  /* Si se selecciona un archivo, se guarda en el estado "imageFile" para su posterior uso. */
                }
              }
            }}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Ingresa el nombre del perro"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //actualizamos el estado del nombre
          />
          <textarea
            className="form-control mb-2"
            placeholder="Descripción del perro"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)} //actualizamos la descripción
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="De donde nos saluda?"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)} //actualizamos la ubicacion
          />
          <input
            type="tel"
            className="form-control mb-2"
            placeholder="Número telefónico o whatsapp +502"
            value={contacto}
            onChange={(e) => setContacto(e.target.value)} //actualizamos el contacto
          />

          <button className="btn btn-primary m-2" onClick={handleUpload}>
            Agregar
          </button>
          <button className="btn btn-secondary m-2" onClick={onClose}>
            Cerrar
          </button>
          {mensaje && <p className="mt-2">{mensaje}</p>}
          {/* Si existe un mensaje , se muestra debajo de los botones. */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
