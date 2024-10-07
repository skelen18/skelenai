import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatAI from './pages/ChatAI';
import ImageAI from './pages/ImageAI';
import SelectFeature from './pages/SelectFeature';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-feature" element={<SelectFeature />} />
        <Route path="/chat-ai" element={<ChatAI />} />
        <Route path="/image-ai" element={<ImageAI />} />
      </Routes>
    </Router>
  );
}

export default App;
