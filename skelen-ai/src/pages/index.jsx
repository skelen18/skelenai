// src/pages/index.jsx
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold mb-4">Welcome to SkelenAI</h1>
      <p className="mb-6">Please choose which AI service you would like to use:</p>

      <div className="flex justify-center space-x-6">
        <button
          className="send-button"
          onClick={() => navigate("/chat-ai")}
        >
          Chat AI
        </button>

        <button
          className="generate-button"
          onClick={() => navigate("/image-ai")}
        >
          Image Generator AI
        </button>
      </div>
    </div>
  );
}

export default Home;
