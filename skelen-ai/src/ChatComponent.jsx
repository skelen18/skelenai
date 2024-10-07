import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const saveChat = async (message, response) => {
  try {
    await addDoc(collection(db, "chats"), {
      message: message,
      response: response,
      userId: auth.currentUser.uid,
      timestamp: new Date()
    });
  } catch (error) {
    console.error("Error saving chat: ", error);
  }
};

// Po získání odpovědi AI zavoláš saveChat
const sendMessage = async () => {
  try {
    const res = await axios.post('http://localhost:5000/chat', { message });
    const responseText = res.data.choices[0].message.content;
    setResponse(responseText);
    saveChat(message, responseText); // Uložení do Firebase
  } catch (error) {
    console.error(error);
  }
};
