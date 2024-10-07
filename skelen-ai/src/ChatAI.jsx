import { useState } from 'react';
import axios from 'axios';

const ChatAI = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    try {
      const res = await axios.post('http://localhost:5000/chat', { message });
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-6">Chat AI</h1>
      <textarea
        className="p-4 bg-gray-800 rounded-lg text-white w-2/3"
        rows="4"
        placeholder="Napiš zprávu..."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={handleChat} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Odeslat zprávu
      </button>
      {response && <div className="mt-4 p-4 bg-gray-700 rounded-lg">{response}</div>}
    </div>
  );
};

export default ChatAI;
