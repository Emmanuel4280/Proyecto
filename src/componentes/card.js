import React from "react";
import "../Hojas-de-estilo/card.css";

/*definimos la función con los parámetros a recibir */

function Card({ nombre, imagen, onClick }) {
  /*retornamos la estructura del componente */
  return (
    <div
      className="container "
      style={{ width: "15rem", height: "24rem" }} //establecemos tamaño fijo a la carta
      onClick={onClick} //asociamos el evento onClick que ejecutará la función pasada
    >
      <div className="row justify-content-center">
        {/* Contenedor de Bootstrap para alinear el contenido en el centro */}
        <div>
          <div className="card">
            {/* Contenedor principal de la tarjeta con el estilo de 'card' de Bootstrap */}
            <img className="imagen rounded" src={imagen} alt="Foto del perro" />
            {/* redondeamos las esquinas de la imagen con Bootstrap */}
            <div className="Card-body "></div>
            {/*fs-1 y fw-bold para hacer el texto grande y en negrita */}
            <p className="nombre-perro fs-1 fw-bold text-dark text-center">
              {nombre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card; //exportamos para que se use en otros lugares
