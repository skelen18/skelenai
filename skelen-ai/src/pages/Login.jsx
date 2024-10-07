import { useState } from 'react';
import { auth } from '../firebaseConfig'; // Import firebase config
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/chat'); // Po přihlášení přesměrovat na chat
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Přihlášení</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Heslo" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Přihlásit se</button>
    </div>
  );
};

export default Login;
