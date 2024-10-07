import { useState } from 'react';
import axios from 'axios';

const ImageAI = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const handleGenerateImage = async () => {
    try {
      const res = await axios.post('http://localhost:5000/generate-image', { prompt });
      setImage(res.data.data[0].url); // Předpoklad, že odpověď obsahuje URL generovaného obrázku
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-6">Image Generator AI</h1>
      <textarea
        className="p-4 bg-gray-800 rounded-lg text-white w-2/3"
        rows="4"
        placeholder="Zadej popis pro obrázek..."
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleGenerateImage} className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
        Vygenerovat obrázek
      </button>
      {image && <img src={image} alt="Generated" className="mt-4" />}
    </div>
  );
};

export default ImageAI;
