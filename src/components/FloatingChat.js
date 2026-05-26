import React, { useState } from "react";
import { FaComment, FaTimes, FaPaperPlane } from "react-icons/fa";
import focaIcon from "../Assets/foca-clean.png";
import "./FloatingChat.css";

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    // Adiciona a mensagem do usuário
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsThinking(true);

    // Simula pensamento por 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Adiciona resposta de echo
    const echoMessage = {
      id: Date.now() + 1,
      text: inputValue,
      sender: "bot",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, echoMessage]);
    setIsThinking(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isThinking) {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getButtonClassName = () => {
    return isOpen ? "floating-chat-button" : "floating-chat-button attention-pulse";
  };

  return (
    <div className="floating-chat-container">
      {/* Botão flutuante */}
      <button
        className={getButtonClassName()}
        onClick={toggleChat}
        title={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <FaComment size={24} />
        )}
      </button>

      {/* Painel do chat */}
      {isOpen && (
        <div className="floating-chat-panel">
          {/* Cabeçalho */}
          <div className="chat-header">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img 
                src={focaIcon} 
                alt="FocaBot" 
                style={{ height: "24px", width: "24px" }}
              />
              <h3>Chat sobre o Vagner</h3>
            </div>
            <button
              className="close-button"
              onClick={toggleChat}
              title="Fechar"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Área de mensagens */}
          <div className="messages-container">
            {messages.length === 0 ? (
              <div className="empty-message">
                <p>Olá! Estou aqui para falar sobre o Vagner! , pode me perguntar qualquer coisa. 👋</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                >
                  {msg.sender === "bot" && (
                    <img 
                      src={focaIcon} 
                      alt="FocaBot" 
                      className="bot-icon" 
                      title="FocaBot - Seu assistente inteligente"
                    />
                  )}
                  <div className="message-content">
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))
            )}

            {/* Status de pensando */}
            {isThinking && (
              <div className="message bot-message">
                <div className="message-content">
                  <div className="thinking-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Digite uma mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isThinking}
            />
            <button
              className="send-button"
              onClick={handleSendMessage}
              disabled={isThinking || inputValue.trim() === ""}
              title="Enviar"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingChat;
