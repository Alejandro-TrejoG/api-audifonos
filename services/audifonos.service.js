// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { getFirestore, getDocs, addDoc, updateDoc, deleteDoc, collection, doc } = require("firebase/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfJjCWfsrcb2LQCRwZ8T3To5-89rlBYWo",
  authDomain: "venta-audifonos.firebaseapp.com",
  projectId: "venta-audifonos",
  storageBucket: "venta-audifonos.appspot.com",
  messagingSenderId: "512929694214",
  appId: "1:512929694214:web:f8286a30641757de677987"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class AudifonosService {
  async getDataUsers() {
    try {
      const usuarios = collection(db, "usuarios");
      const response = await getDocs(usuarios);
      const ids = response.docs.map((doc) => doc.id);
      const data = response.docs.map((doc) => doc.data());
      let result = [];
      for (let i = 0; i < data.length; i++) {
        result.push({ id: ids[i], ...data[i] });
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getDataAudifonos(id) {
    try {
      const audifonos = collection(db, "audifonos");
      const response = await getDocs(audifonos);
      const ids = response.docs.map((doc) => doc.id);
      const data = response.docs.map((doc) => doc.data());
      let result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].usuario == id) {
          result.push({ id: ids[i], ...data[i] });
        }
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async registerUser(body) {
    try {
      const usuarios = collection(db, "usuarios");
      await addDoc(usuarios, body);
    } catch (error) {
      throw error;
    }
  }

  async registerAudifonos(body) {
    try {
      const audifonos = collection(db, "audifonos");
      await addDoc(audifonos, body);
    } catch (error) {
      throw error;
    }
  }

  async updateAudifonos(id, body) {
    try {
      console.log(body);
      const audifonos = doc(db, "audifonos", id);
      await updateDoc(audifonos, body);
    } catch (error) {
      throw error;
    }
  }

  async deleteAudifonos(id) {
    try {
      const audifonos = doc(db, "audifonos", id);
      await deleteDoc(audifonos);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AudifonosService;
