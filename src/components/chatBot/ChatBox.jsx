import React, { useState } from "react";
import "./ChatBot.css";

const predefinedQA = [
  { question: "What's your name?", answer: "I'm a bot created by OpenAI." },
  { question: "How are you?", answer: "I'm doing great! Thanks for asking." },
  // Add more predefined questions and answers here
];

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input) {
      setMessages([...messages, { user: "You", text: input }]);

      // Check if the input matches any predefined question
      const predefinedAnswer = predefinedQA.find(
        (qa) => qa.question.toLowerCase() === input.toLowerCase()
      );

      if (predefinedAnswer) {
        // If a predefined answer is found, add it to the messages
        setMessages((currentMessages) => [
          ...currentMessages,
          { user: "Bot", text: predefinedAnswer.answer },
        ]);
      }

      setInput("");
    }
  };

  return (
    <div className="chat-component">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <b>{message.user}</b>: {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
