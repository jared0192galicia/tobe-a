import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'; // Usamos el ícono de "send" (avión de papel)

// Definimos los colores de fondo para los mensajes y la barra superior
const messageBackground = 'bg-terracotta-pink'; // Fondo de los mensajes
const userMessageBackground = 'bg-desert-sand'; // Fondo para el mensaje del usuario

export default function ChatBot() {
  const [visible, setVisible] = useState(false); // Maneja la visibilidad del chat
  const [messages, setMessages] = useState<string[]>([]); // Guarda los mensajes del chat
  const [userInput, setUserInput] = useState(''); // Entrada del usuario

  // Abre o cierra el chat
  const toggleChat = () => {
    setVisible(!visible);
  };

  // Cierra el chat
  const handleClose = () => {
    setVisible(false);
  };

  // Maneja el envío del mensaje
  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prevMessages) => [...prevMessages, `Usuario: ${userInput}`]); // Agrega el mensaje del usuario
      setMessages((prevMessages) => [
        ...prevMessages,
        `Bot: Recibido: ${userInput}`,
      ]); // Agrega una respuesta del bot (de ejemplo)
      setUserInput(''); // Limpia el campo de entrada
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón de abrir el chat */}
      {!visible && (
        <div
          className="bg-wine-red text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-terracotta-pink transition duration-300"
          onClick={toggleChat}
        >
          <FaComments size={24} />
        </div>
      )}

      {/* Chat flotante visible */}
      {visible && (
        <div
          className="bg-ivory-light shadow-lg rounded-lg w-[350px] max-w-full border-2 border-wine-red h-[450px] flex flex-col"
          style={{ transition: 'all 0.3s ease-in-out' }}
        >
          {/* Barra superior con el título y el botón de cerrar */}
          <div className="flex items-center bg-wine-red text-white p-2 rounded-t-lg cursor-pointer">
            <span className="flex-grow">Chat con nosotros</span>
            <button
              className="text-white hover:text-terracotta-pink"
              onClick={handleClose}
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Contenedor de los mensajes */}
          <div className="flex-grow p-4 space-y-2 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-white ${
                  index % 2 === 0 ? messageBackground : userMessageBackground
                }`}
              >
                {message}
              </div>
            ))}
          </div>

          {/* Campo de entrada y botón de enviar */}
          <div className="flex items-center p-4 bg-ivory-light border-t-2 border-olive-dark">
            <input
              type="text"
              className="flex-grow p-2 border border-olive-dark rounded-lg"
              placeholder="Escribe tu pregunta..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className="ml-2 p-2 bg-olive-dark text-white rounded-lg hover:bg-terracotta-pink"
              onClick={handleSendMessage}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
