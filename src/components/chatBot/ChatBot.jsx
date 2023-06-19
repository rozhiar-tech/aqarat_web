import React from "react";
import "./ChatBot.css";
import { useState } from "react";
import ChatComponent from "./ChatBox";
function ChatBot() {
  const [showChat, setShowChat] = useState(false);

  const handleAvatarClick = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };
  return (
    <div class="sticky-avatar">
      <img src="./chat-bot.jpg" alt="Avatar" onClick={handleAvatarClick} />
      {showChat && (
        <div className="chat-container">
          <ChatComponent />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
