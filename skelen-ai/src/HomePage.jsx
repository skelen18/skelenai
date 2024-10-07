import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold font-mono tracking-tight text-pink-500">
          SkelenAI
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          The Ultimate AI Assistant for Developers.
        </p>
      </header>

      <main className="text-center">
        <p className="text-gray-400 mb-6 text-xl max-w-2xl">
          SkelenAI is your go-to AI for generating high-quality code, answering programming questions, and even generating images based on detailed prompts. Whether you’re coding or brainstorming creative ideas, SkelenAI has got you covered!
        </p>
        <div className="space-x-4">
          <Link to="/chat-ai">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
              Start Chat AI
            </button>
          </Link>
          <Link to="/image-ai">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
              Generate Image AI
            </button>
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-5 text-gray-500 text-sm">
        <p>&copy; 2024 SkelenAI - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
