import React, { useState } from "react";
import { signOut } from "./componentes/firebase";
import { auth } from "./componentes/firebase";
import NavBar from "./componentes/nav-bar.js";
import Modal from "./componentes/modal.js";
import Details from "./componentes/details.js";
import CardList from "./componentes/cardlist.js";
import Login from "./componentes/login.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  // Estados de la app
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]); // Lista de tarjetas
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // Función para agregar una card de manera local
  const handleAddCard = (card) => {
    const cardWithId = {
      ...card,
      id: crypto.randomUUID(),
    };

    setCards((prevCards) => [...prevCards, cardWithId]);
    setIsModalOpen(false);
  };

  // Función cuando el usuario hace click en una card para ver detalles
  const handleCardClick = (card) => {
    setSelectedCard(card); // Guardamos la card seleccionada
    setIsDetailsModalOpen(true); // Abrimos el modal de detalles
  };

  //función para eliminar una card
  const handleDelete = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };
  // Función para mostrar el formulario de login
  const goToLogin = () => {
    if (user) {
      alert("Ya has iniciado sesión.");
      return;
    }
    setShowLogin(true);
  };
  //función para manejar el cerrado de la sesión
  const handleLogout = async () => {
    try {
      await signOut(auth); // Llamar a la función de cierre de sesión
      setUser(null); // Limpiar el estado de usuario
      alert("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="App">
      {/* Barra de navegación con botón para abrir modal */}

      <NavBar
        openModal={() => setIsModalOpen(true)}
        goToLogin={goToLogin}
        user={user}
        onLogout={handleLogout}
      />

      {showLogin && (
        <Login
          onLoginSuccess={(user) => {
            setUser(user);
            setShowLogin(false); // Cierra el login al autenticar
          }}
        />
      )}

      {/* Lista de cards con perros */}
      <CardList cards={cards} onCardClick={handleCardClick} />

      {/* Modal para subir nuevo perro */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
        user={user}
      />

      {/* Modal para ver detalles del perro */}
      <Details
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        cardDetails={selectedCard}
        onDelete={handleDelete}
      />
    </div>
  );
}
