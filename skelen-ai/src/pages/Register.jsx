import { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/chat'); // Po registraci přesměrovat na chat
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Registrace</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Heslo" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrovat se</button>
    </div>
  );
};

export default Register;
