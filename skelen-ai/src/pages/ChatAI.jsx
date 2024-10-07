// src/pages/ChatAI.jsx
import { useState } from "react";
import { getAuth } from "firebase/auth"; // Import Firebase auth
import { db } from "../firebase"; // Firebase DB
import { collection, addDoc } from "firebase/firestore"; // For storing chats

function ChatAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;
    setMessages([...messages, { role: "user", content: userInput }]);

    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: userInput }),
    });

    const data = await response.json();
    const aiMessage = data.message;

    setMessages([...messages, { role: "user", content: userInput }, { role: "ai", content: aiMessage }]);
    setInput("");

    // Uložit chat do Firebase
    if (user) {
      const userChatsRef = collection(db, `users/${user.uid}/chats`);
      await addDoc(userChatsRef, { userInput, aiMessage, timestamp: new Date() });
    }
  };

  return (
    <div className="chat-container">
      <h1 className="text-3xl font-bold mb-4">Chat with SkelenAI</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.role === "user" ? "user-message" : "ai-message"}>
            {msg.content}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="input-box"
      />
      <button onClick={handleSendMessage} className="send-button">Send</button>
    </div>
  );
}

export default ChatAI;
