import React from "react";
import "../Hojas-de-estilo/details.css";

//función para mostrar y manejar los detalles del perrito perruno
function Details({ isOpen, onClose, cardDetails, onDelete }) {
  if (!isOpen) return null;

  //manejamos la función para eliminar perros por id
  const handleDelete = () => {
    onDelete(cardDetails.id);
    onClose();
  };
  //devolvemos el jsx de la estructura
  return (
    <div className="modal-details">
      <div className="modal-dialog-custom">
        <div className="modal-content-custom">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2 className="title-name">{cardDetails.nombre}</h2>
          <div className="image-container">
            <img src={cardDetails.imageUrl} alt="perro" className="dog-image" />
          </div>
          <div className="descripcion">
            <p>{cardDetails.descripcion}</p>
            <p>Ubicado en: {cardDetails.ubicacion}</p>
            <p>Contacto: +502 {cardDetails.contacto}</p>
            <button onClick={handleDelete} className="btn custom-btn w-100">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
