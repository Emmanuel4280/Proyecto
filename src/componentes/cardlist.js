import React from "react";
import Card from "./card";

function CardList({ cards, onCardClick }) {
  return (
    /*contenedor para las tarjetas con Bootstrap para organizar las filas */
    <div className="row">
      {/* Itera sobre la lista de cards usando map, asignando un índice único como key para cada elemento */}
      {cards.map((card, index) => (
        <div key={index} className="col-md-12 col-lg-3">
          {/* Renderiza el componente  pasando las propiedades que vamos a usar */}
          <Card
            nombre={card.nombre}
            imagen={card.imageUrl}
            descripcion={card.descripcion}
            onClick={() => onCardClick(card)} // Al hacer click llama a onCardClick
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
